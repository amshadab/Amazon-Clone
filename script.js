const input = document.getElementById('inp');
const items=document.getElementsByClassName('nav-search');
const nav_search=items[0];
let isFocused=false;

input.addEventListener('focus',()=>{
    isFocused=true;
console.log('clicked');
 nav_search.style.border = '2px solid orange';
});

input.addEventListener('blur',()=>{
    isFocused=false;
    nav_search.style.border="none"
});

input.addEventListener('mouseenter',()=>{
    if(!isFocused){
    nav_search.style.border= '2px solid orange';
    }

})
input.addEventListener('mouseleave',()=>{
    if(!isFocused){
    nav_search.style.border ='none';
    }

});