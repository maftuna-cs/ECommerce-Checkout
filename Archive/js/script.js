const products = [
    {
      name: "Pants",
      price: 50.99,
      qty: 1,
      extendedPrice: 50.99
    },
    {
      name: "Shirts",
      price: 15,
      qty: 1,
      extendedPrice: 15
    }
  ];
  
  
  function getTemplate(product, i) {
    return  `
      <tr>
        <td>${product.name}</td>
        <td>
          <button id="decrement${i}">-</button>
          <span id="qty${i}">${product.qty}</span>
          <button id="increment${i}">+</button>
        </td>
        <td>$<span>${product.price.toFixed(2)}</span></td>
        <td>$<span id="extendedPrice${i}">${product.extendedPrice}</span></td>
      </tr>`;
  };
  
  function incrementProduct(product, i) {
    product.qty++;
    product.extendedPrice = (product.qty * product.price).toFixed(2);
    document.getElementById('qty'+i).innerHTML = product.qty;
    document.getElementById('extendedPrice'+i).innerHTML = product.extendedPrice;
  }
  
  function decrementProduct(product, i) {
    if(product.qty > 0) {
      product.qty--;
      product.extendedPrice = (product.qty * product.price).toFixed(2)
      document.getElementById('qty'+i).innerHTML = product.qty;
      document.getElementById('extendedPrice'+i).innerHTML = product.extendedPrice;
    }
  }
  
  function calculate() {
    let subTotal = 0;
    products.forEach(prod => subTotal += parseFloat(prod.extendedPrice));
    const tax = subTotal * 0.13; // 13% tax rate;
    document.getElementById(`output`).innerHTML = `
    <li>Subtotal: ${subTotal.toFixed(2)}</li>
    <li>Tax: ${tax.toFixed(2)}</li>
    <li>Total: ${(subTotal + tax).toFixed(2)}</li>
    `;
  }
  
  
  window.addEventListener(`load`, () => {
    document.getElementById(`products`).innerHTML = products.map((prd, index) => getTemplate(prd, index)).join('');
    
    products.forEach((prod, index) => {
      document.getElementById('increment'+ index).addEventListener(`click`, () => {incrementProduct(prod, index)});
      document.getElementById('decrement'+ index).addEventListener(`click`, () => {decrementProduct(prod, index)});
    });
    
    document.getElementById(`calculate`).addEventListener(`click`, calculate);
  });
  
  
  