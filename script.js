let teams = [
    {
        team: "RCB",
        bgColor: "red",
        textColor: "blue"
    },
    {
        team: "SRH",
        bgColor: "orange",
        textColor: "black"
    },
    {
        team: "PBKS",
        bgColor: "crimson",
        textColor: "gold"
    },
    {
        team: "CSK",
        bgColor: "yellow",
        textColor: "blue"
    },
    {
        team: "MI",
        bgColor: "blue",
        textColor: "gold"
    },
    {
        team: "LSG",
        bgColor: "blue",
        textColor: "red"
    },
    {
        team: "KKR",
        bgColor: "purple",
        textColor: "gold"
    },
    {
        team: "RR",
        bgColor: "palevioletred",
        textColor: "blue"
    },
    {
        team: "GT",
        bgColor: "black",
        textColor: "yellow"
    },
    {
        team: "DC",
        bgColor: "blue",
        textColor: "crimson"
    }
]

let box = document.querySelector('.box')
let btn = document.querySelector('button')

btn.addEventListener('click' , function(){
    var total = teams.length
    var num = Math.floor(Math.random()*total)
    box.innerHTML = teams[num].team
    box.style.backgroundColor = teams[num].bgColor
    box.style.color = teams[num].textColor
})