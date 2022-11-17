let logo =document.querySelector('.logo');
let group = document.querySelector('group');
let body = document.querySelector('body');

logo.onclick = function(){
    console.logo("hi");
    group.classList.toggle('open');
    body.classList.toggle('start')
}

console.logo("hi");
