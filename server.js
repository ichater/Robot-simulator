const prompt = require("prompt-sync")({ sigint: true });

let x, y, facing;

const report = () => {
  console.log("location: " + x + ", " + y + " facing " + facing);
};

const move = () => {
  const message = (i) => {
    console.log("Oh no! you ran into the " + i + " wall!");
  };
  let yInt = Number.parseInt(y);
  let xInt = Number.parseInt(x);
  switch (facing.toLowerCase()) {
    case "south":
      if (yInt >= 5) {
        message("bottom");
        y === 5;
      } else {
        y = yInt += 1;
      }

      break;
    case "west":
      if (xInt <= 1) {
        message("left");
        x === 0;
      } else {
        x = xInt += 1;
      }
      break;
    case "north":
      if (yInt <= 1) {
        message("top");
        y === 1;
      } else {
        y = yInt -= 1;
      }
      break;
    case "east":
      if (xInt >= 5) {
        message("right");
        x === 5;
      } else {
        x = xInt += 1;
      }
      break;
  }
};

const compassArray = ["north", "south", "east", "west"];

const rightTurn = () => {
  for (let i = compassArray.length; i >= 0; i--) {
    if (facing === compassArray[i]) {
      if (facing !== compassArray[compassArray.length]) {
        console.log("i+1");
        facing = compassArray[i + 1];
      } else {
        console.log("back to the start");
        facing = compassArray[0];
      }
    }
  }
};

const leftTurn = () => {
  for (let i = 0; i <= compassArray.length; i++) {
    if (facing === compassArray[i]) {
      if (facing !== compassArray[0]) {
        console.log("i-1");
        facing = compassArray[i - 1];
      } else {
        console.log("back to the start");
        facing = compassArray[compassArray.length];
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

while (!chosenXaxis) {
  let xAxis = prompt("Where are you on the x axis?");

  if (xAxis >= 1 && xAxis <= 5) {
    chooseX(xAxis);
    chosenXaxis = true;
  } else {
    console.log("numbers between 1 and 5 please");
  }
}

const chooseY = (input) => {
  y = input;
};

while (!chosenYAxis) {
  let yAxis = prompt("Where are you on the y axis?");

  if (yAxis >= 1 && yAxis <= 5) {
    chooseY(yAxis);
    chosenYAxis = true;
  } else {
    console.log("numbers between 1 and 5 please");
  }
}

const chooseDirection = (input) => {
  facing = input;
};

while (!chosenPosition) {
  let direction = prompt("which direction are you facing?");

  if (
    direction === "north" ||
    direction === "south" ||
    direction === "east" ||
    direction === "west"
  ) {
    chooseDirection(direction);
    chosenPosition = true;
  } else {
    console.log("north, south, east or west are the only valid commands");
  }
}

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
      break;
    default:
      console.log(
        "COMMAND UNAVALIBLE! Avalible commands include: move, left, right. report and place. Please stiock to the script"
      );
  }
}
