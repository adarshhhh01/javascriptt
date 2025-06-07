# Color changer in DOM
## Project link
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