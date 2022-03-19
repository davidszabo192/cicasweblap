window.addEventListener("load", init);
var kepek = [
    {
        cim: "01-es kép",
        eleresiut: "./kepek/01.jpg",
        leírás: "Ez a első cicás kép",
    },
    {
        cim: "02-es kép",
        eleresiut: "./kepek/02.jpg",
        leírás: "Ez a második cicás kép",
    },
    {
        cim: "03-es kép",
        eleresiut: "./kepek/03.jpg",
        leírás: "Ez a harmadik cicás kép",
    },
    {
        cim: "04-es kép",
        eleresiut: "./kepek/04.jpg",
        leírás: "Ez a negyedik cicás kép",
    },
    {
        cim: "05-es kép",
        eleresiut: "./kepek/05.jpg",
        leírás: "Ez a ötödik cicás kép",
    },
    {
        cim: "06-es kép",
        eleresiut: "./kepek/06.jpg",
        leírás: "Ez a hatodik cicás kép",
    },
];
function ID(elem) {
    return document.getElementById(elem);
}
function CLASS(elem) {
    return document.getElementByClassName(elem);
}
function $(elem) {
    return document.querySelectorAll(elem);
}
var aktualiskepIndex = 0;

function init() {
    kiirKepek();
    ID("galeria").style.backgroundColor = "pink";
    /*ID("galeria").style.border ='12px solid grey' */

    for (let index = 0; index < kepek.length; index++) {
        /* CLASS('kepek')[index].stlyle.border = '12px solid gray'      
        CLASS('kepek')[index].stlyle.padding = '10px'      
        $("#galeria div img")[index].style.backroundColor = 'pink' */
        $("#galeria div")[index].className = "divekFormazasa";
        //ha az első képre kattintok
        $("#galeria div")[index].addEventListener("click", kattintas);
    }

    $("#bal")[0].addEventListener("click", bal);
    $("#jobb")[0].addEventListener("click", jobb);
}

function kattintas(event) {
    console.log(event.target.id);
    aktualiskepIndex = event.target.id;
    console.log(kepek[aktualiskepIndex]);
    kepMegjelenit();
}
function kepMegjelenit() {
    var txt = "<img src='" + kepek[aktualiskepIndex].eleresiut + "' alt=''>";
    ID("nagykep").innerHTML = txt;
}
function bal() {
    /**az aktualis képindexet csökkenti egyel */
    aktualiskepIndex--;
    if (aktualiskepIndex < 0);
    {
        aktualiskepIndex = kepek.length - 1;
    }
    console.log(aktualiskepIndex);
    kepMegjelenit();
}
function jobb() {
    /**az aktualis képindexet növeli egyel */
    aktualiskepIndex++;
    if (aktualiskepIndex > kepek.length - 1);
    {
        aktualiskepIndex = 0;
        
    }
    kepMegjelenit();
}
function kiirKepek() {
    var txt = " ";
    for (let i = 0; i < kepek.length; i++) {
        txt =
            txt +
            "<div>" +
            "<h3>" +
            kepek[i].cim +
            "</h3>" +
            "<img id='" +
            i +
            "' src='" +
            kepek[i].eleresiut +
            "' class='kepek' alt='cicás képek'/>" +
            "<p>" +
            kepek[i].leírás +
            "</p> </div>";

        ID("galeria").innerHTML = txt;
    }
}
