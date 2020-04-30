const prompt = require("prompt-sync")({ sigint: true });

let x, y, facing;

const compassArray = [
  { direction: "north", message: "top", add: "y", move: -1, wall: 0 },
  { direction: "east", message: "right", add: "x", move: 1, wall: 5 },
  { direction: "south", message: "bottom", add: "y", y: 1, wall: 5 },
  { direction: "west", message: "left", add: "x", move: -1, wall: 0 },
];

const report = () => {
  console.log("location: " + x + ", " + y + " facing " + facing);
};

const move = () => {
  const message = (i) => {
    console.log("Oh no! you ran into the " + i + " wall!");
  };
  let yInt = Number.parseInt(y);
  let xInt = Number.parseInt(x);

  compassArray.findIndex(function (i) {
    if (i.add === "x" && x < 5) {
      x = xInt += 1;
    }
    //  else {
    //   message(i.message);
    // }
  });
  compassArray.findIndex(function (i) {
    if (i.add === "y" && y < 5) {
      y = yInt += 1;
    }
    // else {
    //   message(i.message);
    // }
  });

  // switch (facing.toLowerCase()) {
  //   case "south":
  //     if (yInt >= 5) {
  //       message("bottom");
  //       y === 5;
  //     } else {
  //       y = yInt += 1;
  //     }

  //     break;
  //   case "west":
  //     if (xInt <= 1) {
  //       message("left");
  //       x === 0;
  //     } else {
  //       x = xInt += 1;
  //     }
  //     break;
  //   case "north":
  //     if (yInt <= 1) {
  //       message("top");
  //       y === 1;
  //     } else {
  //       y = yInt -= 1;
  //     }
  //     break;
  //   case "east":
  //     if (xInt >= 5) {
  //       message("right");
  //       x === 5;
  //     } else {
  //       x = xInt += 1;
  //     }
  //     break;
  // }
};

const rightTurn = () => {
  for (let i = compassArray.length - 1; i >= 0; i--) {
    if (facing === compassArray[i].direction) {
      if (facing === compassArray[compassArray.length - 1].direction) {
        facing = compassArray[0].direction;
        break;
      } else {
        facing = compassArray[i + 1].direction;
      }
    }
  }
};

const leftTurn = () => {
  for (let i = 0; i <= compassArray.length; i++) {
    if (facing === compassArray[i].direction) {
      if (facing !== compassArray[0].direction) {
        facing = compassArray[i - 1].direction;
        break;
      } else {
        facing = compassArray[compassArray.length - 1].direction;
        break;
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

//Below is a function so it can be recalled upon the "place" command
const placement = () => {
  while (!chosenXaxis) {
    let xAxis = prompt("Where are you on the x axis?");

    if (xAxis >= 1 && xAxis <= 5) {
      chooseX(xAxis);
      chosenXaxis = true;
    } else {
      console.log("numbers between 1 and 5 please");
    }
  }
};

placement();

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
      test();
      break;
    default:
      console.log(
        "COMMAND UNAVALIBLE! Avalible commands include: move, left, right. report and place. Please stiock to the script"
      );
  }
}
