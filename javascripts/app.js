// Rover Object Goes Here
// ======================
/*
var rover1 ={
  direction:"N",
  x:0,
  y:0,
  travelLog: "X=0, Y=0",
  name: "Rover 1 ",
};*/
// roverCount=0 is rover if is =1 is rover1 if is =2 rover2
var roverCount=0;
var arrayRovers=[];
// ======================
var mapRover=[
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','','']];


function turnLeft(rover){
  console.log(rover.name + " has turned to the Left!");
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      console.log(rover);
      break;
    case "W":
      rover.direction = "S";
      console.log(rover);
      break;
    case "S":
      rover.direction = "E";
      console.log(rover);
      break;
    case "E":
      rover.direction = "N";
      console.log(rover);
      break;
    default:
      console.log(rover.name + " had an Error");
  }
}

function turnRight(rover){
  console.log(rover.name + " has turned to the Right!");
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      console.log(rover);
      break;
    case "E":
      rover.direction = "S";
      console.log(rover);
      break;
    case "S":
      rover.direction = "W";
      console.log(rover);
      break;
    case "W":
      rover.direction = "N";
      console.log(rover);
      break;
    default:
      console.log(rover.name + " had an Error");
      break;
  }
}

function moveForward(rover){
  console.log("moveForward was called");
  switch (rover.direction) {
    case "N":
    if(inTheMap(rover.y,"-")){
      if(obstacleFound(rover.x,(rover.y-1))){
        break;
      }
      mapRover[rover.y][rover.x]="";
      rover.y -= 1;
      rover.travelLog=rover.travelLog+ " / X="+rover.x+", Y="+rover.y;
      console.log(rover.name + " is moving forward North");
      console.log(rover);
      mapRover[rover.y][rover.x]=rover.name;
    }
    break;
    case "S":
    if (inTheMap(rover.y,"+")) {
      if(obstacleFound(rover.x,(rover.y+1))){
        break;
      }
      mapRover[rover.y][rover.x]="";
      rover.y += 1;
      mapRover[rover.y][rover.x]=rover.name;
      rover.travelLog=rover.travelLog+ " / X="+rover.x+", Y="+rover.y;
      console.log(rover.name + " is moving forward South");
      console.log(rover);
    }
    break;
    case "E":
    if (inTheMap(rover.x,"+")) {
      if(obstacleFound((rover.x+1),rover.y)){
        break;
      }
      mapRover[rover.y][rover.x]="";
      rover.x += 1;
      mapRover[rover.y][rover.x]=rover.name;
      rover.travelLog=rover.travelLog+ " / X="+rover.x+", Y="+rover.y;
      console.log(rover.name + " is moving forward East");
      console.log(rover);
    }
      break;
    case "W":
    if(inTheMap(rover.x,"-")){
      if(obstacleFound((rover.x-1),rover.y)){
        break;
      }
      mapRover[rover.y][rover.x]="";
      rover.x -= 1;
      mapRover[rover.y][rover.x]=rover.name;
      rover.travelLog=rover.travelLog+ " / X="+rover.x+", Y="+rover.y;
      console.log(rover.name + " is moving forward West");
      console.log(rover);
    }
      break;
    default:
      console.log("Rover cannot move :,-(");
  }
}

function moveBackward(rover){
  console.log("moveBackward was called");
  switch (rover.direction) {
    case "N":
    if (inTheMap(rover.y,"+")) {
      if(obstacleFound(rover.x,(rover.y+1))){
        break;
      }
      mapRover[rover.y][rover.x]="";
      rover.y += 1;
      mapRover[rover.y][rover.x]=rover.name;
      rover.travelLog=rover.travelLog+ " / X="+rover.x+", Y="+rover.y;
      console.log(rover.name + " is moving backward forward South");
      console.log(rover);
    }
    break;
    case "S":
    if(inTheMap(rover.y,"-")){
      if(obstacleFound(rover.x,(rover.y-1))){
        break;
      }
      mapRover[rover.y][rover.x]="";
      rover.y -= 1;
      mapRover[rover.y][rover.x]=rover.name;
      rover.travelLog=rover.travelLog+ " / X="+rover.x+", Y="+rover.y;
      console.log(rover.name + " is moving backward forward North");
      console.log(rover);
    }
    break;
    case "E":
    if(inTheMap(rover.x,"-")){
      if(obstacleFound((rover.x-1),rover.y)){
        break;
      }
      mapRover[rover.y][rover.x]="";
      rover.x -= 1;
      mapRover[rover.y][rover.x]=rover.name;
      rover.travelLog=rover.travelLog+ " / X="+rover.x+", Y="+rover.y;
      console.log(rover.name + " is moving backward forward West");
      console.log(rover);
    }
      break;
    case "W":
    if (inTheMap(rover.x,"+")) {
      if(obstacleFound((rover.x+1),rover.y)){
        break;
      }
      mapRover[rover.y][rover.x]="";
      rover.x += 1;
      mapRover[rover.y][rover.x]=rover.name;
      rover.travelLog=rover.travelLog+ " / X="+rover.x+", Y="+rover.y;
      console.log(rover.name + " is moving backward forward East");
      console.log(rover);
    }
      break;
    default:
      console.log("Rover cannot move :,-(");
  }
}

function main(movements){
  var currentRover=arrayRovers[roverCount];
  for (var i = 0; i < movements.length; i++) {
    currentRover=arrayRovers[roverCount%arrayRovers.length];
    console.log(currentRover);
    //roverCount VAR GLOBAL
    roverCount +=1;

    switch (movements[i]) {
      case "F":
        moveForward(currentRover);
        break;
      case "B":
        moveBackward(currentRover);
        break;
      case "L":
        turnLeft(currentRover);
        break;
      case "R":
        turnRight(currentRover);
        break;
      default:
        console.log(currentRover.name+" cannot valiate the input command called = "+movements[i]);
    }
  }
  console.log(mapRover);
}

function inTheMap(position,signo){
  if ((position===0)&&(signo==="-")) {
    console.log("You cannot leave the map");
    return false;
  }else if ((position===9)&&(signo==="+")) {
    console.log("You cannot leave the map");
    return false;
  }
  return true;
}

function obstacleFound(column,row){
  if ((mapRover[row][column])==="X") {
    console.log("Rover has found an obstacle.");
    return true;
  }else if ((mapRover[row][column].charAt(0))==="R") {
    console.log("Rover has found another rober.");
    return true;
  }else{
    return false;
  }
}

function start (){
  console.log("--- Welcome to Mars-Rover ---");
  sleep(1000);
  console.log("--- Loading the program, please wait few seconds ---");
  sleep(3000);
  console.log("--- Mars-Rover 2017 ---");
  sleep(1000);
  console.log("We starting configurating the obstacle in the map.");
  sleep(1000);
  if(addObstacle()==="EX"){
    return;
  }
  console.log("Obstacles configurated succesfully.");
  sleep(1000);
  console.log("Now we are going to configurate the Rovers");
  sleep(3000);
  if(addRovers()==="EX"){
    return;
  }
  console.log("Rover/s configurated succesfully");
  sleep(1000);
  console.log("Updating all the data to the map, please wait.");
  sleep(17000);
  console.log("Map update, thank you for waiting.");
  sleep(2000);
  console.log("Next step it is to indicate if the rover want to turn (R or L) or if want to move (F or B)");
  sleep(1500);
  console.log("Please note if you type RLLFB, for example, R will be for the rover1, L->rover2, L->rover3...");
  sleep(1500);
  console.log("If there are two rovers, for example, it will be: R->rover1, L->rover2, L->rover1, F->rover2...");
  sleep(1500);
  console.log("When the last command finish, the computer safe the last rover use, so if continue with more commands, it will use the next rover.");
  sleep(1500);
  console.log("Starting with the commands:");
  var stopIt = true;
  var comm;
  var contin;
  console.log("You want to continue using Mars Rover 2017 to insert the commands or you prefer using the function main(String)");
  comm = prompt("You want to continue using Mars Rover 2017 to insert the commands. Press Y for continue",'');
  comm=comm.toUpperCase();
  if(comm!=="Y"){
    stopIt=false;
  }
  while (stopIt) {
    console.log("Please put the commands that you want to execute. (R, L, F, B)");
    comm = prompt("Please put the commands that you want to execute. (R, L, F, B)",'');
    comm=comm.toUpperCase();
    if(!validateCommands(comm)){
      console.log("You make a mistake typping the commands "+comm+", please insert the commands again.");
      continue;
    }
    console.log("You have chosen: "+comm);
    main(comm);
    console.log("Do you want to type new orders?");
    contin=prompt("Do you want to type new orders? Type Y if you want to continue.",'');
    contin=contin.toUpperCase();
    if(contin!=="Y"){
      stopIt=false;
    }
  }
  console.log("You are living Mars-Rover 2017");
  sleep(2000);
  console.log("If you want to continue using commands please use the function main(string)");
  console.log("String are the movements = BBFFLLRR");
  sleep(2000);
  console.log("See you soon and have a nice day.");
  sleep(2000);
}


function validateCommands(aStrng){
  var valid=true;
  for(var i=0;i<aStrng.length; i++){
    var letter = aStrng.charAt(i);
    switch (letter) {
      case "F":
        valid= true;
        break;
      case "B":
        valid=true;
        break;
      case "L":
        valid=true;
        break;
      case "R":
        valid=true;
        break;
      default:
        valid=false;
    }
    if(!valid){
      return false;
    }
  }
  return true;
}


function addObstacle(){
  var x;
  var y;
  var yOrN;
  var nextElement = true;
  var cont=1;
  var obs=prompt("Do you want to insert obstacles in the map? Type Y is you want to.",'');
  obs=obs.toUpperCase();
  if(obs==="EX"){
    return "EX";
  }
  if(obs==="Y"){
    while (nextElement){
      console.log("Obstacle: Please put a number between 0 and 9, 0 is the part further to the West");
      x=parseInt(prompt("Please put a number between 0 and 9, 0 is the part further to the West",''));
      if((x<0)||(x>9)||x==null||x === ""||isNaN(x)){
        console.log("That is not a option.");
        continue;
      }
      console.log("Please put a number between 0 and 9, 0 is the part further to the North");
      y=parseInt(prompt("Please put a number between 0 and 9, 0 is the part further to the North",''));
      if((y<0)||y>9||y==null||y === ""||isNaN(y)){
        console.log("That is not a option.");
        continue;
      }
      console.log("Obstacle "+cont+ " is in the position: ("+ x + "," + y + ")");
      console.log("Do you want to add another obstacle?");
      yOrN=prompt("Do you want to add another obstacle? Write Y or N",'');
      yOrN=yOrN.toUpperCase();
      if (yOrN !== "Y") {
        if(yOrN==="N"){
          nextElement=false;
          mapRover[y][x]="X";
        }
        else{
          console.log("Word doesn't recognized, this obstacle will not be save.");
        }
      }else{
        //mapRover is global
        mapRover[y][x]="X";
        cont +=cont;
      }
    }
  }
}

function addRovers(){
  var x;
  var y;
  var direct;
  var yOrN;
  var nextElement = true;
  var cont=1;
  while (nextElement){
    console.log("Please put a number between 0 and 9, 0 is the part further to the West");
    x=prompt("Please put a number between 0 and 9, 0 is the part further to the West",'');
    if(x==="EX"||x==="ex"){
      return "EX";
    }
    x=parseInt(x);
    if((x<0)||(x>9)||x==null||x === ""||isNaN(x)){
      console.log("That is not a option.");
      continue;
    }
    console.log("Rover: Please put a number between 0 and 9, 0 is the part further to the North");
    y=parseInt(prompt("Please put a number between 0 and 9, 0 is the part further to the North",''));
    if((y<0)||y>9||y==null||y === ""||isNaN(y)){
      console.log("That is not a option.");
      continue;
    }
    if(mapRover[y][x]==="X"||mapRover[y][x]==="R"){
      console.log("There is an obstacle or a Rover in this position. Sorry, choose another position.");
      continue;
    }
    console.log("Please choose a direction (N, S, E, W).");
    direct=prompt("Please choose a direction (N, S, E, W).",'');
    direct=direct.toUpperCase();
    if(direct==="N"||direct==="S"||direct==="E"||direct==="W"){
    }else if(direct==null||direct === ""||isNaN(direct)){
      console.log("That is not a option.");
      continue;
    }else{
      console.log("That is not a option.");
      continue;
    }

    console.log("Rover "+cont+ " is in the position: ("+ x + "," + y + "), and it direction is: "+direct);
    console.log("Do you want to add another Rover?");
    yOrN=prompt("Do you want to add another Rover? Write Y or N",'');
    yOrN=yOrN.toUpperCase();
    var nam="R"+cont;
    var traLog="X="+x+", Y="+y;
    var rover ;
    if (yOrN !== "Y") {
      if(yOrN==="N"){
        rover ={
          direction:direct,
          x:x,
          y:y,
          travelLog: traLog,
          name: nam,
          number: cont
        };
        nextElement=false;
        mapRover[y][x]=nam;
      }
      else{
        console.log("Word doesn't recognized, this Rover will not be save.");
        continue;
      }
    }else{
      rover ={
        direction:direct,
        x:x,
        y:y,
        travelLog: traLog,
        name: nam,
        number: cont
      };
      //mapRover is global
      mapRover[y][x]=nam;
      cont +=1;
    }
    arrayRovers.push(rover);
  }
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
