let button = document.querySelector('.btn')
  let values = document.querySelector('.inputvalue')
  let names=document.querySelector('.name')
  let desc=document.querySelector('.desc')
  let temp=document.querySelector('.temp')
  let tod=document.querySelector('.today')


  button.addEventListener('click',function(){
  fetch(('https://api.openweathermap.org/data/2.5/weather?q='+values.value+'&appid=41f4acedf7eacba6e3d0f98bbcea29a1'))
  .then (res => res.json())
  .then (data => {
    var todayv = 'Today';
    var nameValue = data['name'];
    var tempValue = Math.floor( data['main']['temp']-273.15)+'°'; //kelvin to celsius
    var descvalue = data[ 'weather'][0]['description'];

       tod.innerHTML =todayv;
       temp.innerHTML=tempValue;
       names.innerHTML =nameValue;
       desc.innerHTML =descvalue;
})
.catch(error => alert("Wrong city name"))
})