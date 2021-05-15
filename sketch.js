const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg;

function preload() {

    // create getBackgroundImg( ) here
    getBgImg();

}

function setup() {
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw() {

    // add condition to check if any background image is there to add
    if(baclgroundImg)
    background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here
    //text("Time (Hours) = " + hour + " O'clock", 100, 100);

}

async function getBgImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/calcutta");
    var responseJSON = await response.json();

    //change the data in JSON format
    var datetime = responseJSON.datetime;

    // write code slice the datetime
    var hour = datetime.slice(11, 13);

    // add conditions to change the background images from sunrise to sunset

    if(hour >= 04 && hour <= 06) {

        bg = "sunrise1.png";

    } else if(hour >= 06 && hour <= 08) {

        bg = "sunrise2.png";

    }  else if(hour >= 23 && hour == 00) {

        bg = "sunset10.png";

    } else if(hour == 00 && hour <= 03) {

        bg = "sunset11.png";

    } else {

        bg = "sunset12.png";

    }


    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);

}
