const prompt = require("prompt-sync")({ sigint: true });

let programAbort = false;

while (!programAbort) {
  let guess = prompt("What's Wall-Es next action? ");

  switch (guess) {
    case "move":
      console.log("Moving forward!");
      break;
    case "left":
      console.log("turning left");
      break;
    case "right":
      console.log("turning right");
      break;
    case "report":
      console.log("report");
      break;
    case "exit":
      console.log("seeya later!");
      programAbort = true;
      break;
    default:
      console.log(
        "COMMAND UNAVALIBLE! Avalible commands include: move, left, right. report and exit. Please stiock to the script"
      );
  }
}
