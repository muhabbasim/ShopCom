
// -------------------- product details js --------------------
let mainImg = document.getElementById('main-img');
let subImgs = document.getElementsByClassName('small-img');
console.log(mainImg.src);
console.log(subImgs[1]);

for(var i = 0; i < subImgs.length; i++) {
  subImgs[i].addEventListener('click', changeSrc);
   
}


function changeSrc(event){
  let subImgsClicked = event.target;
  mainImg.src = subImgsClicked.src;

}


// subImgs[0].onClick = function() {
//   mainImg.src = subImgs[1].src;
//   console.log(312)
// }
// subImgs[1].onClick = function() {
//   mainImg.src = subImgs[1].src;
// }