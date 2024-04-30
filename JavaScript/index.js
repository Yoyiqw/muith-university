const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

const myList = document.getElementById("myList");

const newli1 = 'Программирования'
const newli2 = 'Авто'
const newli3 = 'Шешен'
const newli4 = 'Шашлык Таджик'



btn1.addEventListener("click", function() {
    const listItems = myList.getElementsByTagName('li');
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].innerText = newli1
    }
})
btn2.addEventListener("click", function() {
    const listItems = myList.getElementsByTagName('li');
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].innerText = newli2
    }
})
btn3.addEventListener("click", function() {
    const listItems = myList.getElementsByTagName('li');
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].innerText = newli3
    }
})
btn4.addEventListener("click", function() {
    const listItems = myList.getElementsByTagName('li');
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].innerText = newli4
    }
})