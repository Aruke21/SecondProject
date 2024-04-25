//var navbarContent = ["О НАС", "КАТАЛОГ", "НАШИ РАБОТЫ", "КОНТАКТЫ"]

var navbarContent = [
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

var navbar = document.querySelector(".navbar") 

navbarContent.forEach(function(item){
    var linkEl = document.createElement("a")
    linkEl.textContent = item.title
    linkEl.setAttribute("href",`/${item.link}`)
    navbar.append(linkEl)
})


var wrapper = document.getElementById("wrapper");
wrapper.style.backgroundImage = "url(assets/Rectangle.png)";
wrapper.style.backgroundSize = "cover";
wrapper.style.backgroundPosition = "center";
wrapper.style.backgroundRepeat = "no-repeat";

// tableObj = {
//     quantity: ["5-10", "5-10", "5-10", "5-10", "5-10", "5-10","5-10", "5-10", "5-10"]
//     price: ["2000 сом", "2000 сом", "2000 сом", "2000 сом", "2000 сом", "2000 сом", "2000 сом", "2000 сом", "2000 сом"]
// }

// var tableQuantity = document.querySelector(".tableQuantity")
// var tablePrice = document.querySelector(".tablePrice")

// function tableMaker(arr){
//   arr.forEach(function(item){
//     var tCell = document.createElement("td")
//     tCell.textContent = item
//     tableRow.append(tCell)
//   })
// }
// for(var key in tableObj){
//     tableMaker(tableObj[key], key === "quantity" ? tableQuantity : tablePrice)
// }


// var tableObj = {
//     table1: {
//         quantity: ["5-10", "5-10", "5-10", "5-10", "5-10", "5-10","5-10", "5-10", "5-10"]
//         price: ["2000 сом", "2000 сом", "2000 сом", "2000 сом", "2000 сом", "2000 сом", "2000 сом", "2000 сом", "2000 сом"]
//     },
//     table2: {
//         quantity: ["5-10", "5-10", "5-10", "5-10", "5-10", "5-10","5-10", "5-10", "5-10"]
//         price: ["2000 сом", "2000 сом", "2000 сом", "2000 сом", "2000 сом", "2000 сом", "2000 сом", "2000 сом", "2000 сом"]
//     },
//     table3: {
//         quantity: ["5-10", "5-10", "5-10", "5-10", "5-10", "5-10","5-10", "5-10", "5-10"]
//         price: ["2000 сом", "2000 сом", "2000 сом", "2000 сом", "2000 сом", "2000 сом", "2000 сом", "2000 сом", "2000 сом"]
//     }
// }

// var tableWrapper = document.querySelector(".tableWrapper")

// function tableMaker(){
//     var table = document.createElement("table")

//     var tableHead = document.createElement("thead")
//     var tableHeadTitle = document.createElement("th")
//     tableHeadTitle.textContent = "Худи стандарт"
//     tableHead.append(tableHeadTitle)

//     var tableBody = document.createElement("tbody")

//     table.append(tableHead)
//     table.append(tableBody)

//     tableWrapper.append(table)
// }
// tableMaker()