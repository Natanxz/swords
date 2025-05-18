let diff = 6;

function klik() {
  const sword = document.getElementById("sword");
  let tap = document.getElementById('tap');
  let position;
  if (sword.style.bottom === "" || sword.style.bottom === undefined) {
    position = -100;
  } else {
    position = parseFloat(sword.style.bottom);
  }
  
  if (position < 200) {
    position += diff;
    let currentCount = parseInt(tap.innerText) || 0;
    tap.innerText = currentCount + 1;
    sword.style.bottom = position + "px"
  } else {
    let menu = document.getElementById('play');
    let msg = document.getElementById('msg');
    menu.style.display = "block";
    menu.style.visibility = "visible";
    msg.innerText = "You successfully pulled this sword! With " + tap.innerText + " taps!";
  } 
  
  if(diff === 0.59) {
    let menu = document.getElementById('play');
    let msg = document.getElementById('msg');
    menu.style.display = "block";
    menu.style.visibility = "visible";
    msg.innerText = "You successfully pulled ?? With " + tap.innerText + " taps!";
  }
  
  if (parseInt(tap.innerText) === 1) {
    let title = document.getElementById('title');
    title.innerHTML = "PULL SWORD!<br><span id='tap'>1</span>TAPS"
  }
  if (parseInt(tap.innerText) === 299 && diff === 1) {
    let title = document.getElementById('title');
    title.innerHTML = "Hey..<br><span id='tap'>299</span>TAPS"
  }
  if (parseInt(tap.innerText) === 599 && diff === 0.5) {
    let title = document.getElementById('title');
    title.innerHTML = "HELP ME!<br><span id='tap'>599</span>TAPS"
  }
  if (parseInt(tap.innerText) === 3333 && diff === 0.09) {
    let title = document.getElementById('title');
    title.innerHTML = "...<br><span id='tap'>3333</span>TAPS"
  }
}

function next() {
  const stone = document.getElementById('stone');
  let sword = document.getElementById('sword');
  let menu = document.getElementById('play');
  let tap = document.getElementById('tap');
  
  if (diff === 6) {
    menu.style.display = "none";
    menu.style.display = "hidden";
    document.body.style.backgroundImage = "url('../assets/bridge.png')";
    stone.src = "../assets/stone2.png";
    sword.src = "../assets/sword.png";
    diff = 3;
    sword.style.bottom = "-100px";
    tap.innerText = "0"
  } else if (diff === 3) {
      menu.style.display = "none";
      menu.style.display = "hidden";
      document.body.style.backgroundImage = "url('../assets/bridge.png')";
      stone.src = "../assets/stone2.png";
      sword.src = "../assets/heavy_sword.png";
      diff = 1;
      sword.style.bottom = "-100px";
      tap.innerText = "0"
  } else if (diff === 1) {
      menu.style.display = "none";
      menu.style.display = "hidden";
      document.body.style.backgroundImage = "url('../assets/forest.png')";
      stone.src = "../assets/stone3.png";
      sword.src = "../assets/bloody.png";
      diff = 0.5;
      sword.style.bottom = "-100px";
      tap.innerText = "0"
  } else if (diff === 0.5) {
      menu.style.display = "none";
      menu.style.display = "hidden";
      document.body.style.backgroundImage = "url('../assets/forest.png')";
      stone.src = "../assets/stone3.png";
      sword.src = "../assets/yoru.png";
      diff = 0.09;
      sword.style.bottom = "-100px";
      tap.innerText = "0"
  } else if (diff === 0.09) {
      menu.style.display = "none";
      menu.style.display = "hidden";
      document.body.style.backgroundImage = "url('../assets/loneliness.png')";
      stone.src = "../assets/none.png";
      sword.src = "../assets/unknown.png";
      diff = 0.059;
      sword.style.bottom = "-100px";
      tap.innerText = "0"
  }
}

function ulang() {
  let menu = document.getElementById('play');
  let tap = document.getElementById('tap');
  let sword = document.getElementById('sword');
  sword.style.bottom = "-100px";
  tap.innerText = "0";
  menu.style.display = "none";
  menu.style.visibility = "hidden";
}
