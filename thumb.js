let name = document.querySelector("#name");
let chanel = document.querySelector("#chanel");
let views = document.querySelector("#views");
let time = document.querySelector("#time");
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
    if(viewsI>=1000 && viewsI<1000000){
        viewsI = Math.floor((viewsI/1000) * 100) / 100 +"k";
    }
    else if(viewsI>=1000000){
        viewsI = Math.floor((viewsI/1000000) * 100) / 100 +"m";
    }
    createThumbnail(nameI,chanelI,viewsI,timeI);
}

let createThumbnail = (nameI,chanelI,viewsI,timeI)=>{
   let newDiv = document.createElement('div');
   newDiv.innerHTML = `<div class="box">
   <div class="thumbnail">
       <img src="thumbnail.webp" alt="">
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

// createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")