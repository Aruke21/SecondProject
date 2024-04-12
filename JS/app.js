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