const products = [
    {
      name: "Pants",
      price: 40.99,
      quantity: 1,
      extendedPrice: 40.99
    },
    {
      name: "Shirts",
      price: 10.99,
      quantity: 1,
      extendedPrice: 15
    }
  ];
  
  
  function getTemplate(product, i) {
    return  `
      <tr>
        <td>${product.name}</td>
        <td>
          <button id="minusBtn${i}">-</button>
          <span id="qty${i}">${product.quantity}</span>
          <button id="plusBtn${i}">+</button>
        </td>
        <td>$<span>${product.price.toFixed(2)}</span></td>
        <td>$<span id="extendedPrice${i}">${product.extendedPrice}</span></td>
      </tr>`;
  };
  
  function plusProduct(product, i) {
    product.quantity++;
    product.extendedPrice = (product.quantity * product.price).toFixed(2);
    document.getElementById('qty'+i).innerHTML = product.quantity;
    document.getElementById('extendedPrice'+i).innerHTML = product.extendedPrice;
  }
  
  function minusProduct(product, i) {
    if(product.quantity > 0) {
      product.quantity--;
      product.extendedPrice = (product.quantity * product.price).toFixed(2)
      document.getElementById('qty'+i).innerHTML = product.quantity;
      document.getElementById('extendedPrice'+i).innerHTML = product.extendedPrice;
    }
  }
  
  function calculate() {
    let subTotal = 0;
    products.forEach(prod => subTotal += parseFloat(prod.extendedPrice));
    const tax = subTotal * 0.13;
    document.getElementById(`result`).innerHTML = `
    <li>Subtotal: ${subTotal.toFixed(2)}</li>
    <li>Tax: ${tax.toFixed(2)}</li>
    <li>Total: ${(subTotal + tax).toFixed(2)}</li>
    `;
  }
  
  
  window.addEventListener(`load`, () => {
    document.getElementById(`products`).innerHTML = products.map((prd, index) => getTemplate(prd, index)).join('');
    
    products.forEach((prod, index) => {
      document.getElementById('plusBtn'+ index).addEventListener(`click`, () => {plusProduct(prod, index)});
      document.getElementById('minusBtn'+ index).addEventListener(`click`, () => {minusProduct(prod, index)});
    });
    
    document.getElementById(`calculate`).addEventListener(`click`, calculate);
  });

  function addCoupon() {
    let promoCode = prompt (
      'Enter Promo Code'
    );
    if(promoCode === 'NoTax'){
      totalLabel.innerHTML = subtotalLabel.innerText;
      taxLabel.innerHTML="No Tax Applied";
    } else if(promoCode==='FIFTYFIFTY'){
      let subTotal = subTotalLabel.innerHTML = subTotalLabel.innerText/2;
    }
  }
  
  
  