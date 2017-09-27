// Rover Object Goes Here
// ======================
var rover1 ={
  direction:"N",
  x:0,
  y:0,
  travelLog: "X=0, Y=0",
  name: "Rover 1 ",
};
var rover2 ={
  direction:"N",
  x:0,
  y:3,
  travelLog: "X=0, Y=3",
  name: "Rover 2 "
};
// roverCount=0 is rover if is =1 is rover1 if is =2 rover2
var roverCount=0;
// ======================
var mapRover=[
  ['','','','','','X','','','',''],
  ['','','','','X','','','','',''],
  ['','','','','','','','','',''],
  ['','','X','','','','','','',''],
  ['X','','','','','','','','',''],
  ['','','','','','','','','','X'],
  ['','X','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','X','','','','']];


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

function obstacleFound(column,row){
  if ((mapRover[row][column])==="X") {
    console.log("Rover has found an obstacle.");
    return true;
  }else if ((column==rover1.x)&&(row==rover1.y)){
    console.log("Rover has found another Rover");
    return true;
  }
  else if ((column==rover2.x)&&(row==rover2.y)){
    console.log("Rover has found another Rover");
    return true;
  }else{
    return false;
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
      rover.y -= 1;
      rover.travelLog=rover.travelLog+ " / X="+rover.x+", Y="+rover.y;
      console.log(rover.name + "is moving forward North");
      console.log(rover);
    }
    break;
    case "S":
    if (inTheMap(rover.y,"+")) {
      if(obstacleFound(rover.x,(rover.y+1))){
        break;
      }
      rover.y += 1;
      rover.travelLog=rover.travelLog+ " / X="+rover.x+", Y="+rover.y;
      console.log(rover.name + "is moving forward South");
      console.log(rover);
    }
    break;
    case "E":
    if (inTheMap(rover.x,"+")) {
      if(obstacleFound((rover.x+1),rover.y)){
        break;
      }
      rover.x += 1;
      rover.travelLog=rover.travelLog+ " / X="+rover.x+", Y="+rover.y;
      console.log(rover.name + "is moving forward East");
      console.log(rover);
    }
      break;
    case "W":
    if(inTheMap(rover.x,"-")){
      if(obstacleFound((rover.x-1),rover.y)){
        break;
      }
      rover.x -= 1;
      rover.travelLog=rover.travelLog+ " / X="+rover.x+", Y="+rover.y;
      console.log(rover.name + "is moving forward West");
      console.log(rover);
    }
      break;
    default:
      console.log("Rover cannot move :,-(");
  }
}

function main(movements){
  var currentRover=rover1;
  for (var i = 0; i < movements.length; i++) {
    if (roverCount==0){
      currentRover=rover1;
      roverCount=1;
    }else{
      currentRover=rover2;
      roverCount=0;
    }
    switch (movements[i]) {
      case "f":
        moveForward(currentRover);
        break;
      case "b":
        moveBackward(currentRover);
        break;
      case "l":
        turnLeft(currentRover);
        break;
      case "r":
        turnRight(currentRover);
        break;
      default:
        console.log(currentRover.name+" cannot valiate the input command called = "+movements[i]);
    }
  }
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

function moveBackward(rover){
  console.log("moveBackward was called");
  switch (rover.direction) {
    case "N":
    if (inTheMap(rover.y,"+")) {
      if(obstacleFound(rover.x,(rover.y+1))){
        break;
      }
      rover.y += 1;
      rover.travelLog=rover.travelLog+ " / X="+rover.x+", Y="+rover.y;
      console.log(rover.name + "is moving backward forward South");
      console.log(rover);
    }
    break;
    case "S":
    if(inTheMap(rover.y,"-")){
      if(obstacleFound(rover.x,(rover.y-1))){
        break;
      }
      rover.y -= 1;
      rover.travelLog=rover.travelLog+ " / X="+rover.x+", Y="+rover.y;
      console.log(rover.name + "is moving backward forward North");
      console.log(rover);
    }
    break;
    case "E":
    if(inTheMap(rover.x,"-")){
      if(obstacleFound((rover.x-1),rover.y)){
        break;
      }
      rover.x -= 1;
      rover.travelLog=rover.travelLog+ " / X="+rover.x+", Y="+rover.y;
      console.log(rover.name + "is moving backward forward West");
      console.log(rover);
    }
      break;
    case "W":
    if (inTheMap(rover.x,"+")) {
      if(obstacleFound((rover.x+1),rover.y)){
        break;
      }
      rover.x += 1;
      rover.travelLog=rover.travelLog+ " / X="+rover.x+", Y="+rover.y;
      console.log(rover.name + "is moving backward forward East");
      console.log(rover);
    }
      break;
    default:
      console.log("Rover cannot move :,-(");
  }


}
