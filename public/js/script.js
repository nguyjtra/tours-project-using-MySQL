const { Json } = require("sequelize/types/lib/utils");

//tour-img
const tourImage=document.querySelector('.tour-images');
if(tourImage){
    var swiper = new Swiper(".tour-images", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
}


//cart
const cart=localStorage.getItem('cart');
if(!cart){
  localStorage.setItem('cart',JSON.stringify([])); 
}
const AddToCart=document.querySelector('[from-add-to-cart]');
if(AddToCart){
  AddToCart.addEventListener("submit",(event)=>{
    event.preventDefault();
    // ngan chan load lai trang
    const tourId=parseInt(AddToCart.getAttribute("tour-id"));
    const quantity=parseInt(AddToCart.quantity.value)
    if (tourId && quantity>0) {
      const cart= JSON.parse(localStorage.getItem("cart"))

      const exisTour=cart.find(item=>time.tourId==tourId)
      if (condition) {
        exisTour.quantity= exisTour.quantity+quantity
      } else {
        cart.push({
          tourId:tourId,
          quantity:quantity
        })
      }
      localStorage.setItem("cart",JSON.stringify(cart))
    }
  })
}