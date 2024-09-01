const convinience_fees=99;
let bagItemObjects;
onload();

function onload(){
  loadBagItemObjects();
  displayBagItems();
  displayBagSummary();
  console.log("onload run");
}
function displayBagSummary(){
let bagSummaryElement=document.querySelector('.bag-summary');
let totalItem=bagItemObjects.length;
let totalMRP=0;
let totalDiscount=0;
let finalPayment=0;

bagItemObjects.forEach(bagItem=>{

totalMRP +=bagItem.original_price;

totalDiscount+=bagItem.original_price-bagItem.current_price;

finalPayment=totalMRP-totalDiscount+convinience_fees;
})

bagSummaryElement.innerHTML=`
<div class="bag-details-container">
        <div class="price-header">PRICE DETAILS (${totalItem} Items) </div>
        <div class="price-item">
          <span class="price-item-tag">Total MRP </span>
          <span class="price-item-value">Rs ${totalMRP}</span>
        </div>
        <div class="price-item">
          <span class="price-item-tag">Discount on MRP</span>
          <span class="price-item-value priceDetail-base-discount">-Rs ${totalDiscount}</span>
        </div>
        <div class="price-item">
          <span class="price-item-tag">Convenience Fee</span>
          <span class="price-item-value">Rs 99</span>
        </div>
        <hr>
        <div class="price-footer">
          <span class="price-item-tag">Total Amount</span>
          <span class="price-item-value">Rs ${finalPayment}</span>
        </div>
      </div>
      <button class="btn-place-order">
        <div class="css-xjhrni">PLACE ORDER</div>
      </button>
`;
}
function loadBagItemObjects(){
console.log(bagItems);

bagItemObjects=bagItems.map(itemId=>{
  for(let i=0;i<items.length;i++){
   if( itemId==items[i].id )
    {
    return items[i];
   }
  }
});
console.log(bagItemObjects);
console.log("loadBagItemObjects run");
}

function displayBagItems(){
  let containerElement=document.querySelector('.bag-items-container');
  let innerHTML='';
  bagItemObjects.forEach(bagItems =>{ innerHTML+=generateItemHtml(bagItems)});
 containerElement.innerHTML=innerHTML;
 console.log("displayBagItems run");
}
function removeFromBag(itemId){
  bagItems=bagItems.filter(bagItemId=>bagItemId  != itemId);
  localStorage.setItem('bagItems' ,JSON.stringify(bagItems));
  console.log("removeFromBag run");
loadBagItemObjects();
displayBagItemsNumber();
displayBagItems();
displayBagSummary();
console.log("after removeFromBag run");
}
function generateItemHtml(item){
return `<div class="bag-item-container">
          <div class="item-left-part">
            <img class="bag-item-img" src="../${item.image}">
          </div>
          <div class="item-right-part">
            <div class="company">${item.company}</div>
            <div class="item-name">${item.item_name}</div>
            <div class="price-container">
              <span class="current-price">${item.current_price}</span>
              <span class="original-price">Rs ${item.original_price}</span>
              <span class="discount-percentage">( ${item.discount_percentage} % OFF)</span>
            </div>
            <div class="return-period">
              <span class="return-period-days">${item.return_period} days</span> return available
            </div>
            <div class="delivery-details">
              Delivery by
              <span class="delivery-details-days">${item.delivery_date}</span>
            </div>
          </div>

          <div class="remove-from-cart" onClick="removeFromBag(${item.id})">X</div>
        </div>
        `;
      
}