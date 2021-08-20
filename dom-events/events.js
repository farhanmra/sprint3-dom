//events handler
const p3=document.getElementsByClassName('p3')[0]

function ubahWarna(){
    p3.style.backgroundColor='orange'
}

p3.onclick=ubahWarna


const alif=document.querySelector('#b ul li:nth-child(2)')
function ubahWarna2(){
    alif.style.backgroundColor='green'
}

alif.onclick=ubahWarna2

//addEventListener()

const p4=document.querySelector('#b')

p4.addEventListener('click',function(){
    
    const newLi=document.createElement('li')
    const isiLi=document.createTextNode('List baru nih')
    const listBaru=document.querySelector('#b ul')
    newLi.appendChild(isiLi)
    listBaru.appendChild(newLi)
    p4.appendChild(listBaru)

})


//latihan 
sectionC=document.createElement('section')
sectionC.setAttribute('id','c')
const container=document.getElementById('container')
container.appendChild(sectionC)

const button=document.createElement('button')
const isianButton=document.createTextNode('Tombol hijau')
button.appendChild(isianButton)
sectionC.appendChild(button)

const btn=document.querySelector('#c button')

btn.addEventListener('click',function(){
    ubah=document.getElementById('container')
    ubah.style.backgroundColor='green'
})