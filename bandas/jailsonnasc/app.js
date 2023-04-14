// MUSICA-1
const  audio1 = document.querySelector('.nossoplano');
document.querySelector('#plays1').addEventListener('click', tocarMusica);
document.querySelector('#pauses1').addEventListener('click', pausarMusica);
function tocarMusica(){
    audio1.play();
    document.querySelector('#pauses1').style.display = 'block';
    document.querySelector('#plays1').style.display = 'none';
}
function pausarMusica(){
    audio1.pause();
    document.querySelector('#pauses1').style.display = 'none';
    document.querySelector('#plays1').style.display = 'block';
}

document.querySelector('#coracao1').addEventListener('click',()=>{
    document.querySelector('#coracao1').style.display = 'none'
    document.querySelector('#coracaover1').style.display = 'block'
})
document.querySelector('#coracaover1').addEventListener('click',()=>{
    document.querySelector('#coracao1').style.display = 'block'
    document.querySelector('#coracaover1').style.display = 'none'
    
})
// FIM-MUSICA-1

// // MUSICA-2
const  audio2 = document.querySelector('.imprevisivel');
document.querySelector('#plays2').addEventListener('click', tocar2Musica);
document.querySelector('#pauses2').addEventListener('click', pausar2Musica);
function tocar2Musica(){
    audio2.play();
    document.querySelector('#pauses2').style.display = 'block';
    document.querySelector('#plays2').style.display = 'none';
}
function pausar2Musica(){
    audio2.pause();
    document.querySelector('#pauses2').style.display = 'none';
    document.querySelector('#plays2').style.display = 'block';
}
document.querySelector('#coracao2').addEventListener('click',()=>{
    document.querySelector('#coracao2').style.display = 'none'
    document.querySelector('#coracaover2').style.display = 'block'
})
document.querySelector('#coracaover2').addEventListener('click',()=>{
    document.querySelector('#coracao2').style.display = 'block'
    document.querySelector('#coracaover2').style.display = 'none'
})
// // FIM-MUSICA-2

// // MUSICA-3
const  audio3 = document.querySelector('.almadepipa');
document.querySelector('#plays3').addEventListener('click', tocar3Musica);
document.querySelector('#pauses3').addEventListener('click', pausar3Musica);
function tocar3Musica(){
    audio3.play();
    document.querySelector('#pauses3').style.display = 'block';
    document.querySelector('#plays3').style.display = 'none';
}
function pausar3Musica(){
    audio3.pause();
    document.querySelector('#pauses3').style.display = 'none';
    document.querySelector('#plays3').style.display = 'block';
}
document.querySelector('#coracao3').addEventListener('click',()=>{
    document.querySelector('#coracao3').style.display = 'none'
    document.querySelector('#coracaover3').style.display = 'block'
})
document.querySelector('#coracaover3').addEventListener('click',()=>{
    document.querySelector('#coracao3').style.display = 'block'
    document.querySelector('#coracaover3').style.display = 'none'
    
})
// // FIM-MUSICA-3

// // MUSICA-4
const  audio4 = document.querySelector('.quintallaia');
document.querySelector('#plays4').addEventListener('click', tocar4Musica);
document.querySelector('#pauses4').addEventListener('click', pausar4Musica);
function tocar4Musica(){
    audio4.play();
    document.querySelector('#pauses4').style.display = 'block';
    document.querySelector('#plays4').style.display = 'none';
}
function pausar4Musica(){
    audio4.pause();
    document.querySelector('#pauses4').style.display = 'none';
    document.querySelector('#plays4').style.display = 'block';
}
document.querySelector('#coracao4').addEventListener('click',()=>{
    document.querySelector('#coracao4').style.display = 'none'
    document.querySelector('#coracaover4').style.display = 'block'
})
document.querySelector('#coracaover4').addEventListener('click',()=>{
    document.querySelector('#coracao4').style.display = 'block'
    document.querySelector('#coracaover4').style.display = 'none'
    
})
// // FIM-MUSICA-4