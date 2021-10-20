
 var canvas = new fabric.Canvas("myCanvas");

ball_x=0;
ball_y=0;
hole_x=800;
hole_y=400;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image/fromURL("golf-h.png",function (Img){
		hole_object = Img;
		hole_object.scaletowidth(50);
		hole_object.scaletoheight(50);
		hole_object.set({
			top:hole_y,
			left:hole_x,
	});	
	new_image();
}

function new_image()
{
	// write code to Upload ball image on canvas
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e)
{
	keyPressed = e.keycode;
console.log(keyPressed);
if((ball_x == hole_x)&&(ball y = hole_y)){
canvas.remove(ball_object);
document.getElementById("hd3").innerHTML = "You Have Hit The Goalli";
document.getElementById("myCanvas").style.bordercolor="red";
}
if(keyPressed *38)
{
up();
console.log("up");
}
if(keyPressed -- ("40");
{
down();
console.log("down");
}
if(keyPressed == '37')
{
left();
console.log("left");
}
if(keypressed ("39");
{
right();
console.log("right");
I
}
function up()
{
if(bally >= 0){
bally = bally - block_image_height;
console.log("Block Image Height = "+block_image_height);
console.log("Up Key Pressed x = "+ball_x+", y = "+bally);
canvas.remove(ball_object);
new image():

function up()
{
if(ball y >= 0){
ball y = ball_y - block_image_height;
console.log("Block Image Height = "+block_image_height);
console.log("Up Key Pressed x = "+ball_x+", y = "+ball y);
canvas.remove(ball_object);
new_image();
}
function down()
{
if(ball y <= 450){
ball y = ball y + block_image_height;
console.log("Block Image Height = "+block_image_height);
console.log("Down Key Pressed x = "+ball_x+", y = "+ball y);
canvas.remove(ball_object);
new_image();
}
}
function left()
{
I
if(ball_x >5)
{
ball_x = ball_x - block_image_width;
console.log("Block Image Width = "+block_image_width);
console.log("Left Key Pressed x = "+ball_x+",y = "+ball y);
canvas.remove(ball_object);
new_image();

	ffunction right()
	{
	if(ball_x <-1050)
	{
	ball_x = ball_x + block_image_width;
	console.log("Block Image Width = "+block_image_width);
	console.log("right Key Pressed x = "+ball_x+", y = "+ball y);
	canvas.remove(ball_object);
	new_image();
	}
	
}

