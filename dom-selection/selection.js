//DOM Selection

//getElementById() --> memilih elemen yang ada di dalam DOM berdasarkan id.
const sectionA =document.getElementById('a')

//getElementsByTagName() --> memilih elemen yang ada di dalam DOM berdasarkan tag tertentu.
const paragraph=document.getElementsByTagName('p')
const paragraph2=document.getElementsByTagName('p')[2]

//getElementsByClassName() --> memilih elemen yang ada di dalam DOM berdasarkan class tertentu.
const paragraf =document.getElementsByClassName('p2')

//querySelector() --> mencari elemen berdasarkan selektor
const jojo=document.querySelector('section#b ul li:nth-child(3)')

//querySelectorAll() --> mencari elemen berdasarkan selector
const mentor=document.querySelectorAll('#b ul li')