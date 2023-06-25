const fil=document.querySelector('input');
const btn=document.querySelector('button');
const t=document.querySelector('#temp');
const w=document.querySelector('#weat');
const p=document.querySelector('#place');

if(fil.val==='') {alert('Enter valid city name!')}
btn.addEventListener('click',()=>{
      let val=fil.value;
      todos(val).then((data)=>{
        w.textContent=(data.days[0].hours[0].icon).toUpperCase();
        t.textContent=data.days[0].hours[0].temp;
        p.textContent=(data.address).toUpperCase();
        fil.value='';
      }).catch((err)=>{
        console.log('Fatal error:',err);
      })
})
async function todos(city) {
      const response=await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=H522AE9PB5LXNEDUZTACU9KCM&contentType=json
      `);
      const data= await response.json();
      return data;

}
