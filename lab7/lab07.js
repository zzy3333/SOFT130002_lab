<<<<<<< HEAD
const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];

/*创建一个区域div,class = item*/
var work1 = document.createElement("div");
var container = document.getElementsByClassName("flex-container justify");
container[0].appendChild(work1);
work1.setAttribute("class","item");

/*创建一个p元素，为div的子元素*/
var hd4_1 = document.createElement("h4");
document.getElementsByClassName("item")[0].appendChild(hd4_1);
var genre = document.createTextNode("Genre:" + works[0].tips);
hd4_1.appendChild(genre);

/*创建两个div元素，class = inner-box*/
var item1_1 = document.createElement("div");
document.getElementsByClassName("item")[0].appendChild(item1_1);
item1_1.setAttribute("class","inner-box");
var item1_2 = document.createElement("div");
document.getElementsByClassName("item")[0].appendChild(item1_2);
item1_2.setAttribute("class","inner-box");

/*在两个inner-box里创建h3,h4*/
var hd3_1_1 = document.createElement("h3");
document.getElementsByClassName("inner-box")[0].appendChild(hd3_1_1);
document.getElementsByTagName("h3")[0].innerHTML = works[0].author;
document.getElementsByTagName("h3")[0].style.display = "inline"

var para1 = document.createElement("p");
document.getElementsByClassName("inner-box")[0].appendChild(para1);
document.getElementsByTagName("p")[0].innerHTML = " lifetime:" + works[0].lifetime;
document.getElementsByTagName("p")[0].style.display = "inline"

var hd3_1_2 = document.createElement("h3");
document.getElementsByClassName("inner-box")[1].appendChild(hd3_1_2);
document.getElementsByTagName("h3")[1].innerHTML = "Popular Photos";

var photo1 = document.createElement("img");
document.getElementsByClassName("inner-box")[1].appendChild(photo1);
photo1.setAttribute("src","human1.jpg");
photo1.setAttribute("class","photo");

var photo2 = document.createElement("img");
document.getElementsByClassName("inner-box")[1].appendChild(photo2);
photo2.setAttribute("src","human2.jpg");
photo2.setAttribute("class","photo");

var photo3 = document.createElement("img");
document.getElementsByClassName("inner-box")[1].appendChild(photo3);
photo3.setAttribute("src","human3.jpg");
photo3.setAttribute("class","photo");

var button = document.createElement("button");
document.getElementsByClassName("item")[0].appendChild(button);
document.getElementsByTagName("button")[0].innerHTML = "visit";




/*创建一个区域div,class = item*/
var work2 = document.createElement("div");
var container = document.getElementsByClassName("flex-container justify");
container[0].appendChild(work2);
work2.setAttribute("class","item");

/*创建一个p元素，为div的子元素*/
var hd4_2 = document.createElement("h4");
document.getElementsByClassName("item")[1].appendChild(hd4_2);
var genre = document.createTextNode("Genre:" + works[1].tips);
hd4_2.appendChild(genre);

/*创建两个div元素，class = inner-box*/
var item2_1 = document.createElement("div");
document.getElementsByClassName("item")[1].appendChild(item2_1);
item2_1.setAttribute("class","inner-box");
var item2_2 = document.createElement("div");
document.getElementsByClassName("item")[1].appendChild(item2_2);
item2_2.setAttribute("class","inner-box");

/*在两个inner-box里创建h3,h4*/
var hd3_1 = document.createElement("h3");
document.getElementsByClassName("inner-box")[2].appendChild(hd3_1);
document.getElementsByTagName("h3")[2].innerHTML = works[1].author;
document.getElementsByTagName("h3")[2].style.display = "inline"

var para2 = document.createElement("p");
document.getElementsByClassName("inner-box")[2].appendChild(para2);
document.getElementsByTagName("p")[1].innerHTML = " lifetime:" + works[1].lifetime;
document.getElementsByTagName("p")[1].style.display = "inline"

var hd3_2 = document.createElement("h3");
document.getElementsByClassName("inner-box")[3].appendChild(hd3_2);
document.getElementsByTagName("h3")[3].innerHTML = "Popular Photos";

var photo4 = document.createElement("img");
document.getElementsByClassName("inner-box")[3].appendChild(photo4);
photo4.setAttribute("src","classical1.jpg");
photo4.setAttribute("class","photo");

var photo5 = document.createElement("img");
document.getElementsByClassName("inner-box")[3].appendChild(photo5);
photo5.setAttribute("src","classical2.jpg");
photo5.setAttribute("class","photo");

var button = document.createElement("button");
document.getElementsByClassName("item")[1].appendChild(button);
document.getElementsByTagName("button")[1].innerHTML = "visit";




/*创建一个区域div,class = item*/
var work3 = document.createElement("div");
var container = document.getElementsByClassName("flex-container justify");
container[0].appendChild(work3);
work3.setAttribute("class","item");

/*创建一个p元素，为div的子元素*/
var hd4_3 = document.createElement("h4");
document.getElementsByClassName("item")[2].appendChild(hd4_3);
var genre = document.createTextNode("Genre:" + works[2].tips);
hd4_3.appendChild(genre);

/*创建两个div元素，class = inner-box*/
var item3_1 = document.createElement("div");
document.getElementsByClassName("item")[2].appendChild(item3_1);
item3_1.setAttribute("class","inner-box");
var item3_2 = document.createElement("div");
document.getElementsByClassName("item")[2].appendChild(item3_2);
item3_2.setAttribute("class","inner-box");

/*在两个inner-box里创建h3,h4*/
var hd3_1 = document.createElement("h3");
document.getElementsByClassName("inner-box")[4].appendChild(hd3_1);
document.getElementsByTagName("h3")[4].innerHTML = works[2].author;
document.getElementsByTagName("h3")[4].style.display = "inline"

var para3 = document.createElement("p");
document.getElementsByClassName("inner-box")[4].appendChild(para3);
document.getElementsByTagName("p")[2].innerHTML = " lifetime:" + works[2].lifetime;
document.getElementsByTagName("p")[2].style.display = "inline"

var hd3_2 = document.createElement("h3");
document.getElementsByClassName("inner-box")[5].appendChild(hd3_2);
document.getElementsByTagName("h3")[5].innerHTML = "Popular Photos";

var photo6 = document.createElement("img");
document.getElementsByClassName("inner-box")[5].appendChild(photo6);
photo6.setAttribute("src","abstract1.jpg");
photo6.setAttribute("class","photo");

var photo7 = document.createElement("img");
document.getElementsByClassName("inner-box")[5].appendChild(photo7);
photo7.setAttribute("src","abstract2.jpg");
photo7.setAttribute("class","photo");

var photo8 = document.createElement("img");
document.getElementsByClassName("inner-box")[5].appendChild(photo8);
photo8.setAttribute("src","abstract3.jpg");
photo8.setAttribute("class","photo");

var photo9 = document.createElement("img");
document.getElementsByClassName("inner-box")[5].appendChild(photo9);
photo9.setAttribute("src","abstract4.jpg");
photo9.setAttribute("class","photo");

var photo10 = document.createElement("img");
document.getElementsByClassName("inner-box")[5].appendChild(photo10);
photo10.setAttribute("src","abstract5.jpg");
photo10.setAttribute("class","photo");

var button = document.createElement("button");
document.getElementsByClassName("item")[2].appendChild(button);
document.getElementsByTagName("button")[2].innerHTML = "visit";




/*创建一个区域div,class = item*/
var work4 = document.createElement("div");
var container = document.getElementsByClassName("flex-container justify");
container[0].appendChild(work4);
work4.setAttribute("class","item");

/*创建一个p元素，为div的子元素*/
var hd4_4 = document.createElement("h4");
document.getElementsByClassName("item")[3].appendChild(hd4_4);
var genre = document.createTextNode("Genre:" + works[3].tips);
hd4_4.appendChild(genre);

/*创建两个div元素，class = inner-box*/
var item4_1 = document.createElement("div");
document.getElementsByClassName("item")[3].appendChild(item4_1);
item4_1.setAttribute("class","inner-box");
var item4_2 = document.createElement("div");
document.getElementsByClassName("item")[3].appendChild(item4_2);
item4_2.setAttribute("class","inner-box");

/*在两个inner-box里创建h3,h4*/
var hd3_1 = document.createElement("h3");
document.getElementsByClassName("inner-box")[6].appendChild(hd3_1);
document.getElementsByTagName("h3")[6].innerHTML = works[3].author;
document.getElementsByTagName("h3")[6].style.display = "inline"

var para4 = document.createElement("p");
document.getElementsByClassName("inner-box")[6].appendChild(para4);
document.getElementsByTagName("p")[3].innerHTML = " lifetime:" + works[3].lifetime;
document.getElementsByTagName("p")[3].style.display = "inline"

var hd3_2 = document.createElement("h3");
document.getElementsByClassName("inner-box")[7].appendChild(hd3_2);
document.getElementsByTagName("h3")[7].innerHTML = "Popular Photos";

var photo11 = document.createElement("img");
document.getElementsByClassName("inner-box")[7].appendChild(photo11);
photo11.setAttribute("src","beauty1.jpg");
photo11.setAttribute("class","photo");

var photo12 = document.createElement("img");
document.getElementsByClassName("inner-box")[7].appendChild(photo12);
photo12.setAttribute("src","beauty2.jpg");
photo12.setAttribute("class","photo");

var button = document.createElement("button");
document.getElementsByClassName("item")[3].appendChild(button);
document.getElementsByTagName("button")[3].innerHTML = "visit";
=======
const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];
>>>>>>> 76bafeb7f92081de6194569b17cfce1440e92ef6
