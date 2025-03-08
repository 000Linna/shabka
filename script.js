let tablist = document.querySelector('#tablist');
let tabContent = document.querySelectorAll('.tapcontent');
let tabBtns = document.querySelectorAll('.tab-btn');

// getComputedStyle - позволяет получить значение любого css  свойства , даже из css файла
tablist.addEventListener("click",(event)=>{
let targetBtn = event.target /* кнопка на которой произошёл клик*/
// dataset-содержит пользовательские (дата)отребуты указанного элимента
let dataLang=targetBtn.dataset.lang
console.log(dataLang)
if( targetBtn != tablist){
// удалить класс актив у всех вкладок с контентом 
for(let tab of tabContent){
tab.classList.remove('active')
}
for(let tab of tabContent){
if (tab.id==dataLang){
    tab.classList.add("active")
    for(let btn of tabBtns){
        btn.classList.remove('active')
        }
}
targetBtn.classList.add('active')
}
}
})