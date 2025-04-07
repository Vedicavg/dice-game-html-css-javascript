
// var dice1 =1;
var dice1 = Math.floor(Math.random()*6)+1;
var dice2 = Math.floor(Math.random()*6)+1;


//for image 1
var path = "./images/dice"+dice1+".png";
document.querySelector(".img1").setAttribute("src",path);


// for image 2
var path = "./images/dice"+dice2+".png";
document.querySelector(".img2").setAttribute("src",path);


if(dice1>dice2)
{
document.querySelector(".container h1").innerHTML= "Player 1 Wins"
}
else if(dice1<dice2)
{
document.querySelector(".container h1").innerHTML= "Player 2 Wins"
}
else {
    document.querySelector(".container h1").innerHTML= "Draw!!"
}

        