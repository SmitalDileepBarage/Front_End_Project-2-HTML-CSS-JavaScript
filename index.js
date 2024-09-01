let bagItems;
onLoad();

function onLoad(){
  let bagItemStr=localStorage.getItem('bagItems');
  bagItems=bagItemStr?JSON.parse(bagItemStr): [];
displayItemsOnHomepage() ;
displayBagItemsNumber();
}




function addToBag(itemId){

bagItems.push(itemId);
localStorage.setItem('bagItems' ,JSON.stringify(bagItems));
displayBagItemsNumber();


}

function displayBagItemsNumber()
{
  let bagItemsTotalCount=document.querySelector('.bag_item_count');
  if(bagItems.length > 0)
  {
    bagItemsTotalCount.style.visibility="visible";
  bagItemsTotalCount.innerHTML=bagItems.length;
   }
  else{
    bagItemsTotalCount.style.visibility="hidden";

  }

}
 
 
 
 
 function displayItemsOnHomepage(){

  let getItemsContainer=document.querySelector('.items_container');
  if(!getItemsContainer){
    return;
  }
  let innerHTML="";
  
  

items.forEach(items_prop =>{

innerHTML+=`<div class="item_container">
        <img class="item_image" src=${items_prop. image} alt="earring">


        <div class="rating">
          ${items_prop.rating.stars} ⭐ | ${items_prop.rating.count}
        </div>
        <div class="company_name">${items_prop.company}</div>
        <div class="item_name">${items_prop.item_name}</div>
        <div class="pricing">
          <div class="current_price">Rs.${items_prop.current_price}</div>
          <div class="original_price">Rs.${items_prop.original_price}</div>
          <div class="discount">(${items_prop.discount_percentage}% OFF)</div>

        </div>
        <button class="btn_card" onclick="addToBag(${items_prop.id})">Add to Cart</button>
      </div>`
    });
getItemsContainer.innerHTML=innerHTML;
 }

function openBag(){

location.replace("http://127.0.0.1:5501/HTML+CSS+JScript/pages/bag.html");

}
