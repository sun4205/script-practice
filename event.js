const myButton = document.querySelector('#myButton');
myButton.addEventListener('click',function(){
    console.log('clcik');
})

const logMouseEnter = () =>{ console.log('진입')};
const logMouseleave = () =>{
    console.log('click');
}
myButton.addEventListener('mouseenter',logMouseEnter);
myButton.addEventListener('mouseleave',logMouseleave);

const clickPositon = document.querySelector('#clickPosition');
clickPositon.addEventListener('click',function(e){
    let text ='x: ';
    text +=e.clientX;
    text +=',y: ';
    text +=e.clientY;
    clickPositon.textContent=text;

})