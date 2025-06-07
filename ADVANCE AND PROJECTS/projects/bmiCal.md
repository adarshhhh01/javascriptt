# BMI Calculator
## Project Link
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