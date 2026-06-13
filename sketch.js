
  hits(player) {
    return (player.x < this.x + this.size &&
            player.x + player.size > this.x &&
            pla// Agro Forte e Futuro Sustentável - p5.js

let player;
let items = [];
let score = 0;
let gameOver = false;
let itemImages = {};

function setup() {
  createCanvas(800, 450);
  
  player = new Player();
  
  // Opcional: pré-carregar ícones como imagens (pode usar emojis no draw)
  // Aqui vamos usar emojis mesmo
}

function draw() {
  background(135, 206, 235); // Céu azul
  drawGround();
  
  if (!gameOver) {
    player.update();
    player.show();
    
    if (frameCount % 60 === 0) { // Criar itens a cada segundo
      items.push(new Item());
    }
    
    for (let i = items.length - 1; i >= 0; i--) {
      items[i].update();
      items[i].show();
      
      if (items[i].hits(player)) {
        if (items[i].sustainable) {
          score += 10;
        } else {
          score -= 15;
        }
        items.splice(i, 1);
      } else if (items[i].y > height) {
        items.splice(i, 1);
      }
    }
    
    fill(0);
    textSize(24);
    textAlign(LEFT);
    text("Pontuação: " + score, 10, 30);
    
    if (score < -30) {
      gameOver = true;
    }
  } else {
    fill(0, 150);
    rect(0, 0, width, height);
    
    fill(255);
    textAlign(CENTER);
    textSize(48);
    text("Fim de Jogo!", width/2, height/2 - 20);
    
    textSize(24);
    text("Pontuação final: " + score, width/2, height/2 + 20);
    text("Agro Forte = Produção + Sustentabilidade", width/2, height/2 + 60);
  }
}

function drawGround() {
  fill(200, 230, 200);
  rect(0, 350, width, 100);
  
  fill(34, 139, 34);
  for(let i=0;i<width;i+=80){
    rect(i, 330, 50, 20);
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) player.setDir(-1);
  if (keyCode === RIGHT_ARROW) player.setDir(1);
}

function keyReleased() {
  if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) player.setDir(0);
}

// --- Classes ---
class Player {
  constructor() {
    this.x = width/2;
    this.y = 380;
    this.size = 60;
    this.speed = 8;
    this.dir = 0;
  }
  
  update() {
    this.x += this.dir * this.speed;
    this.x = constrain(this.x, 0, width - this.size);
  }
  
  show() {
    fill(46, 125, 50);
    rect(this.x, this.y, this.size, this.size);
    textSize(32);
    textAlign(CENTER, CENTER);
    fill(255);
    text("🚜", this.x + this.size/2, this.y + this.size/2);
  }
  
  setDir(dir) {
    this.dir = dir;
  }
}

class Item {
  constructor() {
    this.x = random(width-30);
    this.y = -30;
    this.size = 30;
    this.speed = random(2,5);
    this.sustainable = random() > 0.35;
  }
  
  update() {
    this.y += this.speed;
  }
  
  show() {
    textSize(32);
    textAlign(CENTER, CENTER);
    if (this.sustainable) {
      let emojis = ["🌱","💧","☀️","🌳"];
      text(random(emojis), this.x + this.size/2, this.y + this.size/2);
    } else {
      let emojis = ["🛢️","💨","🗑️"];
      text(random(emojis), this.x + this.size/2, this.y + this.size/2);
    }
  }
  yer.y < this.y + this.size &&
            player.y + player.size > this.y);
  }
}