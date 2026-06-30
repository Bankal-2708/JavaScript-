## project 1 Solution

``` JavaScript 

const button = document.querySelectorAll('.button')
const body = document.querySelector('.body')

button.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    switch (e.target.id) {
      case 'gray':
        body.style.backgroundColor = e.target.id;
        break;
      case 'white':
        body.style.backgroundColor = e.target.id;
        break;

      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;

      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;

      default:
        break;
    }
  })
})

```

## Project 2 Solution

``` JavScript 

  const form = document.querySelector('form')

  form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)

    const weight = parseInt(document.querySelector('#weight').value)
    
    const result = document.querySelector('#result')
    const compare = document.querySelector('#compare')

    if(height === '' || height < 0 || isNaN(height)){
      result.innerHTML = `Please enter a valid height ${height}`
    }else if (weight === '' || weight < 0 || isNaN(weight)){
      result.innerHTML = `Please enter a valid weight ${weight}`
    }else {
      const BMI = (weight / ((height * height) / 10000)).toFixed(2);

      if(BMI < 18.6){
        compare.innerHTML = `Under Weight`
      } else if (BMI >= 18.6 && BMI <= 24.9){
        compare.innerHTML = `Normal`
      }else {
        compare.innerHTML = `Overweight`
      }
      // console.log(compare);
      
      result.innerHTML = BMI
      
    }  
  })

```