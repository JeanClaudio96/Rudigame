const rudi = document.querySelector(".rudi");
const malbec = document.querySelector(".malbec");
const pontuacao = document.getElementById("pontuacao");

const pulo = () => {
    rudi.classList.add("pulo");
    setTimeout(()=>{
        rudi.classList.remove("pulo");
    }, 750);
}

const jogo = setInterval(()=>{
    const malbecdist = malbec.offsetLeft;
    const rudidist = +window.getComputedStyle(rudi).bottom.replace("px", "");
    let x = sessionStorage.getItem("pontos");

    pontuacao.innerHTML = ("Potuação: "+ x);
    x++;
    sessionStorage.setItem("pontos", x);

    if(malbecdist<=85 && malbecdist>0 && rudidist<=80){
        rudi.style.animation = "none";
        rudi.style.bottom = "${rudidist}px";

        malbec.style.animation = "none";
        malbec.style.left = "${malbecdist}px";

        console.log(rudidist+"px");
        console.log(malbecdist+"px");
        sessionStorage.setItem("pontos", 0);
    }
}, 50);

function onload(){
    const x = 0;
    sessionStorage.setItem("pontos", x)
    pontuacao.innerHTML = ("Potuação: "+ x);
}
 
document.addEventListener("keypress", pulo);

