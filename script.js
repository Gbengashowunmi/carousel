let image = document.getElementById("images");
let nameChange = document.getElementById("name");
let position = document.getElementById("position");
let info = document.getElementById("info");
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
let random = document.getElementById("Random");



let staff = [
    { imag : "/images/Damilola_Cousn_20181003_234704.jpg",
    name:'Gbenga Showunmi',
    position : 'WEB DEVELOPER',
    info : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
},
    { imag : "Authentic_Italy_39404249_530892554005758_4791178794463974221_n.jpg",
    name:'Hamdallah Odunlami',
    position : 'PRODUCT DESIGNER',
    info : "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
},
{
    imag : "Damilola_Cousn_20181003_234704.jpg",
    name:'Yinka Showunmi',
    position :"SENIOR PRODUCT DESIGNER",
    info : "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"

},
{
    imag : "Authentic_Italy_39404249_530892554005758_4791178794463974221_n.jpg",
    name:'Onitilo Daniel',
    position : 'SENIOR PRODUCT DESIGNER',
    info : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor"

},
{
    imag : "Damilola_Cousn_20181003_234704.jpg",
    name:'Yusuf Lekan',
    position : 'JUNIOR PRODUCT DESIGNER',
    info : "Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,"

},
{
    imag : "Authentic_Italy_39404249_530892554005758_4791178794463974221_n.jpg",
    name : 'Oladipupo Qudus',
    position : 'MID PRODUCT DESIGNER',
    info : "discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics,"
    
}
]


let currentItem = 0;
nextBtn.addEventListener("click", function(){
    
    const item = staff[currentItem];
    currentItem ++;
    nameChange.textContent = item.name;
    position.textContent = item.position;
    info.textContent = item.info;
    image.src = item.imag;
    if(currentItem > staff.length - 1){
        currentItem = 0;
    }
    
});


prevBtn.addEventListener("click", function(){
    const item = staff[currentItem];
    currentItem --;
    nameChange.textContent = item.name;
    position.textContent = item.position;
    info.textContent = item.info;
    image.src = item.imag;
    if(currentItem < 0){
        currentItem = staff.length - 1;
    }
    

})

random.addEventListener("click", function(){
    const item = staff[currentItem];
    currentItem = Math.floor(Math.random() * staff.length - 1);
    nameChange.textContent = item.name;
    position.textContent = item.position;
    info.textContent = item.info;
    image.src = item.imag;
    
})










