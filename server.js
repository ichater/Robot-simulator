const prompt = require("prompt-sync")({ sigint: true });

let x, y, facing;

const compassArray = [
  { direction: "north", add: "y", move: 1, wall: 5 },
  { direction: "east", add: "x", move: 1, wall: 5 },
  { direction: "south", add: "y", move: -1, wall: 1 },
  { direction: "west", add: "x", move: -1, wall: 1 },
];

//function below for turning either left or right can be called twice
const turn = (x, y, z) => {
  if (facing === compassArray[x].direction) {
    facing = y;
  } else {
    facing =
      compassArray[compassArray.findIndex((e) => facing === e.direction) + z]
        .direction;
  }
};

const move = () => {
  let yInt = Number.parseInt(y);
  let xInt = Number.parseInt(x);
  for (let i = 0; i <= compassArray.length - 1; i++) {
    if (facing === compassArray[i].direction) {
      if (compassArray[i].add === "x" && xInt !== compassArray[i].wall) {
        x = xInt += compassArray[i].move;
      }
      if (compassArray[i].add === "y" && yInt !== compassArray[i].wall) {
        y = yInt += compassArray[i].move;
      }
    }
  }
};

let chosenPosition = false;
let chosenXaxis = false;
let chosenYAxis = false;

const chooseX = (input) => {
  x = input;
};
const chooseY = (input) => {
  y = input;
};
const chooseDirection = (input) => {
  facing = input;
};

const chooseAxis = (axisStr, func, chosenAxis) => {
  while (!chosenAxis) {
    Axis = prompt("Where are you on the " + axisStr + " axis?");
    if (Axis >= 1 && Axis <= 5) {
      func(Axis);
      chosenAxis = true;
    }
  }
};

const chooseposition = () => {
  while (!chosenPosition) {
    let direction = prompt("north, south,east or west?");
    compassArray.findIndex(function (i) {
      if (i.direction === direction.toLocaleLowerCase()) {
        chooseDirection(direction);
        chosenPosition = true;
      }
    });
  }
};

const movement = () => {
  while (chosenPosition) {
    let guess = prompt("What's Wall-Es next action? ");
    switch (guess) {
      case "move":
        move();
        break;
      case "left":
        turn(0, compassArray[compassArray.length - 1].direction, -1);
        break;
      case "right":
        turn(compassArray.length - 1, compassArray[0].direction, 1);
        break;
      case "report":
        console.log("location: " + x + ", " + y + " facing " + facing);
        break;
      case "place":
        chosenPosition = false;
        chosenXaxis = false;
        chosenYAxis = false;
        place();
        break;
      default:
        console.log(
          "COMMAND UNAVALIBLE! Avalible commands include: move, left, right. report and place. Please stick to the script"
        );
    }
  }
};

const place = () => {
  chooseAxis("x", chooseX, chosenXaxis);
  chooseAxis("y", chooseY, chosenYAxis);
  chooseposition();
  movement();
};
place();
