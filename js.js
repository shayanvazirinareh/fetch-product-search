let $=document;
fetch('https://fakestoreapi.com/products/')
.then((res)=>{
    return res.json();
}).then((complate)=>{
    let save='';
    complate.forEach((data,index)=>{
        save+=`<div class="title" id="style">
        <h3 class="title">${complate[index].title}</h3>
        <img class="imgs" width='40%' src='${complate[index].image}'>
        <p>${complate[index].price}</p>
        <hr>
        </div>`
    })
    document.querySelector(".root").innerHTML=save;
})
.catch((error)=>{
    console.log('error=>'+error);
})
let searcinput=$.querySelector("#search-input");
searcinput.addEventListener('input',()=>{
    const searcinputvalue=$.querySelector("#search-input");
const filter=searcinputvalue.value.toLowerCase();
const listitems=$.querySelectorAll('.title');
listitems.forEach(item=>{
    let text=item.textContent;

    if(text.toLocaleLowerCase().includes(filter.toLocaleLowerCase())){
        item.style.display='';
    }else{
        item.style.display='none'
    }
})
})