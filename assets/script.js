console.log('ajax');


const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

const emailrandom = [];

fetch(endpoint)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    
  })

