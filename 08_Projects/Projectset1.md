# Project related to DOM

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Findex.html)

# Solution Code

## Project 1

```javascript

   console.log("Sreenu")

const buttons = document.querySelectorAll('.button')
// console.log(buttons)

const body = document.querySelector('body')
// console.log(body)

buttons.forEach(function (button){
  console.log(button);
  // button.addEventListener("")
  button.addEventListener('click',function(e){
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id;
    }
  })
})

```