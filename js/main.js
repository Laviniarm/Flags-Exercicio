import flags from './model/flags.js';
  
function flagCard(flag) {
    return `<div class="flag col-2 my-2 text-center"> 
    <img src="${flag.image}" alt="${flag.name}">
    <p> ${flag.name} <p> </div>`;
  }
  
 const conteudo = flags.map((flags)=>flagCard(flags)).join('') 

 document.querySelector('.row').innerHTML = conteudo
  

