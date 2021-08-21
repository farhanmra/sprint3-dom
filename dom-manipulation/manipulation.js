// Element Manipulation
//element.innerHTML --> mengubah isi dari tag yang sudah dipilih.
const judul=document.getElementById('judul')
judul.innerHTML="DOJOBOX.id"

//element.style.<property> --> mengubah syle dari elemen yang dipilih.
const par1=document.getElementById('p1')
par1.style.color='green'
judul.style.color='orange'

//element.setAttribute() --> menambahkan attribute pada HTML.
const jojo=document.querySelector('#b ul li:nth-child(1)')
jojo.setAttribute('id','jojo')

const mentor =document.querySelector('#b p')
mentor.setAttribute('href','http://youtube.com')


//element.classList --> memanipulasi kelas
//classList.add() --> menambah kelas baru
// jojo.classList.add('jojo')

//classList.remove() --> menghilangkan kelas yang ada
jojo.classList.remove('jojo')

//classList.toggle() --> jika elemen kelas tidak ada, method ini akan menambahkan. jika elemen sudah punya, maka akan menghilangkan kelas tertentu.
// jojo.classList.toggle('jojo')

//classList.contains() --> mengetahui kelas tertentu.
const cek=jojo.classList.contains('jojo1')

//classList.replace() --> mengganti kelas yang lama ke kelas yang baru.
jojo.classList.replace('jojo','akufarhan')

// Node Manipulation
//document.createElement()
//document.createTextNode()
//untuk menambahkan paragraph baru
//kita bikin elementnya dulu
const pBaru=document.createElement('p')
const tulisan= document.createTextNode('ini paragraf baru')

//node.appendChild()
pBaru.appendChild(tulisan) 
//cara tampilkan ke document dengan menambahkan pBaru ke sectionA
const sectionA=document.getElementById('a')
sectionA.appendChild(pBaru)

//node.insertBefore()
//bikin element penampung li
const newLi =document.createElement('li')
const isiElement =document.createTextNode('Farhan')
newLi.appendChild(isiElement)

const sectionB =document.querySelector('#b ul')
const penampung=sectionB.querySelector('li:nth-child(2)')
sectionB.insertBefore(newLi,penampung)



//coba coba
//buat section c baru
const sectionC=document.createElement('Section','C')
sectionC.setAttribute('id','c')

//section c udh dibuat dimasukin ke container
const container=document.getElementById('container')
container.appendChild(sectionC)

//bikin isian dari section C
const cobaIsi=document.createElement('p')
const isian=document.createTextNode('section baru')
cobaIsi.appendChild(isian)
sectionC.appendChild(cobaIsi)


//parentNode.removeChild()
const elementYangAkanDihapus=document.getElementsByTagName('a')[0]
sectionA.removeChild(elementYangAkanDihapus)

//parentNode.replaceChild()
const h2=document.createElement('h2')
const isiH2=document.createTextNode('Diganti jadi H2')
h2.appendChild(isiH2)

const sectionB2=document.getElementById('b')
const p4=sectionB2.querySelector('p')

sectionB2.replaceChild(h2,p4)










