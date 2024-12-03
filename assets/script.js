console.log('ajax');


const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

const emailrandom = [];

for(let i = 0; i < 10; i++){
  fetch(endpoint)
  .then(response => response.json())
  .then(data => {          
       emailrandom.push(data.response);      
  })

  if(emailrandom[i] === 10){
    document.getElementById('emailgen').innerHTML = emailrandom;
  }else{
    document.getElementById('errormsg').className ='';
  }
      
}



console.log(emailrandom);


  



