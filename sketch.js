//Create variables here
var dog,happydDog;
var database;
var foodStock;
var foodS;




function preload()
{
  //load images here
  dogimg = loadImage("images/dogImg.png");
}

function setup() {
  var canvas = createCanvas(displayWidth - 20, displayHeight-30);
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  dog = createSprite(500,350,400,10);
  dog.addImage(dogimg);
  dog.scale = 0.2;
 
}


function draw() {  
background(46, 139, 87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage("images/dogImg1.png");
}





  drawSprites();
  //add styles here
  Text("Press Up Arrow Kew To Feed drago milk",100,100);
  textSize();

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
database.ref('/').update({
  food:x
})
}