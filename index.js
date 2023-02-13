
var randomNumber= Math.floor(Math.random()*6)+1;
var randomDiceimage="dice"+randomNumber+".png";
var randomDiceimageSrc="images/"+randomDiceimage;
var image1 = document.querySelectorAll("img")[0]
image1.setAttribute("src",randomDiceimageSrc);

var randomNumber2= Math.floor(Math.random()*6)+1;
var randomDiceimage2="dice"+randomNumber2+".png";
var randomDiceimageSrc2="images/"+randomDiceimage2;
var image2 = document.querySelectorAll("img")[1]
image2.setAttribute("src",randomDiceimageSrc2);
if (randomNumber>randomNumber2)
{
    document.querySelector("h1").innerHTML="🚩player 1 wins";

}else if(randomNumber<randomNumber2)
{
    document.querySelector("h1").innerHTML="player 2 wins🚩";

}else
{
    document.querySelector("h1").innerHTML="Draw!!";
}