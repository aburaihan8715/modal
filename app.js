// variables
const btnsOpenModal = document.querySelectorAll(".btn-open-modal");
const modalDiv=document.querySelector(".modal");
const btnCloseModal=document.querySelector(".btn-close-modal");
const backDropDiv=document.querySelector(".back-drop");

// function for open modal and backdrop
function open(){
  modalDiv.classList.add("open");
  backDropDiv.classList.add("open");
}

// function for close modal and backdrop
function close(){
  modalDiv.classList.remove("open");
  backDropDiv.classList.remove("open");
}

// event listener for open modal 
for(let i=0; i<btnsOpenModal.length; i++){
btnsOpenModal[i].addEventListener("click", function(){
  //1.using style
  // modalDiv.style.display="block";
  // backDropDiv.style.display='block';
  // 2. adding classlist
  open();
})
}

// event listener for close modal 
btnCloseModal.addEventListener("click", function(){
 close();
})

// event listener for close backdrop
backDropDiv.addEventListener("click", function(){
 close();
})





