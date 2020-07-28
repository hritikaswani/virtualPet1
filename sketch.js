//Create variables here
var dog1,happyDog,foodStock,foodR=20;

function preload()
{
  //load images here
   dog1 = loadImage ("images/dogImg.png")
  happyDog = loadImage ("images/dogImg1.png")
}

function setup() {
  database = firebase.database();
  createCanvas(700, 700);

  dog = createSprite(250,390,10,10)
  dog.addImage(dog1);
  dog.scale=0.5;
  
  food = database.ref('food')
  food.on("value",readStock)
  
}




function draw() {  
  background(46,139,87)
fill("white");
textSize( 20)
  text("food remaining"+foodR,200,200)
  
  

if (keyWentDown(UP_ARROW)){
  writeStock(food);
  foodR = foodR-1;
  dog.addImage(happyDog)
}

  drawSprites();
  //add styles here

}

function readStock(data){
  food = data.val();
}
function writeStock(x){
  database.ref('/').update({
Food:x
  })
}

  
