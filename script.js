var turn = 1;
var play = "";
var p1 = [];
var p2 = [];
var turns = 0;
function play(id) {
  if (turn == 1) {
    turns += 1;
    document.getElementById(id).style.backgroundColor = "#00ff8c";
    p1.push(id);
    end();
  }
  else if (turn == 2) {
    turns += 1;
    document.getElementById(id).style.backgroundColor = "#e600ff";
    p2.push(id);
    end();
  }
}
function end() {
  if ((p1.includes('r0c0') && p1.includes('r0c1') && p1.includes('r0c2')) || (p1.includes('r1c0') && p1.includes('r1c1') && p1.includes('r1c2')) || (p1.includes('r2c0') && p1.includes('r2c1') && p1.includes('r2c2')) || (p1.includes('r0c0') && p1.includes('r1c0') && p1.includes('r2c0')) || (p1.includes('r0c1') && p1.includes('r1c1') && p1.includes('r2c1')) || (p1.includes('r0c2') && p1.includes('r1c2') && p1.includes('r2c2')) || (p1.includes('r0c0') && p1.includes('r1c1') && p1.includes('r2c2')) || (p1.includes('r0c2') && p1.includes('r1c1') && p1.includes('r2c0'))) {
      document.getElementById('win').style.display = 'block';
      setTimeout(w2,2500)
  }
      else if ((p2.includes('r0c0') && p2.includes('r0c1') && p2.includes('r0c2')) || (p2.includes('r1c0') && p2.includes('r1c1') && p2.includes('r1c2')) || (p2.includes('r2c0') && p2.includes('r2c1') && p2.includes('r2c2')) || (p2.includes('r0c0') && p2.includes('r1c0') && p2.includes('r2c0')) || (p2.includes('r0c1') && p2.includes('r1c1') && p2.includes('r2c1')) || (p2.includes('r0c2') && p2.includes('r1c2') && p2.includes('r2c2')) || (p2.includes('r0c0') && p2.includes('r1c1') && p2.includes('r2c2')) || (p2.includes('r0c2') && p2.includes('r1c1') && p2.includes('r2c0'))) {
          document.getElementById('win').style.transform = 'rotate(-180deg)';
          document.getElementById('win').style.display = 'block';
          setTimeout(w1,2500)
      }
      else if (turns == 9) {
        document.getElementById('draw').style.display = 'block';
        setTimeout(newg,5000)
      }
  
}

function w1() {
  document.getElementById('win').style.display = 'none';
  document.getElementById('lose').style.display = 'block';
  setTimeout(newg,5000)
}
function w2() {
  document.getElementById('win').style.display = 'none';
  document.getElementById('lose').style.transform = 'rotate(-180deg)';
  document.getElementById('lose').style.display = 'block';
  setTimeout(newg,5000)
}
function newg() {
  location.reload();
}