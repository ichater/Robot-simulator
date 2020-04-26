const prompt = require("prompt-sync")({ sigint: true });

let x = 0,
  y = 0,
  facing = "South";

const placement = (x, y, f) => {
  (x = x), (y = x), (facing = f);
};

const report = () => {
  console.log("location: " + x + ", " + y + " facing " + facing);
};

const move = () => {
  switch (facing) {
    case "South":
      y += 1;
      break;
    case "West":
      x -= 1;
      break;
    case "North":
      y -= 1;
      break;
    case "East":
      x += 1;
      break;
  }
};

const rightTurn = () => {
  switch (facing) {
    case "South":
      facing = "West";
      break;
    case "West":
      facing = "North";
      break;
    case "North":
      facing = "East";
      break;
    case "East":
      facing = "West";
      break;
  }
};

const leftTurn = () => {
  switch (facing) {
    case "South":
      facing = "East";
      break;
    case "East":
      facing = "North";
      break;
    case "North":
      facing = "West";
      break;
    case "West":
      facing = "South";
      break;
  }
};

let chosenPosition = false;
let chosenXaxis = false;
let chosenYAxis = false;

while (!chosenXaxis) {
  let xAxis = prompt("Where are you on the x axis?");

  if (xAxis >= 1 && xAxis <= 5) {
    console.log("works");
    x = xAxis;
    chosenXaxis = true;
  } else {
    console.log("numbers between 1 and 5 please");
  }
}

while (!chosenYAxis) {
  let yAxis = prompt("Where are you on the y axis?");

  if (yAxis >= 1 && yAxis <= 5) {
    console.log("works");
    y = yAxis;
    chosenYAxis = true;
  } else {
    console.log("numbers between 1 and 5 please");
  }
}

while (!chosenPosition) {
  let direction = prompt("which direction are you facing?");

  if (
    direction === "north" ||
    direction === "sputh" ||
    direction === "east" ||
    direction === "west"
  ) {
    console.log("works");
    facing = direction;
    chosenPosition2 = true;
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
