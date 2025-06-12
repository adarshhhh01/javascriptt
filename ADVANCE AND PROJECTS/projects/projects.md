# Color changer in DOM
## Project link
### Solution 1

[click here](https://stackblitz.com/edit/stackblitz-starters-wndwjmsk?description=HTML/CSS/JS%20Starter&file=styles.css,index.html,script.js&terminalHeight=10&title=Static%20Starter)

```javascript
const buttons= document.querySelectorAll('.button');
const body = document.querySelector('body')

buttons.forEach(function(button){
  console.log(button)
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id=='grey'){
      body.style.backgroundColor='grey'
    }
    if(e.target.id=='orange'){
      body.style.backgroundColor='orange'
    }
    if(e.target.id=='blue'){
      body.style.backgroundColor='skyblue'
    }
    if(e.target.id=='yellow'){
      body.style.backgroundColor='lightyellow'
    }
  });
});



```

# BMI Calculator
## Project Link
### Solution 2
[Click Here](https://stackblitz.com/edit/stackblitz-starters-myish793?file=index.html)
``` javascript

const form = document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#result');

    if(height=== ''|| height <0 || isNaN(height)) {
      results.innerHTML=`Please enter a correct height ,${height}`;
    } else if(weight=== '' || weight <0 || isNaN(weight) ){
      results.innerHTML=`Please enter a correct weight ,${weight}`;
    }else{
     const bmi =  (weight/((height*height)/10000)).toFixed(2);
     results.innerHTML=`<span>${bmi}</span>`;
    }

})

```

# Watch
### Project Link
[Click here](https://stackblitz.com/edit/stackblitz-starters-hsgsnhdx?file=script.js)

``` Javascipt
const clock = document.getElementById('clock');

setInterval(function(){
  const date = new Date();
  clock.innerHTML = date.toLocaleTimeString();

}, 1000);
```