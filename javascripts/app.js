// Rover Object Goes Here
// ======================
var seguimiento = ["X=0, Y=0"];
var rover ={
  direction:"N",
  x:0,
  y:0,
  travelLog: seguimiento,
};
// ======================
var mapRover=[
  ['','','','','','','','','',''],
  ['','','','','X','','','','',''],
  ['','','','','','','','','',''],
  ['','','X','','','','','','',''],
  ['X','','','','','','','','',''],
  ['','','','','','','','','','X'],
  ['','X','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','','']];


function turnLeft(rover){
  console.log("turnLeft was called!");
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
      console.log("Rover had an Error");
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
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
      console.log("Rover had an Error");
      break;
  }
}
function obstacleFound(column,row){
  if ((mapRover[row][column])==="X") {
    console.log("Rover has found an obstacle.");
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
      seguimiento.push("X="+rover.x+", Y="+rover.y);
      rover.travelLog=seguimiento;
      console.log("You are moving forward North");
      console.log(rover);
    }
    break;
    case "S":
    if (inTheMap(rover.y,"+")) {
      if(obstacleFound(rover.x,(rover.y+1))){
        break;
      }
      rover.y += 1;
      seguimiento.push("X="+rover.x+", Y="+rover.y);
      rover.travelLog=seguimiento;
      console.log("You are moving forward South");
      console.log(rover);
    }
    break;
    case "E":
    if (inTheMap(rover.x,"+")) {
      if(obstacleFound((rover.x+1),rover.y)){
        break;
      }
      rover.x += 1;
      seguimiento.push("X="+rover.x+", Y="+rover.y);
      rover.travelLog=seguimiento;
      console.log("You are moving forward East");
      console.log(rover);
    }
      break;
    case "W":
    if(inTheMap(rover.x,"-")){
      if(obstacleFound((rover.x-1),rover.y)){
        break;
      }
      rover.x -= 1;
      seguimiento.push("X="+rover.x+", Y="+rover.y);
      rover.travelLog=seguimiento;
      console.log("You are moving forward West");
      console.log(rover);
    }
      break;
    default:
      console.log("Rover cannot move :,-(");
  }
}
function ejecutar(movimientos){
  for (var i = 0; i < movimientos.length; i++) {
    switch (movimientos[i]) {
      case "f":
        moveForward(rover);
        break;
      case "b":
        moveBackward(rover);
        break;
      case "l":
        turnLeft(rover);
        break;
      case "r":
        turnRight(rover);
        break;
      default:
        console.log("Rover cannot valiate the input command called = "+movimientos[i]);
    }
  }
  console.log(rover.travelLog);
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
      seguimiento.push("X="+rover.x+", Y="+rover.y);
      rover.travelLog=seguimiento;
      console.log("You are moving backward forward South");
      console.log(rover);
    }
    break;
    case "S":
    if(inTheMap(rover.y,"-")){
      if(obstacleFound(rover.x,(rover.y-1))){
        break;
      }
      rover.y -= 1;
      seguimiento.push("X="+rover.x+", Y="+rover.y);
      rover.travelLog=seguimiento;
      console.log("You are moving backward forward North");
      console.log(rover);
    }
    break;
    case "E":
    if(inTheMap(rover.x,"-")){
      if(obstacleFound((rover.x-1),rover.y)){
        break;
      }
      rover.x -= 1;
      seguimiento.push("X="+rover.x+", Y="+rover.y);
      rover.travelLog=seguimiento;
      console.log("You are moving backward forward West");
      console.log(rover);
    }
      break;
    case "W":
    if (inTheMap(rover.x,"+")) {
      if(obstacleFound((rover.x+1),rover.y)){
        break;
      }
      rover.x += 1;
      seguimiento.push("X="+rover.x+", Y="+rover.y);
      rover.travelLog=seguimiento;
      console.log("You are moving backward forward East");
      console.log(rover);
    }
      break;
    default:
      console.log("Rover cannot move :,-(");
  }


}
