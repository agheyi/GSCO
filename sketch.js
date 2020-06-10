var car, wall, speed, weight;

function setup() {
  createCanvas(1200,400);
  speed = random(55, 90);
  weight = random(400, 1500);

  car = createSprite(50, 200, 50, 50);
  wall = createSprite(650, 200, 60, 200);
  car.shapeColor = "black";
  wall.shapeColor = "black";
  
}

function draw() {
  background("white"); 
  wall.debug = true
  car.debug = true 
  if(keyDown("space"))
  {
    car.x = 50;
    car.y = 200;
    car.velocityX = speed;
  }
  if (wall.x - car.x < (car.width + wall.width)/2)
    {
        car.velocityX = 0;
        var deformation = 0.5 * weight * speed * speed / 22509;
        if(deformation > 180)
            {
                car.shapeColor = color(255, 0, 0);
            }
        if(deformation < 180 && deformation > 100)
        {
            car.shapeColor = color(230, 230, 0);
        }
        if(deformation < 100)
        {
            car.shapeColor = color(0, 255, 0);
        }
    }
  drawSprites();
}