console.log('ajax');


const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

const emailrandom = [];
document.addEventListener('click', function(){
for(let i = 0; i < 10; i++){
  //  fetch(endpoint)
  // .then(response => response.json())
  // .then(data => {          
  //      emailrandom.push(data.response);

  //      if(emailrandom.length >= 10){
  //       document.getElementById('emailgen').innerHTML = emailrandom;      
        
  //     }
             
  // }) 

  axios.get(endpoint)
  
  .then(response => {          
       emailrandom.push(response.data.response);

       if(emailrandom.length >= 10){
        document.getElementById('emailgen').innerHTML = emailrandom;      
        
      }
             
  }) 
      
}
})
console.log(emailrandom);


  



