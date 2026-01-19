const start = document.getElementById("start");
const menu = document.getElementById("menu");
const scene = document.getElementById("scene");
const final = document.getElementById("final");
const music = document.getElementById("music");
const rocket = document.querySelector(".rocket");
const contador = document.getElementById("contador");

const snoppys = [
  "snoppys/s1.png",
  "snoppys/s2.png",
  "snoppys/s3.png",
  "snoppys/s4.png"
];

start.onclick = () => {
  music.currentTime = 0;
  music.play();
  rocket.classList.add("launch");

  setTimeout(()=>{
    menu.style.display="none";
    scene.style.display="block";
    iniciarCuenta();
  },2800);
};

function iniciarCuenta(){
  let t=10;
  contador.textContent=t;
  const int=setInterval(()=>{
    t--;contador.textContent=t;
    if(t<=0){
      clearInterval(int);
      scene.style.display="none";
      final.style.display="block";
      corazones();
      snoppysVolando();
    }
  },1000);
}

function corazones(){
  for(let i=0;i<60;i++){
    const h=document.createElement("div");
    h.className="heart";
    h.innerHTML="❤️";
    h.style.left=Math.random()*100+"vw";
    h.style.fontSize=16+Math.random()*20+"px";
    h.style.animationDuration=4+Math.random()*6+"s";
    final.appendChild(h);
    setTimeout(()=>h.remove(),10000);
  }
}

function snoppysVolando(){
  for(let i=0;i<20;i++){
    const s=document.createElement("img");
    s.src=snoppys[Math.floor(Math.random()*snoppys.length)];
    s.className="snoopy-float";
    s.style.width="40px";
    s.style.left=Math.random()*100+"vw";
    s.style.animationDuration=5+Math.random()*6+"s";
    final.appendChild(s);
    setTimeout(()=>s.remove(),10000);
  }
}
