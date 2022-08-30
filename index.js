// document.querySelector(".collapse").addEventListener("keypress", handleKey);
// function handleKey(event){
//   if(event.key === "s"){
//     console.log('hi');
//     document.querySelector(".collapse").toggleClass('show');
//   }
// }

$(document).keypress(function(event){
  if(event.key === "s"){
    $(".list-group").addClass("show");
  }
})
$(document).click(function(){
    $(".list-group").removeClass("show");
})
