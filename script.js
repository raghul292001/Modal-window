"use strict";
const modal =document.querySelector('.modal');
const overlay =document.querySelector('.overlay');
const openModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');
//open function
const open = function(){
    console.log("button clicked");
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
//close function
const close = function(){
    console.log("button clicked");
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i=0;i<openModal.length;i++)
openModal[i].addEventListener('click',open)
closeModal.addEventListener('click',close);
overlay.addEventListener('click',close);

//Esc event 
document.addEventListener('keydown',function(e){
  console.log(e.key);
  if(e.key=== 'Escape'){
    if(!modal.classList.contains('hidden')){
        close();
    }
  }
})