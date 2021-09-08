var canvas = new fabric.Canvas('mycanvas');
block_image_width = 30;
block_image_height = 30;
player_x =10;
player_y =10;
var player_object="";
function player_update() { 
    fabric.Image.fromURL("player.png", function(Img) {
   player_object  = Img;
    player_object.scaleToWidth(150);
 player_object.scaleToHeight(140);
 player_object.set({ top:player_y, left:player_x });
canvas.add(player_object); }); }
  function new_image(get_image) {
 fabric.Image.fromURL(get_image, function(Img) {
 block_image_object = Img; block_image_object.scaleToWidth(block_image_width);
  block_image_object.scaleToHeight(block_image_height);
 block_image_object.set({ top:player_y, left:player_x = canvas.add(block_image_object); });}
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
 keypressed = e.keycode;
 console.log("keypressed");
 if(e.shiftkey == true && keypressed == '80')
 {
console.log("p and shift pressed together");
block_image_width = block_image_width + 10;
block_image_height = block_image_height + 10;
document.getElementById("current_width").innerhtml = block_image_width;
document.getElementById("current_height").innerhtml = block_image_height
}
if(e.shiftkey && keypressed == '77')
{
console.log("m and shift pressed together") 
block_image_width = block_image_width - 10;
block_image_height = block_image_height - 10;
document.getElementById("current_width").innerhtml = block_image_width;
document.getElementById("current_height").innerhtml = block_image_height
} 
if(keypressed == '38')
{   
up();
console.log("up");
}
if(keypressed == '40')
{   
down();
console.log("down");
}
if(keypressed == '37')
{   
left();
console.log("left");
}
if(keypressed == '39')
{   
right();
console.log("right");
}
if(keypressed == '87')
{   
new_image('wall.jpg');
console.log("w")
}
if(keypressed == '71')
{   
new_image('ground.png');
console.log("g");
}
if(keypressed == '87')
{   
new_image('light_green.png');
console.log("l");
}
if(keypressed == '84')
{   
new_image('truck.jpg');
console.log("t");
}
if(keypressed == '82')
{   
new_image('roof.jpg');
console.log("r");
}
if(keypressed == '89')
{   
new_image('yellow_wall.png');
console.log("y");
}
