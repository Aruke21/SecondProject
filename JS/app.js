

const navbarContent = [
    {
        title: "О НАС",
        link: "about/"
    },
    {
        title: "КАТАЛОГ",
        link: "catalog/"
    },
    {
        title: "НАШИ РАБОТЫ",
        link: "works/"
    },
    {
        title: "КОНТАКТЫ",
        link: "contacts/"
    },
]

const navbar = document.querySelector(".navbar") 

navbarContent.forEach(function(item){
    const linkEl = document.createElement("a")
    linkEl.textContent = item.title
    linkEl.setAttribute("href",`/${item.link}`)
    navbar.append(linkEl)
}); //заполнение хэдера


const wrapper = document.getElementById("wrapper");
wrapper.style.backgroundImage = "url(assets/Rectangle.png)";
wrapper.style.backgroundSize = "cover";
wrapper.style.backgroundPosition = "center";
wrapper.style.backgroundRepeat = "no-repeat";

// tableObj = {
//     quantity: ["5-10", "5-10", "5-10", "5-10", "5-10", "5-10","5-10", "5-10", "5-10"]
//     price: ["2000 сом", "2000 сом", "2000 сом", "2000 сом", "2000 сом", "2000 сом", "2000 сом", "2000 сом", "2000 сом"]
// }

// const tableQuantity = document.querySelector(".tableQuantity")
// const tablePrice = document.querySelector(".tablePrice")

// function tableMaker(arr){
//   arr.forEach(function(item){
//     const tCell = document.createElement("td")
//     tCell.textContent = item
//     tableRow.append(tCell)
//   })
// }
// for(const key in tableObj){
//     tableMaker(tableObj[key], key === "quantity" ? tableQuantity : tablePrice)
// }


const tableObj = {
    table1: {
        quantity: ["Количество:", "5-10", "5-10", "5-10", "5-10", "5-10", "5-10","5-10", "5-10", "5-10"],
        price: ["Цена:", "2000 сом", "2000 сом", "2000 сом", "2000 сом", "2000 сом", "2000 сом", "2000 сом", "2000 сом", "2000 сом"],
    },
    table2: {
        quantity: ["Количество:", "5-10", "5-10", "5-10", "5-10", "5-10", "5-10","5-10", "5-10", "5-10"],
        price: ["Цена:", "2000 сом", "2000 сом", "2000 сом", "2000 сом", "2000 сом", "2000 сом", "2000 сом", "2000 сом", "2000 сом"],
    },
    table3: {
        quantity: ["Количество:", "5-10", "5-10", "5-10", "5-10", "5-10", "5-10","5-10", "5-10", "5-10"],
        price: ["Цена:", "2000 сом", "2000 сом", "2000 сом", "2000 сом", "2000 сом", "2000 сом", "2000 сом", "2000 сом", "2000 сом"],
    }
}

//test

const tableWrapper = document.querySelector('.tableWrapper')

function tableMaker(tableData){
  const table = document.createElement('table') //создаем таблицу
  table.classList.add("table")
  const tableHead = document.createElement('thead') //создаем хэдер таблицы
  const tableHeadTitle = document.createElement('th') //создаем заголовок
  tableHeadTitle.textContent = 'Худи стандарт'
  tableHead.append(tableHeadTitle) //вставляем заголовок в хэдер
  const tableBody = document.createElement('tbody') //создаем тело таблицы

  for(const row in tableData){ //определим количество рядов
    const tableRow = document.createElement("tr") //создаем ряд
    tableData[row].forEach(function(item){
        const tableCell = document.createElement("td") // создаем ячейку
        tableCell.textContent = item // присваиваем ее к массиву
        tableRow.append(tableCell) //вставляем ячейку в ряд
    })
tableBody.append(tableRow) //вставляем ряд в тело таблицы
}

table.append(tableHead) //добавляем в таблицу хэдер
table.append(tableBody) //добавлем в таблицу тело

tableWrapper.append(table)
}

for(const key in tableObj){
    tableMaker(tableObj[key])
}


// setTimeout(() => {
//     console.log("hello")
// },2000)

const interval = setInterval(() => {
    console.log("interval")
}, 1000)
setTimeout(() => {clearInterval(interval)}, 5000) 