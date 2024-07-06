let name = document.querySelector("#name");
let chanel = document.querySelector("#chanel");
let views = document.querySelector("#views");
let time = document.querySelector("#time");
let url = document.querySelector("#url");
let h = document.querySelector("h2");
let addBox = document.querySelector(".addBox");

let form = document.querySelector("#myForm").addEventListener("submit",function(event) {
    event.preventDefault();
    takeInput();
});

let takeInput = ()=>{
    let nameI = document.getElementById('name').value;
    let chanelI = document.getElementById('chanel').value;
    let viewsI = document.getElementById('views').value;
    let timeI = document.getElementById('time').value;
    let urlI = document.getElementById('url').value;
    if(viewsI>=1000 && viewsI<1000000){
        viewsI = Math.floor((viewsI/1000) * 100) / 100 +"k";
    }
    else if(viewsI>=1000000){
        viewsI = Math.floor((viewsI/1000000) * 100) / 100 +"m";
    }
    createThumbnail(nameI,chanelI,viewsI,timeI,urlI);
}

let createThumbnail = (nameI,chanelI,viewsI,timeI,urlI)=>{
   let newDiv = document.createElement('div');
   newDiv.innerHTML = `<div class="box">
   <div class="thumbnail">
       <img src=${urlI} alt="">
   </div>
   <div class="desc">
      <h2>${nameI}</h2>
       <p class="views">
          ${chanelI} . ${viewsI} views . ${timeI} ago
       </p>
   </div>
</div>`
   addBox.appendChild(newDiv);
}