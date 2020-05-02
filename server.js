const prompt = require("prompt-sync")({ sigint: true });

let x, y, facing;

const compassArray = [
  { direction: "north", message: "top", add: "y", move: 1, wall: 5 },
  { direction: "east", message: "right", add: "x", move: 1, wall: 5 },
  { direction: "south", message: "bottom", add: "y", move: -1, wall: 1 },
  { direction: "west", message: "left", add: "x", move: -1, wall: 1 },
];

const compassLength = compassArray.length;

const report = () => {
  console.log("location: " + x + ", " + y + " facing " + facing);
};

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

function rightTurn() {
  turn(compassLength - 1, compassArray[0].direction, 1);
}

function leftTurn() {
  turn(0, compassArray[compassLength - 1].direction, -1);
}

const move = () => {
  const message = (i) => {
    console.log("Oh no! you ran into the " + i + " wall!");
  };
  let yInt = Number.parseInt(y);
  let xInt = Number.parseInt(x);
  for (let i = 0; i <= compassLength - 1; i++) {
    if (facing === compassArray[i].direction) {
      if (compassArray[i].add === "x" && xInt !== compassArray[i].wall) {
        x = xInt += compassArray[i].move;
      } else if (compassArray[i].add === "y" && yInt !== compassArray[i].wall) {
        y = yInt += compassArray[i].move;
      } else {
        message(compassArray[i].message);
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
    } else {
      console.log("numbers between 1 and 5 please");
    }
  }
};

const chooseposition = () => {
  while (!chosenPosition) {
    let direction = prompt(
      "which direction are you facing? north, south,east or west?"
    );
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
        console.log("Moving forward!");
        move();
        break;
      case "left":
        console.log("turning left");
        leftTurn();
        break;
      case "right":
        console.log("turning right");
        rightTurn();
        break;
      case "report":
        console.log("report");
        report();
        break;
      case "place":
        console.log("choose placement!");
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
