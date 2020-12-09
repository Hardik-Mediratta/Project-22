var helicopter,helicopterImage;
var package,packageImage;
var ground;


function preload(){

	helicopterImage = loadImage("helicopter.png");
	packageImage = loadImage("package.png");
	
}

function setup(){
createCanvas(800,650)
	helicopter = createSprite(400,150,10,10);
	helicopter.addImage(helicopterImage);
	helicopter.scale = 0.7;
	
	var b_option
	{
		isStatic : true
	}
		
	ground = createSprite(400,600,900,15,b_option);
	ground.shapeColor = "white"


}

function draw(){
background(0);

if (keyDown(DOWN_ARROW)){
packages();
}

	drawSprites();
}
function packages(){

	var options 
	{
		restitution:0.8
	}

package = createSprite(400,205,10,10,options);
package.addImage(packageImage);
package.scale = 0.2;
package.velocityY = 3;

}
