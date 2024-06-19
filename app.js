function Calculator(num1, num2) {
    num1 = this.num1;
    num2 = this.num2;
   
    this.read = function(){
        num1 = prompt("Enter num 1");
        num2 = prompt ("Enter num 2");
    }

    this.sum = function(){
        return this.num1 + this.num2;
    }
    this.mul = function() {
        return  num1* num2;
    }
}

function Accumulator(startingValue){
    this.startingValue = startingValue;

    this.read() = function (){
        this.value =+ prompt("Enter value here", 0);
    }
}

function isArray(myArray)  {
    return myArray.constructor.toString().indexOf("Array") > -1
}

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.mobile-menu');
const galleryPic = document.querySelectorAll('.galleryPic');
const hiddenInfo = document.querySelector('.hiddenInfo');


hamburger.addEventListener('click', ()=> {
    console.log('clicked on hamburger!');
    const style = menu.computedStyleMap().get('display').value;

    if (style == 'block') {
        menu.style.display = 'none';
    }
    else if (style == 'none') {
        menu.style.display = 'block';
    }
})

galleryPic.forEach(element => {
    const info = element.querySelector('.hiddenInfo');
    element.addEventListener('mouseover', ()=> {
        info.style.display ='block';
    })
    element.addEventListener('mouseleave', ()=> {
        info.style.display = 'none';
    })
});


// set info to hidden, on hover in app.js, set it to block

