//=============button 1===================
const button1=document.getElementById('buttonSatu')
const p=document.getElementsByTagName('p')
button1.addEventListener('click',function(){
for(a=0;a<p.length;a++){
    loop=document.getElementsByTagName('p')[a]
    loop.style.backgroundColor='cyan'
}
})


//=================button 2===================
const button2=document.getElementById('buttonDua')

button2.addEventListener('click',function(){
    button2.style.backgroundColor='blue'
    button2.style.color='white'
})

//===================button 3====================
const button3=document.getElementById('buttonTiga')
const p3=document.getElementsByTagName('p')

button3.addEventListener('click',function(){
    for(a=0;a<p3.length;a++){
        loop=document.getElementsByTagName('p')[a]
        loop.style.color='brown'
        loop.style.fontFamily='times new roman'
    }
})

//====================button 4==================
const button4=document.getElementById('buttonEmpat')
const p4=document.getElementsByTagName('p')

button4.addEventListener('click',function(){
    for(a=0;a<p3.length;a++){
        loop=document.getElementsByTagName('p')[a]
        loop.style.fontSize='50px'
    }
})

//====================button 5==================
const button5=document.getElementById('buttonLima')
const container=document.getElementById('container')

button5.addEventListener('click',function(){
    container.style.backgroundColor='black' 
})

//====================button 6==================
const button6=document.getElementById('buttonEnam')
const penampung=document.getElementById('a')
const tagP=document.getElementsByClassName('p1')[0]

button6.addEventListener('click',function(){
    const h2=document.createElement('h2')
    const isianH2=document.createTextNode('Selamat datang di dojobox.id')
    h2.appendChild(isianH2)
    penampung.replaceChild(h2,tagP)
    

})

//====================== button 7 =================

const button7=document.getElementById('buttonTujuh')
const listBaru=document.querySelector('#b ul')
const liPertama=document.querySelector('#b ul li:nth-child(1)')

button7.addEventListener('click',function(){
    const newLi=document.createElement('li')
    const namaMentor=document.createTextNode('Andhika')
    newLi.appendChild(namaMentor)
    listBaru.appendChild(newLi)
    listBaru.removeChild(liPertama)
})

//======================== button 8 ===============
const button8=document.getElementById('buttonDelapan')
button8.addEventListener('click',function(){
    const judul=document.getElementById('judul')
    judul.innerHTML='Post Test'
})

//======================= button 9 =============
const button9=document.getElementById
('buttonSembilan')
const link=document.querySelector('#a a')



button9.addEventListener('click',function(){

})

//==================== button 10 ==================

const button10=document.getElementById
('buttonSepuluh')
const linkParent=document.querySelector('#c ul li:nth-child(10)')

button10.addEventListener('click',function(){
    linkBaru=document.createElement('a')
    tbLink=document.createTextNode('Link Github Farhan Klik Disini aja')
    linkBaru.appendChild(tbLink)
    linkParent.appendChild(linkBaru)
    linkBaru.setAttribute('href','http://youtube.com')
})


