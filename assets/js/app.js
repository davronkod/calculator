const aEl = document.querySelector('.inpuut')
const bodyEl = document.querySelector('body')

function appendToDisplay(value) {
  aEl.value += value;
}

function clearDisplay() {
  aEl.value = '';
  clearDisplay.addEventListener('click', () =>{
    bodyEl.style.backgroundColor = 'green';
  })
  
}

function calculate() {
  
    let result = eval(aEl.value);
   aEl.value = result;
 
}
