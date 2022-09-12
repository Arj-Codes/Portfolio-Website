const v=document.getElementById('contact-form');

v.addEventListener("submit",(e)=>{
  e.preventDefault();
  console.log("hello")
  alert("madarchod")
})

const btn=document.getElementsByClassName("contact-btn");

btn.addEventListener("click",(e)=>{
  e.preventDefault();
  alert("madarchod")
})