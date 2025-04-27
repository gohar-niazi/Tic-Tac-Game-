let boxes = document.querySelectorAll(".box");
let rstbtn = document.querySelector("#rstbtn");
let masgcontainer = document.querySelector(".masg-container");
let newgame = document.querySelector("#newgame");
let msg = document.querySelector("#msg");
let turnO = true;
const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      //palyer O
      box.innerText = "O";
      turnO = false;
      box.classList.add("white");
      box.classList.remove("red");
    } else {
      //player X
      box.innerText = "X";
      turnO = true;
      box.classList.add("red");
      box.classList.remove("white");
    }
    box.disabled = true;
    checkwinner();
  });
});

const checkwinner = () => {
  for (let pattren of winpattern) {
    let pos1val = boxes[pattren[0]].innerText;
    let pos2val = boxes[pattren[1]].innerText;
    let pos3val = boxes[pattren[2]].innerText;
    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showwiner(pos1val);
      }
    }
  }
};

const showwiner = (winner) => {
  msg.innerText = `Congratulation, winner is ${winner}`;
  masgcontainer.classList.remove("hide");
  disableboxes();
};
const resetgame = () => {
  turnO = true;
  enableboxes();
  masgcontainer.classList.add("hide");
};

const disableboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
newgame.addEventListener("click", resetgame);
rstbtn.addEventListener("click", resetgame);
