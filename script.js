var sketchProc = function(processingInstance) {
  with (processingInstance) {
    size(600, 600); 
    frameRate(60);    
    smooth();
    
/*  ADD YOUR OWN LEVELS HERE (Boss level must be the last one)
    Must be 10 columns x 9 rows
    X = Blank space
    Y = Barrier (blocks)
    1, 2, 3, 4 = Enemies
    P = Portal (random portal enemies emerge from portals)
    B = Boss (random boss enemies emerge from the boss)
*/
var levels = [
    {}, //start screen (Home | Levels | How | Scores | etc.)
    {
        grid: [
            "XXXXXXXXXX",
            "XXXXXXXXXX",
            "X11111111X",
            "X11111111X",
            "X11111111X",
            "XXXXXXXXXX",
            "XXXXXXXXXX",
            "XXXXXXXXXX",
            "XYYXYYXYYX"
        ],
        enemyPoints: 10,
        story: ("Your mission is to destroy the enemy")
    }, //Level 1
    {
        grid: [
            "XXXXXXXXXX",
            "X2121P12XX",
            "XX1212121X",
            "X2121212XX",
            "XX1212121X",
            "XXXXXXXXXX",
            "YXXXXXXXXY",
            "XXXXXXXXXX",
            "YXXXYYXXXY"
        ],
        enemyPoints: 15,
        story: ("Well done!!\nYour next mission is to destroy more enemies")
    }, //Level 2
    {
        grid: [
            "XXXXXXXXXX",
            "XXXPXXPXXX",
            "XX222222XX",
            "XXX1111XXX",
            "XX333333XX",
            "X33211233X",
            "XXXXXXXXXX",
            "XYYXXXXYYX",
            "YXXXYYXXXY"
        ],
        enemyPoints: 20,
        story: ("Awesome work!!\nYour next mission is to destroy even more enemies")
    }, //Level 3
    {
        grid: [
            "XXXXXXXXXX",
            "XPXXPXXPXX",
            "XX222222XX",
            "XXX1111XXX",
            "XX333333XX",
            "X33211233X",
            "XXXXXXXXXX",
            "XYYXXXXYYX",
            "YXXXYYXXXY"
        ],
        enemyPoints: 30,
        story: ("Wicked!!\nNow you get to destroy even more enemies")
    }, //Level 4
    {
        grid: [
            "XXXXXXXXXX",
            "X4P4444P4X",
            "X31231231X",
            "X44444444X",
            "X21212121X",
            "YXXXXXXXXY",
            "XXXYXXYXXX",
            "YYYXYYXYYY",
            "XXXXXXXXXX"
        ],
        enemyPoints: 100,
        story: ("Almost there!!\nYour next mission is to destroy something")
    }, //Level 5
    {
        grid: [
            "XXXXXXXXXX",
            "XXXXBPXXXX",
            "XX13XX31XX",
            "XXXX33XXXX",
            "XXX1221XXX",
            "YXXXXXXXXY",
            "XXXYXXYXXX",
            "YXYXXXXYXY",
            "XXXXXXXXXX"
        ],
        enemyPoints: 150,
        story: ("Youza!!\nGet ready to meet the BOSS (lite)"),
        bossLives: 5
    }, //Level 6 - Boss (lite)
    {
        grid: [
            "XXXXXXXXXX",
            "XXXXBPXXXX",
            "XX13XX31XX",
            "XXX4334XXX",
            "XXX2121XXX",
            "YXXXXXXXXY",
            "XXXYXXYXXX",
            "YXYXYYXYXY",
            "XXXXXXXXXX"
        ],
        enemyPoints: 150,
        story: ("Sick!!\nTime to destroy the BOSS (medium)"),
        bossLives: 15
    }, //Level 7 - Boss (medium)
    {
        grid: [
            "XXXXXXXXXX",
            "YYXXPBPXYY",
            "XXX3333XXX",
            "YYXX44XXYY",
            "XYY4444YYX",
            "YXYY44YYXY",
            "XYYX33XYYX",
            "XYYYYYYYYX",
            "XXXXXXXXXX"
        ],
        enemyPoints: 250,
        story: ("You da bomb!\nFinal showdown with the real BOSS"),
        bossLives: 25
    }  //Level 8 - Boss (finale)
];

/*  ADD YOUR OWN COLOR THEMES HERE (Each theme must include a name and exactly 5 colors)
    Try to use light to dark, or dark to light so you get a better contrast in the game
*/
var colorThemes = [
    {
        name: "vibes",
        colors: [
            color(0, 48, 73),
            color(232, 226, 136),
            color(214, 40, 40),
            color(247, 127, 0),
            color(252, 191, 73)
        ]
    },
        {
        name: "chalkboard", //by RandomProgrammer24
        colors: [
            color(64),
            color(232, 213, 93),
            color(162, 219, 216),
            color(209, 182, 192),
            color(209, 230, 207),
        ]
    },
    {
        name:"fire", //by Sreenjoy Modak
        colors:[
        color(255),
        color(255,98,0),
        color(255,187,0),
        color(240, 140, 0),
        color(255, 181, 71)
        ]
    },
    {
        name: "desert", //by Benji Doerr
        colors: [
            color(0, 0, 0),
            color(235, 215, 0),
            color(137, 148, 92),
            color(186, 89, 4),
            color(255, 0, 0)
        ]
    },
    {
        name: "birthday party", //by Benji Doerr
        colors: [
            color(112, 17, 109),
            color(202, 5, 77),
            color(240, 82, 216),
            color(127, 204, 255),
            color(244, 252, 0)
        ]
    },
    {
        name: "contemporary",
        colors: [
            color(26, 26, 28),
            color(78, 78, 80),
            color(111, 34, 50),
            color(149, 7, 65),
            color(195, 8, 63)
        ]
    },
    {
        name: "futuristic",
        colors: [
            color(44, 53, 50),
            color(16, 100, 102),
            color(216, 176, 140),
            color(255, 203, 155),
            color(210, 233, 227)
        ]
    },
    {
        name: "audacious",
        colors: [
            color(39, 39, 39),
            color(116, 116, 116),
            color(255, 101, 47),
            color(255, 228, 1),
            color(19, 167, 107)
        ]
    },
    {
        name: "citrus",
        colors: [
            color(31, 38, 5),
            color(31, 100, 33),
            color(83, 144, 15),
            color(164, 166, 30),
            color(214, 206, 20)
        ]
    },
    {
        name: "playing arts",
        colors: [
            color(0, 127, 112),
            color(69, 69, 64),
            color(139, 42, 49),
            color(177, 125, 89),
            color(255, 255, 255)
        ]
    },
    {
        name: "civic",
        colors: [
            color(64, 61, 62),
            color(61, 158, 204),
            color(238, 71, 49),
            color(248, 249, 251),
            color(54, 174, 91)
        ]
    },
    {
        name: "unnamed",
        colors: [
            color(46, 53, 50),
            color(220, 220, 221),
            color(148, 149, 139),
            color(175, 28, 28),
            color(183, 182, 193)
        ]
    },
    {
        name: "sunset",
        colors: [
            color(114, 17, 33),
            color(202, 5, 77),
            color(241, 81, 86),
            color(255, 192, 127),
            color(255, 207, 153)
        ]
    },
    {
        name: "black & white",
        colors: [
            color(0, 0, 0),
            color(51, 51, 51),
            color(102, 102, 102),
            color(153, 153, 153),
            color(255, 255, 255)
        ]
    }
];

{
    angleMode = "degrees";
    textFont(createFont("Courier New"));
    noStroke();

    //Grid Coordinates
    var w = width / 10;
    var h = height / 10;

    var highQuality = true;
    var player;
    var game;

    //Used for the Menu Screens
    var p1, e1, e2, e3, e4, boss, bossEnemy, portal, portalEnemy;

} //Global Variables

{
    //Key|Button stuff
    var clicked = false, hover = false;
    var keys = [];
    keyPressed = function () {
        keys[keyCode] = true;
    };
    keyReleased = function () {
        keys[keyCode] = false;
    };
    mouseClicked = function () {
        clicked = true;
    };
} //Keys/Mouse

{
    var Button = function(config) {
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.width = config.width || 100;
        this.height = config.height || 100;
        this.content = config.content || "Home";
        this.page = config.page || "home";
        this.level = config.level || 0;
        this.textSize = config.textSize || this.width/5;
    
        //Normal
        this.borderColor = config.borderColor || color(130, 135, 135, 100);
        this.backColor = config.backColor || color(10, 10, 10, 200);
        this.contentColor = config.contentColor || color(222, 222, 222);
        //Hover
        this.borderColorHover = config.borderColorHover || color(130, 135, 135, 50);
        this.backColorHover = config.bakColorHover || color(29, 29, 29, 200);
        this.contentColorHover = config.contentColorHover || color(222, 222, 222, 200);
    };
    
    //Draw the button
    Button.prototype.draw = function() {
        pushStyle();
        strokeWeight(2);
        if(this.isMouseInside()) {
            hover = true;
    
            if(clicked) {
                game.page = this.page;
                game.reset();
            }
    
            fill(this.backColorHover);
            stroke(this.borderColor);
            rect(this.x, this.y, this.width, this.height, 8);
        
            fill(this.contentColorHover);
            textSize(this.textSize);
            textAlign(CENTER, CENTER);
            text(this.content, this.x + this.width/2, this.y + this.height/2);
        }
        else {
            fill(this.backColor);
            stroke(this.borderColor);
            rect(this.x, this.y, this.width, this.height, 8);
        
            //fill(this.contentColor);
            fill(game.textColor);
            textSize(this.textSize);
            textAlign(CENTER, CENTER);
            text(this.content, this.x + this.width/2, this.y + this.height/2);
        }
        popStyle();
    };
    
    //Checks if the mouse it over the button
    Button.prototype.isMouseInside = function() {
        return  mouseX > this.x &&
                mouseX < this.x + this.width &&
                mouseY > this.y &&
                mouseY < this.y + this.height;
    };
    
    //Handles the hover animation
    Button.prototype.hover = function(){
        if(this.isMouseInside())
        {
            fill(this.backColorHover);
            rect(this.x-5, this.y-5, this.width + 10, this.height + 10, 8);
        }
    };
} //Buttons

{
    var Explosion = function(config){
        this.pos = config.pos || new PVector(width/2, height/2);
        this.w = config.w || 10;
        this.h = config.h || 10;
        this.rotation = random(360);
        this.rotationDelta = config.rotationDelta || random(-5, 5);
        this.acceleration = new PVector(random(-2, 2), random(-2, 2));
        this.timeToLive = 255;
        this.red = config.red || random(255);
        this.green = config.green || random(255);
        this.blue = config.blue || random(255);
    };
    
    Explosion.prototype.run = function() {
        this.update();
        this.display();
    };
    
    Explosion.prototype.update = function() {
        this.pos.add(this.acceleration);
        this.rotation += this.rotationDelta;
    };

    Explosion.prototype.display = function() {
        pushMatrix();
            translate(this.pos.x, this.pos.y);
            rotate(radians(this.rotation));
            noStroke();
            fill(color(this.red, this.green, this.blue, this.timeToLive));
            rect(-this.w / 2, -this.h / 2, this.w, this.h);
        popMatrix();    
    };

} //Explosion

{
    var Particle = function(config){
        this.pos = config.pos || new PVector(width/2, height/2);
        this.w = config.w || 10;
        this.h = config.h || 10;
        this.acceleration = config.acceleration || new PVector(random(-2, 2), random(1, 3));
        this.timeToLive = 255;
        this.backColor = config.backColor || color(0);
        this.red = red(this.backColor) || random(255);
        this.green = green(this.backColor) || random(255);
        this.blue = blue(this.backColor) || random(255);
    };
    
    Particle.prototype.update = function() {
        this.pos.add(this.acceleration);
    };

    Particle.prototype.display = function() {
        pushMatrix();
            translate(this.pos.x, this.pos.y);
            noStroke();
            fill(color(this.red, this.green, this.blue, this.timeToLive));
            ellipse(0, 0, this.w, this.h);
        popMatrix();    
    };

    Particle.prototype.run = function() {
        this.update();
        this.display();
    };

} //Particles

{
    var Missile = function (config) {
        this.pos = config.pos || new PVector(0, 0);
        this.acceleration = config.acceleration || new PVector(0, 3);
        this.w = config.w || 8;
        this.h = config.h || 12;
        this.backColor = config.backColor || color(100, 100, 100);
    };

    Missile.prototype.update = function () {
        this.pos.add(this.acceleration);
    };

    Missile.prototype.display = function () {
        fill(this.backColor);
        pushStyle();
        rectMode(CENTER);
        rect(this.pos.x, this.pos.y, this.w, this.h);
        popStyle();
    };

    Missile.prototype.collision = function (player) {
        //Check if killed player
        if (this.pos.x + this.w > player.pos.x &&
            this.pos.x < player.pos.x + player.w &&
            this.pos.y + this.h > player.pos.y &&
            this.pos.y < player.pos.y + player.h) {
            return true;
        }

        return false;
    };

} //Missiles

{
    //Block Object
    var Block = function(config) {
        this.pos = config.pos || new PVector(0, 0);
        this.w = config.w || 10;
        this.h = config.h || 10;
        this.backColor = game.colorTheme.colors[floor(random(1, game.colorTheme.colors.length))];
    };

    Block.prototype.display = function() {
        fill(this.backColor);
        stroke(255, 255, 255, 50);
        strokeWeight(1);
        rect(this.pos.x, this.pos.y, this.w, this.h);
    };

} //Blocks

{
    var Barrier = function(config) {
        this.pos = config.pos || new PVector(0, 0);
        this.hBlocks = config.hBlocks || 3;
        this.vBlocks = config.vBlocks || 2;
        this.blocks = [];
        this.blockWidth = config.blockWidth || w/this.hBlocks;
        this.blockHeight = config.blockHeight || h/this.vBlocks*0.75;
    };

    Barrier.prototype.init = function() {
        this.blocks = [];

        for(var v = 0; v < this.vBlocks; v++) {
            for(var h = 0; h < this.hBlocks; h++) {
                this.blocks.push(new Block({
                    pos: new PVector(this.pos.x + h * this.blockWidth, this.pos.y + v * this.blockHeight),
                    w: this.blockWidth,
                    h: this.blockHeight
                }));
            }
        }
    };

    Barrier.prototype.display = function() {
        for(var i = 0; i < this.blocks.length; i++) {
            var block = this.blocks[i];
            block.display();
        }
    };

} //Barrier

{
    //Player Object
    var Player = function (x, y, w, h) {
        this.startpos = new PVector(x, y);
        this.pos = new PVector(x, y);
        this.w = w;
        this.h = h;
        this.xs = 0;
        this.ys = 0;

        this.acceleration = 0.5;
        this.maxSpeed = 5;
        this.momentum = 0.5;

        this.showParticles = highQuality;
        this.particles = [];
        this.maxParticles = 10; //reduced from 20 to 10 for better performance

        this.fired = false;
        this.bulletsInit = 20;
        this.bullets = 15 || this.bulletsInit;
        this.bullet = {
            pos: new PVector(0, 0),
            w: 12,
            h: 15,
            dir: 0,
            speed: 10
        };
    };

    Player.prototype.runParticles = function() {        
        for(var i = 0; i < this.particles.length; i++) {
            var particle = this.particles[i];
            particle.run();

            particle.timeToLive-= 5;
            
            if(particle.pos.y > height) {
                particle.pos = new PVector(this.pos.x + this.w * 0.5, this.pos.y + this.h * 0.8);
                particle.timeToLive = 255;
            }
        }
    };

    Player.prototype.update = function () {
        if(this.showParticles) { //only show particles if high quality
            this.runParticles();
        }

        if (keys[RIGHT]) {
            this.xs = constrain(this.xs + this.acceleration, -this.maxSpeed, this.maxSpeed);
        }
        else if (keys[LEFT]) {
            this.xs = constrain(this.xs - this.acceleration, -this.maxSpeed, this.maxSpeed);
        }
        else {
            this.xs *= this.momentum;
        }

        this.pos.x = constrain(this.pos.x + this.xs, 0, 600 - this.w);
    };

    Player.prototype.display = function () {
        noStroke();

        if (this.fired) {                
            this.bullet.pos.y -= this.bullet.speed * this.bullet.dir;
            fill(game.colorTheme.colors[game.colorTheme.colors.length-1]);
            ellipse(this.bullet.pos.x, this.bullet.pos.y, this.bullet.w, this.bullet.h);
        }
        
        pushStyle();
            //fins
            fill(game.colorTheme.colors[1]);
            triangle(
                this.pos.x + this.w / 2, 
                this.pos.y + 5, 
                this.pos.x + this.w + 10, 
                this.pos.y + this.h, 
                this.pos.x - 10, 
                this.pos.y + this.h);
            
            stroke(game.colorTheme.colors[1]);

            strokeWeight(2);
            line(this.pos.x - 5, this.pos.y + this.h - 5, this.pos.x - 5, this.pos.y + this.h - 10);      
            line(this.pos.x + this.w + 5, this.pos.y + this.h - 5, this.pos.x + this.w + 5, this.pos.y + this.h - 10);
            
            //turret
            strokeWeight(4);
            line(this.pos.x + this.w / 2, this.pos.y, this.pos.x + this.w / 2, this.pos.y - 2);
            
            //body
            fill(game.colorTheme.colors[2]);
            noStroke(); 
            
            beginShape();
                vertex(this.pos.x + this.w / 2, this.pos.y);
                bezierVertex(this.pos.x + this.w, this.pos.y + this.h / 2, this.pos.x + this.w, this.pos.y + this.h, this.pos.x + this.w, this.pos.y + this.h);
                vertex(this.pos.x, this.pos.y + this.h);
                bezierVertex(this.pos.x, this.pos.y + this.h, this.pos.x, this.pos.y + this.h / 2, this.pos.x + this.w / 2, this.pos.y);
            endShape();
            
            //window
            fill(game.colorTheme.colors[1]);
            triangle(this.pos.x + this.w / 2, this.pos.y + 10, this.pos.x + this.w - 10, this.pos.y + this.h - 15, this.pos.x + 10, this.pos.y + this.h - 15);            
        popStyle();
    };

    Player.prototype.shoot = function () {
        //Check if already fired - can only fire one bullet at a time
        if (this.fired === false) {
            //If have bullets then fire
            if (this.bullets > 0) {
                if (keyPressed && keyCode === 68) { //D - shoot up
                    this.bullet.pos.x = this.pos.x + this.w / 2;
                    this.bullet.pos.y = this.pos.y + this.h / 3;
                    this.bullet.dir = 1;
                    this.fired = true;
                    keyCode = 0;
                }
            }
        }
        else {//Bullet was fired and in transit
            //Check if hit the spaceship
            if(this.fired) {
                for (var i = 0; i < game.spaceships.length; i++) { //Currently at most only 1 spaceship exists
                    var spaceship = game.spaceships[i];

                    if (this.bullet.pos.x + this.bullet.w > spaceship.pos.x - spaceship.w / 2 &&
                        this.bullet.pos.x < spaceship.pos.x + spaceship.w - spaceship.w / 2 &&
                        this.bullet.pos.y + this.bullet.h > spaceship.pos.y - spaceship.h / 2 &&
                        this.bullet.pos.y < spaceship.pos.y + spaceship.h - spaceship.h / 2) {
                        game.hitSpaceship = true;                       
                        game.addExplosion({
                            pos: spaceship.pos,
                            w: 40,
                            h: 40,
                            backColor: spaceship.backColor
                        });
                        game.spaceships.splice(i, 1); //remove spaceship                     
                        this.fired = false;
                        break;
                    }
                }
            }

            //Check if killed enemy
            if(this.fired) {         
                for (var i = 0; i < game.enemies.length; i++) {
                    var enemy = game.enemies[i];

                    if (this.bullet.pos.x + this.bullet.w > enemy.pos.x - enemy.w / 2 &&
                        this.bullet.pos.x < enemy.pos.x + enemy.w - enemy.w / 2 &&
                        this.bullet.pos.y + this.bullet.h > enemy.pos.y - enemy.h / 2 &&
                        this.bullet.pos.y < enemy.pos.y + enemy.h - enemy.h / 2) {
                        game.hitEnemy = true;
                        enemy.lives--;
                        if(highQuality) { //display explosion every time you hit the enemy
                            game.addExplosion(enemy);
                        }
                        else if(enemy.lives === 0) { //low quality
                            game.addExplosion(enemy); //display explosion only when destroyed the enemy
                        }
                        if(enemy.lives === 0) {
                            game.enemies.splice(i, 1); //remove enemy
                        }                        
                        this.fired = false;
                        break;
                    }
                }
            }

            //Check if killed Boss/Portal Enemy
            if(this.fired) {         
                for (var i = 0; i < game.dynamoEnemies.length; i++) {
                    var dynamoEnemy = game.dynamoEnemies[i];

                    if (this.bullet.pos.x + this.bullet.w > dynamoEnemy.pos.x - dynamoEnemy.w / 2 &&
                        this.bullet.pos.x < dynamoEnemy.pos.x + dynamoEnemy.w - dynamoEnemy.w / 2 &&
                        this.bullet.pos.y + this.bullet.h > dynamoEnemy.pos.y - dynamoEnemy.h / 2 &&
                        this.bullet.pos.y < dynamoEnemy.pos.y + dynamoEnemy.h - dynamoEnemy.h / 2) {
                        game.hitEnemy = true;
                        dynamoEnemy.lives--;
                        if(highQuality) { //display explosion every time you hit the enemy
                            game.addExplosion(dynamoEnemy);
                        }
                        else if(dynamoEnemy.lives === 0) { //low quality
                            game.addExplosion(dynamoEnemy); //display explosion only when destroyed the enemy
                        }
                        if(dynamoEnemy.lives === 0) {
                            game.dynamoEnemies.splice(i, 1); //remove Boss/Portal Enemy
                        }                        
                        this.fired = false;
                        break;
                    }
                }
            }

            //Check if hit barrier
            if(this.fired) {
                for (var i = 0; i < game.barriers.length; i++) {
                    var barrier = game.barriers[i];

                    for(var j = 0; j < barrier.blocks.length; j++) {
                        var block = barrier.blocks[j];

                        if (this.bullet.pos.x + this.bullet.w > block.pos.x &&
                            this.bullet.pos.x < block.pos.x + block.w &&
                            this.bullet.pos.y + this.bullet.h > block.pos.y &&
                            this.bullet.pos.y < block.pos.y + block.h) {
                                game.addExplosion(block); //display explosion
                                barrier.blocks.splice(j, 1);
                            this.fired = false;
                            break;
                        }
                    }
                }
            }

            if (this.fired && this.bullet.pos.y < 0) {
                this.fired = false;
            }
        }
    };

    Player.prototype.run = function () {
        this.update();
        this.shoot();
        this.display();
    };
} //Player

{
    var Portal = function(config) {
        this.pos = config.pos || new PVector();
        this.w = config.w || w;
        this.h = config.h || h;
        this.scaleDir = config.scaleDir || 1;
        this.scale = config.scale || 1;
        this.angle = config.angle || 0;
        this.rotate = config.rotate || 9;
        this.backColor = config.backColor || game.colorTheme.colors[4];
        this.outerColor = config.outerColor || game.colorTheme.colors[3];
        this.centerColor = config.centerColor || game.colorTheme.colors[2];
        this.coreColor = config.coreColor || game.colorTheme.colors[1];
    };

Portal.prototype.update = function() {
    this.angle += this.rotate;
};

Portal.prototype.display = function() {
    pushMatrix();
        translate(this.pos.x, this.pos.y);
        this.scale+= 0.01 * this.scaleDir;
        if(this.scale < 0.9 || this.scale > 1.1) {
            this.scaleDir*= -1;
        }
        scale(this.scale);
        pushMatrix();
        fill(this.backColor);
        ellipse(0, 0, this.w, this.h);
        rotate(radians(this.angle));
        fill(this.outerColor);
        ellipse(0, 0, this.w * 0.8, this.h * 0.7);
        popMatrix();
        pushMatrix();
        rotate(radians(-this.angle));
        fill(this.centerColor);
        ellipse(0, 0, this.w * 0.5, this.h * 0.6);
        popMatrix();
        rotate(radians(this.angle));
        fill(this.coreColor);
        ellipse(0, 0, this.w * 0.3, this.h * 0.25);
    popMatrix();
};

Portal.prototype.run = function() {
    this.update();
    this.display();
};

} //Portal

{
    var SpaceShip = function(config) {
        this.pos = config.pos || new PVector(0, 0);
        this.acceleration = config.acceleration || new PVector(0.75, 0);
        this.angle = config.angle || 0;
        this.rotate = config.rotate || 6;
        this.w = config.w || 50;
        this.h = config.h || 15;
        this.backColor = config.backColor || color(game.colorTheme.colors[1]);
        this.topColor = config.topColor || color(game.colorTheme.colors[2]);
        this.r = red(this.topColor);
        this.g = green(this.topColor);
        this.b = blue(this.topColor);
    };

    SpaceShip.prototype.update = function() {
        this.pos.add(this.acceleration);
    };

    SpaceShip.prototype.display = function() {
        pushMatrix();
            translate(this.pos.x, this.pos.y);
            noStroke();
            fill(this.r, this.g, this.b, 200);
            ellipse(0, this.h * 0.6, this.w / 2, this.h);
            fill(this.backColor);
            rect(-this.w / 2, this.h / 2, this.w, this.h, 10);
            pushStyle();
                noFill();
                stroke(this.r, this.g, this.b, 150);
                strokeWeight(1);
                fill(this.r, this.g, this.b, 150);
                noStroke();

                this.angle+= this.rotate;
                pushMatrix();
                    translate(0, this.h);
                    rotate(radians(-this.angle));
                    ellipse(0, 0, this.w * 0.2, this.h * 0.5); //middle window
                popMatrix();
                pushMatrix();
                    translate(-this.w * 0.3, this.h);
                    rotate(radians(this.angle));
                    ellipse(0, 0, this.w * 0.2, this.h * 0.5); //left window
                popMatrix();            
                pushMatrix();
                    translate(this.w * 0.3, this.h);
                    rotate(radians(this.angle));
                    ellipse(0, 0, this.w * 0.2, this.h * 0.5); //right window
                popMatrix();
            popStyle();
        popMatrix();
    };

    SpaceShip.prototype.run = function() {
        this.update();
        this.display();
    };

} //Spaceship

{
    var Enemy = function (config) {
        this.pos = config.pos || new PVector(0, 0);
        this.acceleration = config.acceleration || new PVector(0, 3);
        this.w = config.w || 30;
        this.h = config.h || 30;
        this.lives = config.lives || 1;
        this.backColor = config.backColor || game.colorTheme.colors[floor(random(1, game.colorTheme.colors.length))];
        this.missileColor = config.missileColor || game.colorTheme.colors[game.colorTheme.colors.length-2];
    };

    Enemy.prototype.move = function () {
        this.pos.add(this.acceleration);
    };

    Enemy.prototype.update = function () {
    };

    Enemy.prototype.shoot = function () {
        game.enemyMissiles.push(new Missile({
            pos: new PVector(this.pos.x, this.pos.y),
            backColor: this.missileColor
        }));
    };

    Enemy.prototype.display = function () {
    };

    Enemy.prototype.displayLives = function() {
        pushMatrix();
            translate(this.pos.x, this.pos.y);
            pushStyle();
            textAlign(CENTER, CENTER);
            textSize(18);
            fill(game.colorTheme.colors[0]);
            text(this.lives, 0, 0);
            popStyle();
        popMatrix();
    };

    Enemy.prototype.collision = function (player) {
        if (player.pos.x + player.w > this.pos.x &&
            player.pos.y + player.h > this.pos.y &&
            player.pos.x < this.pos.x + this.w &&
            player.pos.y < this.pos.y + this.h) {
            return true;
        }

        return false;
    };

    {
        var Enemy1 = function (config) {
            Enemy.call(this, config);
            this.name = "Enemy 1";
            this.state = config.state || true;
        };

        Enemy1.prototype = Object.create(Enemy.prototype);

        Enemy1.prototype.display = function () {
            //Enemy.prototype.display.call(this);

            fill(this.backColor);
            
            stroke(this.backColor);
            strokeWeight(3);
                
            line(this.pos.x - this.w * 0.55, this.pos.y, this.pos.x + this.w * 0.55, this.pos.y);
            line(this.pos.x, this.pos.y - this.h * 0.55, this.pos.x, this.pos.y + this.h * 0.5);
            
            if(this.state === true) {
                line(this.pos.x, this.pos.y, this.pos.x - this.w * 0.5, this.pos.y + this.h * 0.3);
                line(this.pos.x, this.pos.y, this.pos.x + this.w * 0.5, this.pos.y + this.h * 0.3);
            }
            else {
                line(this.pos.x, this.pos.y, this.pos.x - this.w * 0.5, this.pos.y - this.h * 0.3);
                line(this.pos.x, this.pos.y, this.pos.x + this.w * 0.5, this.pos.y - this.h * 0.3);
            }

            noStroke();
            ellipse(this.pos.x, this.pos.y, this.w, this.h);
            
            this.displayLives();
        };
        
        Enemy1.prototype.update = function() {
            if(frameCount % 30 === 0) {
                this.state = !this.state;
            }
        };
    } //Enemy 1

    {
        var Enemy2 = function (config) {
            Enemy.call(this, config);
            this.name = "Enemy 2";
            this.angle = config.angle || 0;
            this.rotate = config.rotate || 2;
            this.lives = config.lives || 2;
            this.scaleDir = config.scaleDir || 1;
            this.scale = config.scale || 1;
        };

        Enemy2.prototype = Object.create(Enemy.prototype);

        Enemy2.prototype.move = function () {
            Enemy.prototype.move.call(this);
        };

        Enemy2.prototype.update = function () {
            this.angle += this.rotate;
        };

        Enemy2.prototype.display = function () {
            //Enemy.prototype.display.call(this);
            fill(this.backColor);
            pushMatrix();
            translate(this.pos.x, this.pos.y);
            this.scale+= 0.02 * this.scaleDir;
            if(this.scale < 0.9 || this.scale > 1.1) {
                this.scaleDir*= -1;
            }
            scale(this.scale);
            pushStyle();
            rectMode(CENTER);
            rect(0, 0, this.w, this.h);
            rotate(radians(this.angle));
            rect(0, 0, this.w, this.h);
            popStyle();
            popMatrix();
            this.displayLives();
        };
    } //Enemy 2

    {
        var Enemy3 = function (config) {
            Enemy.call(this, config);
            this.name = "Enemy 3";
            this.angle = config.angle || 0;
            this.rotate = config.rotate || 2;
            this.lives = config.lives || 3;
        };

        Enemy3.prototype = Object.create(Enemy.prototype);

        Enemy3.prototype.move = function () {
            Enemy.prototype.move.call(this);
        };

        Enemy3.prototype.update = function () {
            this.angle += this.rotate;
        };

        Enemy3.prototype.display = function () {
            //Enemy.prototype.display.call(this);
            fill(this.backColor);
            pushMatrix();
            translate(this.pos.x, this.pos.y);
            rotate(radians(this.angle));
            pushStyle();
            rectMode(CENTER);
            rect(0, 0, this.w, this.h, 10);
            rotate(radians(this.angle));
            rect(0, 0, this.w, this.h, 10);
            popStyle();
            popMatrix();
            this.displayLives();
        };
    } //Enemy 3

    {
        var Enemy4 = function (config) {
            Enemy.call(this, config);
            this.name = "Enemy 4";
            this.angle = config.angle || 0;
            this.rotate = config.rotate || -2;
            this.lives = config.lives || 4;
        };

        Enemy4.prototype = Object.create(Enemy.prototype);

        Enemy4.prototype.move = function () {
            Enemy.prototype.move.call(this);
        };

        Enemy4.prototype.update = function () {
            this.angle += this.rotate;
        };

        Enemy4.prototype.display = function () {
            //Enemy.prototype.display.call(this);
            fill(this.backColor);
            pushMatrix();
            translate(this.pos.x, this.pos.y);
            rotate(radians(this.angle));
            pushStyle();
            rectMode(CENTER);
            rect(0, 0, this.w, this.h);
            rotate(radians(this.angle));
            rect(0, 0, this.w, this.h);
            popStyle();
            popMatrix();
            this.displayLives();
        };
    } //Enemy 4

    {
        var PortalEnemy = function (config) {
            Enemy.call(this, config);
            this.name = "Portal Enemy";
            this.force = config.force || new PVector(-this.acceleration.x * 0.02, 0);
            this.angle = config.angle || 0;
            this.rotate = config.rotate || 6;
            this.lives = config.lives || 2;
            this.missileFactor = config.missileFactor || 0.02;
        };

        PortalEnemy.prototype = Object.create(Enemy.prototype);

        PortalEnemy.prototype.move = function () {
        };

        PortalEnemy.prototype.update = function () {
            this.acceleration.add(this.force);
            this.pos.add(this.acceleration);
            this.angle += this.rotate;
        };

        PortalEnemy.prototype.display = function () {
            //Enemy.prototype.display.call(this);
            fill(this.backColor);
            pushMatrix();
            translate(this.pos.x, this.pos.y);
            rotate(radians(this.angle));
            pushStyle();
            rectMode(CENTER);
            rect(0, 0, this.w, this.h);
            rotate(radians(this.angle));
            rect(0, 0, this.w, this.h);
            popStyle();
            popMatrix();
            this.displayLives();
        };

        PortalEnemy.prototype.shoot = function() {
            if(random() < this.missileFactor && this.pos.y < height - h * 3) {
                game.enemyMissiles.push(new Missile({
                    pos: new PVector(this.pos.x, this.pos.y),
                    backColor: this.missileColor,
                    w: 8,
                    h: 8,
                    acceleration: new PVector(random(-4, 4), random() < 0.5 ? -2 : 2)
                }));
            }
        };

        PortalEnemy.prototype.run = function() {
            this.update();
            this.shoot();
            this.display();
        };

        //NEED TO CHECK THIS!!!!
        PortalEnemy.prototype.collision = function (player) {
            if (player.pos.x + player.w > this.pos.x - this.w / 2 &&
                player.pos.y + player.h > this.pos.y && //will never be this one
                player.pos.x < this.pos.x + this.w / 2 &&
                player.pos.y < this.pos.y + this.h / 2) {
                return true;
            }

            return false;
        };
    } //Portal Enemy

    {
        var Boss = function (config) {
            Enemy.call(this, config);
            this.name = "Boss";
            this.angle = config.angle || 0;
            this.rotate = config.rotate || 5;
            this.lives = config.lives || 30;
            this.scaleDir = config.scaleDir || 1;
            this.scale = config.scale || 1;
            this.centerColor = config.centerColor || color(200);
            this.centerRed = red(this.centerColor);
            this.centerGreen = green(this.centerColor);
            this.centerBlue = blue(this.centerColor);
        };

        Boss.prototype = Object.create(Enemy.prototype);

        Boss.prototype.move = function () {
            Enemy.prototype.move.call(this);
        };

        Boss.prototype.update = function () {
            this.angle += this.rotate;
        };

        Boss.prototype.display = function () {
            //Enemy.prototype.display.call(this);
            fill(this.backColor);
            pushMatrix();
            translate(this.pos.x, this.pos.y);
            this.scale+= 0.005 * this.scaleDir;
            if(this.scale < 0.95 || this.scale > 1.05) {
                this.scaleDir*= -1;
            }
            scale(this.scale);
            pushStyle();
            rectMode(CENTER);
            rotate(radians(-this.angle));
            rect(0, 0, this.w, this.h, 5);
            stroke(this.backColor);
            strokeWeight(1);
            var offset = 3;
            line(-this.w / 2 - offset, -this.h / 2 - offset, this.w / 2 + offset, this.h / 2 + offset);
            line(-this.w / 2 - offset, this.h / 2 + offset, this.w / 2 + offset, -this.h / 2 - offset);
            rotate(radians(this.angle*2));
            fill(this.backColor);
            noStroke();
            rect(0, 0, this.w, this.h, 5);
            stroke(this.backColor);
            strokeWeight(1);
            line(-this.w / 2 - offset, -this.h / 2 - offset, this.w / 2 + offset, this.h / 2 + offset);
            line(-this.w / 2 - offset, this.h / 2 + offset, this.w / 2 + offset, -this.h / 2 - offset);
            //Center
            noStroke();
            fill(this.centerRed, this.centerGreen, this.centerBlue, 50);
            ellipse(0, 0, this.w * 0.75, this.h * 0.75);
            popStyle();
            popMatrix();
            this.displayLives();
        };
    } //Boss

    {
        var BossEnemy = function(config) {
            Enemy.call(this, config);
            this.name = "Boss Enemy";
            this.force = config.force || new PVector(-this.acceleration.x * 0.02, 0);
            this.angle = config.angle || 0;
            this.rotate = config.rotate || 5;
            this.lives = config.lives || 2;
            this.missileFactor = config.missileFactor || 0.02;
            this.scaleDir = config.scaleDir || 1;
            this.scale = config.scale || 1;
            this.centerColor = config.centerColor || color(200);
            this.centerRed = red(this.centerColor);
            this.centerGreen = green(this.centerColor);
            this.centerBlue = blue(this.centerColor);
        };

        BossEnemy.prototype = Object.create(Enemy.prototype);

        BossEnemy.prototype.update = function () {
            this.acceleration.add(this.force);
            this.pos.add(this.acceleration);
            this.angle += this.rotate;
        };

        BossEnemy.prototype.display = function () {
            //Enemy.prototype.display.call(this);
            fill(this.backColor);
            pushMatrix();
            translate(this.pos.x, this.pos.y);
            this.scale+= 0.005 * this.scaleDir;
            if(this.scale < 0.95 || this.scale > 1.05) {
                this.scaleDir*= -1;
            }
            scale(this.scale);
            pushStyle();
            rectMode(CENTER);
            rotate(radians(-this.angle));
            rect(0, 0, this.w, this.h, 5);
            stroke(this.backColor);
            strokeWeight(1);
            var offset = 3;
            line(-this.w / 2 - offset, -this.h / 2 - offset, this.w / 2 + offset, this.h / 2 + offset);
            line(-this.w / 2 - offset, this.h / 2 + offset, this.w / 2 + offset, -this.h / 2 - offset);
            rotate(radians(this.angle*2));
            fill(this.backColor);
            noStroke();
            rect(0, 0, this.w, this.h, 5);
            stroke(this.backColor);
            strokeWeight(1);
            line(-this.w / 2 - offset, -this.h / 2 - offset, this.w / 2 + offset, this.h / 2 + offset);
            line(-this.w / 2 - offset, this.h / 2 + offset, this.w / 2 + offset, -this.h / 2 - offset);
            //Center
            noStroke();
            fill(this.centerRed, this.centerGreen, this.centerBlue, 50);
            ellipse(0, 0, this.w * 0.75, this.h * 0.75);
            popStyle();
            popMatrix();
            this.displayLives();
        };

        BossEnemy.prototype.shoot = function() {
            if(random() < this.missileFactor && this.pos.y < height - h * 3) {
                game.enemyMissiles.push(new Missile({
                    pos: new PVector(this.pos.x, this.pos.y),
                    backColor: this.missileColor,
                    w: 8,
                    h: 8,
                    acceleration: new PVector(random(-4, 4), random() < 0.5 ? -3 : 3)
                }));
            }
        };

        BossEnemy.prototype.run = function () {
            this.update();
            this.shoot();
            this.display();
        };

        //NEED TO CHECK THIS!!!!
        BossEnemy.prototype.collision = function (player) {
            if (player.pos.x + player.w > this.pos.x - this.w / 2 &&
                player.pos.y + player.h > this.pos.y && //will never be this one
                player.pos.x < this.pos.x + this.w / 2 &&
                player.pos.y < this.pos.y + this.h / 2) {
                return true;
            }

            return false;
        };
    } //Boss Enemy

} //Enemies

{
    //Game Object
    var Game = function (config) {
        this.page = "home";
        this.cols = config.cols || 10;
        this.rows = config.rows || 9;
        this.paused = false;
        this.pausedScreen = "";
        this.enemies = [];
        this.dynamoEnemies = [];
        this.enemyMissiles = [];
        this.barriers = [];
        this.explosions = [];
        this.spaceships = [];
        this.portals = [];
        this.spaceshipDelay = 750;
        this.spaceshipCounter = 0;
        this.headerHeight = h*0.85;
        this.score = 0;
        this.totalScore = 0;
        this.finalScore = 0;
        this.bonus = "";
        this.bonusPos = new PVector(width * 0.5, height * 0.3);
        this.bonusFade = 255;
        this.bonusRed = 0;
        this.bonusGreen = 0;
        this.bonusBlue = 0;
        // Bonus points for time it takes to complete each level
        this.levelDuration = 0;
        this.levelDurationTotal = 0;
        this.levelDurationBonus = 0;
        this.levelDurationReduction = 0;
        this.maxLives = 5;
        this.initialLives = config.initialLives || 3;
        this.lives = this.initialLives;
        this.explosionAmount = highQuality === true ? 20 : 10;
        this.hitEnemy = false;
        this.hitSpaceship = false;
        this.speed = config.speed || new PVector(0, 0);
        this.level = config.level || 0;
        this.levelComplete = config.levelComplete || false;
        this.gameOver = false;
        this.transition = false;
        this.levelCompleteImage = "";
        this.enemySpeedIncrease = config.enemySpeedIncrease || 0.0025;
        this.moveDown = false;
        this.levels = levels;
        this.colorThemes = colorThemes;
        this.colorTheme = config.colorTheme || this.colorThemes[0];
        this.colorThemeMenu = this.colorThemes[0].colors[0];
        this.levelCompleteTextColor = this.colorTheme.colors[0];
        this.homeButton = new Button ({
            x: 190,
            y: 320,
            content: "Home",
            page: "home"
        });
        this.backButton = new Button ({
            x: 250,
            y: 470,
            content: "Home",
            page: "home"
        });
        this.completeButton = new Button ({
            x: 250,
            y: 370,
            content: "Home",
            page: "home"
        });
        this.howButton = new Button({
            x: 190,
            y: 320,
            content: "How",
            page: "how"
        });
        this.themesButton = new Button({
            x: 70,
            y: 200,
            content: "Themes",
            page: "themes"
        });
        this.levelsButton = new Button({
            x: 190,
            y: 200,
            content: "Levels",
            page: "levels"
        });
        this.enemiesButton = new Button({
            x: 310,
            y: 200,
            content: "Enemies",
            page: "enemies"
        });
        this.scoresButton = new Button({
            x: 430,
            y: 200,
            content: "Scores",
            page: "scores"
        });
        this.startButton = new Button({
            x: 310,
            y: 320,
            content: "Start",
            page: "start"
        });
        this.playButton = new Button({
            x: 310,
            y: 320,
            content: "Play",
            page: "play"
        });
        this.replayButton = new Button({
            x: 310,
            y: 320,
            content: "Replay",
            page: "replay"
        });
        this.nextButton = new Button({
            x: 310,
            y: 320,
            content: "Next",
            page: "next"
        });
        this.highScores = [
            {
                user: "Could be you",
                score: 0
            },
            {
                user: "Could be you",
                score: 0
            },
            {
                user: "Could be you",
                score: 0
            },
            {
                user: "Could be you",
                score: 0
            },
            {
                user: "Could be you",
                score: 0
            },
            {
                user: "Could be you",
                score: 0
            },
            {
                user: "Could be you",
                score: 0
            },
            {
                user: "Could be you",
                score: 0
            },
            {
                user: "Could be you",
                score: 0
            },
            {
                user: "Could be you",
                score: 0
            }];

            this.setup();
    };

    Game.prototype.images = {
        backImage: function() {
            noStroke();
            for(var i = 0; i < width; i += 40) {
                for(var j = 0; j < height; j += 40) {
                    var c = floor(random(200, 255));
                    fill(c, c, c, 30);            
                    rect(i, j, 40, 40);
                }
            }

            return get(0, 0, width, height);
        }
    };

    //Add explosion for Player, Enemies and Blocks
    Game.prototype.addExplosion = function(config) {
        var r = red(config.backColor);
        var g = green(config.backColor);
        var b = blue(config.backColor);

        var w = config.w;
        var h = config.h;

        if(config.name === "Boss") {
            w = 40;
            h = 40;
        }

        for(var i = 0; i < 10; i++) { //changed from 20 t0 10 for better performance
            this.explosions.push(
                new Explosion({
                    pos: new PVector(config.pos.x, config.pos.y),
                    w: random(w*0.2, w*0.4),
                    h: random(h*0.2, h*0.4),
                    red: r,
                    green: g,
                    blue: b}));
        }
    };

    //Run the explosions
    Game.prototype.runExplosions = function() {
        for(var i = this.explosions.length - 1; i >= 0; i--) {
            var explosion = this.explosions[i];

            explosion.timeToLive-= 5;

            if(explosion.timeToLive === 0) {
                this.explosions.splice(i, 1);
            }
            else {
                explosion.run();
            }
        }
    };

    //Set barriers
    Game.prototype.setBarriers = function() {
        for(var i = 0; i < this.barriers.length; i++) {
            this.barriers[i].init();
        }    
    };

    //Run the spaceship
    Game.prototype.runSpaceship = function() {
        if(this.spaceships.length > 0) {
            var spaceship = this.spaceships[0]; //should only have one spaceship at a time
            spaceship.run();
            if(spaceship.pos.x - spaceship.w / 2 > width) {
                this.spaceships.splice(0, 1);
            }
        }
        else if(this.spaceshipCounter++ >= this.spaceshipDelay) {
            this.spaceshipCounter = 0;
            this.spaceships.push(
                new SpaceShip({
                    pos: new PVector(-100, h),
                    w: 50,
                    h: 15,
                    backColor: this.colorTheme.colors[1],
                    topColor: this.colorTheme.colors[2]
                })
            );
        }
    };

    //Check if left/right enemies reach edge and all enemies need to move down
    Game.prototype.checkMoveDown = function () {
        for (var i = 0; i < this.enemies.length; i++) {
            var enemy = this.enemies[i];

            if (enemy.pos.x - enemy.w / 2 < 0 || enemy.pos.x + enemy.w / 2 > width) {
                this.moveDown = true;
                break;
            }
        }
    };

    //Check if the level is complete (all enemies destroyed)
    Game.prototype.checkLevelComplete = function () {
        //Check if all enemies destroyed
        if (this.enemies.length === 0) {
            this.levelComplete = true;
            this.transition = true;
        }
    };

    //Progressively increase the enemy speed
    Game.prototype.updateEnemySpeed = function () {
        var increase = 1 + (this.level * this.enemySpeedIncrease);
        for (var i = 0; i < this.enemies.length; i++) {
            var enemy = this.enemies[i];
            enemy.acceleration.mult(increase);
        }
    };

    //Run missiles
    Game.prototype.runMissiles = function() {
        for(var i = this.enemyMissiles.length - 1; i >= 0; i--) {
            var missile = this.enemyMissiles[i];

            missile.update();
            missile.display();

            if(missile.collision(player)) {
                this.lives--;
                this.addExplosion({
                    pos: new PVector(player.pos.x + player.w / 2, player.pos.y + player.h / 2),
                    w: player.w,
                    h: player.h,
                    backColor: this.colorTheme.colors[2]
                }); //display explosion
                this.enemyMissiles.splice(0, 1);
            }
            else if(missile.pos.y - missile.h > height ||
                    missile.pos.y + missile.h < 0 ||
                    missile.pos.x + missile.w < 0 ||
                    missile.pos.x - missile.w > width) {
                this.enemyMissiles.splice(i, 1);
            }
            else { //Check if hit barrier
                for (var j = 0; j < this.barriers.length; j++) {
                    var barrier = this.barriers[j];
        
                    for(var k = 0; k < barrier.blocks.length; k++) {
                        var block = barrier.blocks[k];
        
                        if (missile.pos.x + missile.w > block.pos.x &&
                            missile.pos.x < block.pos.x + block.w &&
                            missile.pos.y + missile.h > block.pos.y &&
                            missile.pos.y < block.pos.y + block.h) {
                                this.addExplosion(block); //display explosion
                                barrier.blocks.splice(k, 1);
                                this.enemyMissiles.splice(i, 1);
                            break;
                        }
                    }
                }
            }

            if(this.lives <= 0) {
                this.transition = true;
                this.gameOver = true;
                break;
            }
        }
    };

    //Display the bonus received from destroying the spaceship
    Game.prototype.displayBonus = function() {
        pushStyle();
            noStroke();
            fill(this.bonusRed, this.bonusGreen, this.bonusBlue, this.bonusFade);
            textSize(40);
            textAlign(CENTER, TOP);

            if(this.bonusFade-- > 0) {
                if(this.bonus === "score") { //score
                    text("You scored an extra\n" + (5 * this.levels[this.level].enemyPoints) + " points!", this.bonusPos.x, this.bonusPos.y);
                }
                else if(this.bonus === "time") { //time
                    text("Your bonus time has\nbeen reduced by\n" + (5 * this.level) + " seconds!", this.bonusPos.x, this.bonusPos.y);
                }
                else if(this.bonus === "timeZero") { //time
                    text("Your bonus time has\nbeen reduced to\n0 seconds!", this.bonusPos.x, this.bonusPos.y);
                }
                else if(this.bonus === "life") { //life
                    text("You scored an\nextra life!", this.bonusPos.x, this.bonusPos.y);
                }
                else {
                    text("You already have a\nmaximum of " + this.maxLives + " lives!", this.bonusPos.x, this.bonusPos.y);
                }

                this.bonusPos.add(0, 0.2);
            }
            else {
                this.bonus = "";
                this.bonusPos = new PVector(width * 0.5, height * 0.3);
                this.bonusFade = 255;
            }
        popStyle();
    };

    //Displays the stats at the top of the screen
    Game.prototype.displayStats = function() {
        //Display Header
        fill(this.colorTheme.colors[this.colorTheme.colors.length-1]);
        rect(0, 0, width, this.headerHeight);
        
        pushStyle();
            //Display Points and Lives (on header)
            textSize(18);
            textAlign(CENTER, TOP);
            fill(this.colorTheme.colors[0]);

            text("LEVEL", 40, 5);
            text("LIVES", 120, 5);
            text("TIME", 200, 5);
            text("SCORE", 300, 5);
            text("BONUS", 400, 4);

            text(this.level, 40, 27);
            text(this.lives, 120, 27);
            text(floor(this.levelDuration/60), 200, 27);
            text((this.finalScore + this.score), 300, 27);
            text(constrain(floor((this.levels[this.level].enemyPoints * 0.5) * (this.levelDurationTotal - (floor(this.levelDuration / 60)))), 0, 1000000), 400, 27);

            textAlign(RIGHT, TOP);
            text("Theme", width-10, 5);
            text(this.themeName, width-10, 27);
        popStyle();
    };

    //Set the current theme
    Game.prototype.setTheme = function() {
        if(this.level === 0) { //Menu screens always use the first theme
            this.themeIndex = 0;
            this.levelCompleteTextColor = this.colorThemes[this.themeIndex].colors[this.colorTheme.colors.length-1];
        }
        else { //Game screens use a random theme
            this.themeIndex = floor(random(this.colorThemes.length));
        }
        
        this.colorTheme = this.colorThemes[this.themeIndex];
        this.themeName = this.colorTheme.name;
        this.backColor = this.colorTheme.colors[0];
        this.textColor = this.colorTheme.colors[this.colorTheme.colors.length-1];
    };

    //Set the game level
    Game.prototype.setGameLevel = function() {
        player = new Player(width / 2, height - 50, 40, 40);

        this.transition = false;
        this.bonus = "";

        this.bonusRed = red(this.textColor);
        this.bonusGreen = green(this.textColor);
        this.bonusBlue = blue(this.textColor);

        //How much the duration should reduce by if bonus awarded
        this.levelDurationReduction = 5 * this.level * 60;

        //Set cutoff for duration bonus
        this.levelDurationTotal = 40 + 20 * this.level;

        if(highQuality) { //particles only used if high quality
            player.particles = [];

            for(var i = 0; i < player.maxParticles; i++) {
                player.particles.push(
                    new Particle({ 
                        pos: new PVector(player.pos.x + player.w * 0.5, player.pos.y + player.h * 0.8),
                        w: random(player.w*0.1, player.w*0.3),
                        h: random(player.h*0.1, player.h*0.3),
                        backColor: this.colorTheme.colors[3]}));
            }
        }

        var grid = this.levels[this.level].grid;

        for (var row = 0; row < grid.length; row++) {
            for (var col = 0; col < this.cols; col++) {

                var pos = new PVector(col * w + w / 2, row * h + h / 2);
                var acceleration = new PVector(0.5, 0);

                if (grid[row][col] === "X") {
                    //empty space
                }
                else if (grid[row][col] === "Y") {
                    this.barriers.push(
                        new Barrier({
                            pos: new PVector(col * w, row * h)
                        })
                    );
                }
                else if (grid[row][col] === "1") {
                    this.enemies.push(
                        new Enemy1({
                            pos: pos,
                            acceleration: acceleration
                        })
                    );
                }
                else if (grid[row][col] === "2") {
                    this.enemies.push(
                        new Enemy2({
                            pos: pos,
                            acceleration: acceleration
                        })
                    );
                }
                else if (grid[row][col] === "3") {
                    this.enemies.push(
                        new Enemy3({
                            pos: pos,
                            acceleration: acceleration
                        })
                    );
                }
                else if (grid[row][col] === "4") {
                    this.enemies.push(
                        new Enemy4({
                            pos: pos,
                            acceleration: acceleration
                        })
                    );
                }
                else if (grid[row][col] === "P") {
                    this.portals.push(
                        new Portal({
                            pos: pos
                        })
                    );
                }
                else if (grid[row][col] === "B") {
                    this.enemies.push(
                        new Boss({
                            pos: pos,
                            acceleration: acceleration,
                            w: 100,
                            h: 100,
                            backColor: this.colorTheme.colors[4],
                            centerColor: this.colorTheme.colors[0],
                            lives: this.levels[this.level].bossLives
                        })
                    );
                }
            }
        }

        this.setBarriers();
    };

    //Initialize the game
    Game.prototype.init = function () {
        this.setTheme();

        this.enemies = [];
        this.enemyMissiles = [];
        this.dynamoEnemies = [];
        this.barriers = [];
        this.explosions = [];
        this.spaceships = [];
        this.portals = [];
        this.portalEnemies = [];

        this.levelDuration = 0;
        this.spaceshipCounter = 0;
        this.levelComplete = false;

        this.lives = this.initialLives;

        if(this.level > 0) {
            this.setGameLevel();
        }
    };

    //Called from the Button to reset initial values
    Game.prototype.reset = function() {
        switch(this.page) {
            case "start":
                this.finalScore = 0;
                this.totalScore = 0;
                this.level = 1;
                this.init();
            break;
            case "play":
                break;
            case "replay":
                this.init();
                break;
            case "next":
                this.init();
                this.page = "play";
                break;
            default:
                this.level = 0;
                this.setTheme();
                break;
        }
    };

    //Run the actual game levels
    Game.prototype.run = function () {
        if(this.paused) {
            noStroke();
            image(this.pausedScreen, 0, 0, width, height);
            rectMode(CENTER);
            fill(this.backColor);
            rect(width/2, height/2, 300, 150, 10);
            textAlign(CENTER, CENTER);
            textSize(40);
            fill(this.textColor);
            text("PAUSED", width/2, height/2);
            return;
        }

        background(this.backColor);

        //If game over or level complete; and in transition
        if((this.gameOver || this.levelComplete) && this.transition) {
            image(this.images.backImage, 0, 0, width, height);
            this.displayStats();
            player.display();
            this.runExplosions();

            if(this.explosions.length === 0) {
                this.transition = false;
                this.levelCompleteImage = get();
                this.levelCompleteTextColor = this.colorTheme.colors[4]; //this.textColor;
            }
        }
        //Else if game over and transition completed
        else if(this.gameOver && this.transition === false) {
            this.lives = this.initialLives;
            this.totalScore = this.finalScore + this.score;
            this.score = 0;
            this.page = "gameover";
            this.gameOver = false;
        }
        //Else if level complete and transition completed
        else if(this.levelComplete && this.transition === false) {
            if(this.level < this.levels.length - 1) {
                this.page = "next";
            }
            else {
                this.page = "gamecomplete";
            }

            this.finalScore += this.score;
            this.score = 0;

            this.levelDurationBonus = constrain(floor((this.levels[this.level].enemyPoints * 0.5) * (this.levelDurationTotal - (floor(this.levelDuration / 60)))), 0, 1000000);

            this.finalScore += this.levelDurationBonus;
            
            this.level++;
            if (this.level === this.levels.length) {
                this.level = 1; //Or should this be set back to 0?
            }
            this.init();
        }
        //Else run through everything...
        else {
            image(this.images.backImage, 0, 0, width, height);
        
            this.displayStats();

            //Display lives (faded enemy ships at bottom of screen)
            for (var n = 0; n < this.lives; n++) {
                fill(0, 0, 0, 50);
                rect(n * 50, height - 50, 40, 40);
            }

            //Display Portals
            for(var i = 0; i < this.portals.length; i++) {
                var portal = this.portals[i];

                portal.run();

                //Portal Enemies
                if(random() < 0.003) {
                    this.dynamoEnemies.push(
                        new PortalEnemy({
                            pos: new PVector(portal.pos.x, portal.pos.y),
                            acceleration: new PVector(random(-3, 3), 3),
                            w: 30,
                            h: 30
                        })
                    );
                }
            }

            //Display barriers
            for(var i = 0; i < this.barriers.length; i++) {
                this.barriers[i].display();
            } 

            player.run();

            this.runMissiles();
            
            this.checkMoveDown();

            for(var i = this.dynamoEnemies.length - 1; i >= 0; i--) {
                var dynamoEnemy = this.dynamoEnemies[i];

                dynamoEnemy.run();

                if( dynamoEnemy.pos.x + dynamoEnemy.w * 2 < 0 || 
                    dynamoEnemy.pos.x - dynamoEnemy.w > width ||
                    dynamoEnemy.pos.y + dynamoEnemy.h * 2 < 0 ||
                    dynamoEnemy.pos.y - dynamoEnemy.h > height) {
                        this.dynamoEnemies.splice(i, 1);
                    }
                else if(dynamoEnemy.collision(player)) {
                    this.addExplosion({
                        pos: dynamoEnemy.pos,
                        w: 40,
                        h: 40,
                        backColor: dynamoEnemy.missileColor
                    });
                    this.dynamoEnemies.splice(i, 1);
                    this.lives--;
                    if(this.lives <= 0) {
                        this.transition = true;
                        this.gameOver = true;
                        return;
                    }
                }
            }

            for (var i = 0; i < this.enemies.length; i++) {
                var enemy = this.enemies[i];

                if (this.moveDown) {
                    enemy.pos.add(0, h / 4);
                    enemy.acceleration.mult(-1, 1);
                }
                
                enemy.move();
                enemy.update();

                if (enemy.collision(player)) {
                    this.transition = true;
                    this.gameOver = true;
                    return;
                }

                if (random() < 0.001) {
                    enemy.shoot();
                }

                //Boss Enemy
                if(enemy.name === "Boss" && random() < 0.01) {
                    this.dynamoEnemies.push(
                        new BossEnemy({
                            pos: new PVector(enemy.pos.x, enemy.pos.y),
                            acceleration: new PVector(random(-3, 3), 3),
                            w: 40,
                            h: 40,
                            backColor: this.colorTheme.colors[4],
                            centerColor: this.colorTheme.colors[0]
                        })
                    );
                }

                enemy.display();
            }

            this.runSpaceship();
            this.runExplosions();

            if(this.hitSpaceship) {
                var r = random();

                if(r < 0.33) { //give bonus points
                    this.score+= 5 * this.levels[this.level].enemyPoints;
                    this.bonus = "score";
                }
                else if(r < 0.66) { //give back n seconds of bonus time
                    this.levelDuration = constrain(this.levelDuration - this.levelDurationReduction, 0, 1000000);
                    if(this.levelDuration === 0) {
                        this.bonus = "timeZero";
                    }
                    else {
                        this.bonus = "time";
                    }
                }
                else { //give extra life (up to max lives)
                    if(this.lives < this.maxLives) {
                        this.lives++;
                        this.bonus = "life";
                    }
                    else {
                        this.bonus = "max";
                    }
                }
            
                this.hitSpaceship = false;
            }

            if(this.hitEnemy) {
                this.score += this.levels[this.level].enemyPoints;
                this.updateEnemySpeed();
                this.hitEnemy = false;
            }

            this.checkLevelComplete();

            if(this.bonus !== "") {
                this.displayBonus();
            }

            this.moveDown = false;
            this.levelDuration++;
        }
    };

    //Play (runs the appropriate level)
    Game.prototype.play = function() {
        if(this.level > 0 && this.level < this.levels.length) {
            this.run();
        }
        else if(this.level === this.levels.length) {
            this.gameComplete();
        }
    };

    //Home Screen
    Game.prototype.homeScreen = function() {
        image(this.images.backImage, 0, 0, width, height);
        fill(this.textColor);
        textSize(60);
        textAlign(CENTER);
        text("shape invaders", width/2, 100);

        player.pos = new PVector(width/2 - player.w / 2, height*0.9);
        player.display();

        e1.pos = new PVector(width*0.2, height*0.26);
        e1.update();
        e1.display();

        e2.pos = new PVector(width*0.4, height*0.26);
        e2.update();
        e2.display();

        e3.pos = new PVector(width*0.6, height*0.26);
        e3.update();
        e3.display();

        e4.pos = new PVector(width*0.8, height*0.26);
        e4.update();
        e4.display();

        portal.pos = new PVector(width*0.15, height*0.85);
        portal.update();
        portal.display();

        boss.pos = new PVector(width*0.85, height*0.85);
        boss.update();
        boss.display();

        this.themesButton.draw();
        this.enemiesButton.draw();
        this.levelsButton.draw();
        this.scoresButton.draw();
        this.howButton.draw();
        this.startButton.draw();
    };

    //Themes Screen
    Game.prototype.themesScreen = function() {
        image(this.images.backImage, 0, 0, width, height);
        fill(this.textColor);
        textSize(40);
        textAlign(CENTER, TOP);
        text("Themes", width/2, 50);

        e2.pos = new PVector(width*0.25, height*0.87);
        e2.update();
        e2.display();

        e4.pos = new PVector(width*0.75, height*0.87);
        e4.update();
        e4.display();

        fill(this.textColor);
        textSize(18);

        text("There are " + (this.colorThemes.length) + " color themes.\n\nEach game scene will randomly\nchoose one of these themes.", width*0.5, height*0.2);

        textSize(40);
        text("Create your own themes", width*0.5, height*0.37);

        textSize(18);
        text("You can create your own themes\nat the top of the code.\n\nNote that the first theme is used for all\nthe menu screens.", width*0.5, height*0.47);
        
        this.backButton.draw();
    };

    //Levels Screen
    Game.prototype.levelsScreen = function() {
        image(this.images.backImage, 0, 0, width, height);
        fill(this.textColor);
        textSize(40);
        textAlign(CENTER, TOP);
        text("Levels", width/2, 50);

        e2.pos = new PVector(width*0.25, height*0.87);
        e2.update();
        e2.display();

        e4.pos = new PVector(width*0.75, height*0.87);
        e4.update();
        e4.display();

        fill(this.textColor);
        textSize(18);

        text("There are " + (this.levels.length - 1) + " levels, including the BOSS level.\n\nEach level gets progressively harder.", width*0.5, height*0.2);

        textSize(40);
        text("Create your own levels", width*0.5, height*0.37);

        textSize(18);
        text("You can create your own levels\nat the top of the code.", width*0.5, height*0.47);

        text("X = blank space\nY = barrier\n1,2,3,4 = enemies\nP = portal\nB = boss", width*0.5, height*0.57);
        
        this.backButton.draw();
    };

    //Enemies Screen
    Game.prototype.enemiesScreen = function() {
        image(this.images.backImage, 0, 0, width, height);
        fill(this.textColor);
        textSize(40);
        textAlign(CENTER, TOP);
        text("Enemies", width/2, 50);

        stroke(200, 200, 200, 50);
        //vertical grid line
        line(240, 117, 240, 410);
        //Portal arrow
        line(380, 160, 425, 160);
        line(415, 155, 425, 160);
        line(415, 165, 425, 160);
        //Boss arrow
        line(380, 300, 425, 300);
        line(415, 295, 425, 300);
        line(415, 305, 425, 300);

        textSize(18);
        textAlign(LEFT, CENTER);
        noStroke();

        text(e1.name, 120, 160);
        text(e2.name, 120, 230);
        text(e3.name, 120, 300);
        text(e4.name, 120, 370);
        text("Portal", 290, 210);
        text(portalEnemy.name, 410, 210);
        text(boss.name, 300, 365);
        text(bossEnemy.name, 420, 365);

        e1.pos = new PVector(80, 160);
        e1.update();
        e1.display();

        e2.pos = new PVector(80, 230);
        e2.update();
        e2.display();

        e3.pos = new PVector(80, 300);
        e3.update();
        e3.display();

        e4.pos = new PVector(80, 370);
        e4.update();
        e4.display();

        portal.pos = new PVector(320, 160);
        portal.update();
        portal.display();

        portalEnemy.pos = new PVector(470, 160);
        portalEnemy.update();
        portalEnemy.display();

        boss.pos = new PVector(320, 300);
        boss.update();
        boss.display();

        bossEnemy.pos = new PVector(470, 300);
        bossEnemy.update();
        bossEnemy.display();

        this.backButton.draw();
    };

    //High Scores Screen
    Game.prototype.scoresScreen = function() {
        image(this.images.backImage, 0, 0, width, height);
        fill(this.textColor);
        textSize(40);
        textAlign(CENTER, TOP);
        text("High Scores", width/2, 50);
        textSize(16);

        var hs = "";
        for(var i = 0; i < this.highScores.length; i++) {
            hs+= (i+1) + ". " + this.highScores[i].user + ": " + this.highScores[i].score + "\n\n";
        }

        text(hs, width/2, 110);

        e2.pos = new PVector(width*0.25, height*0.87);
        e2.update();
        e2.display();

        e4.pos = new PVector(width*0.75, height*0.87);
        e4.update();
        e4.display();

        this.backButton.draw();
    };

    //How Screen
    Game.prototype.howScreen = function() {
        image(this.images.backImage, 0, 0, width, height);
        fill(this.textColor);
        textSize(40);
        textAlign(CENTER, TOP);
        text("How", width/2, 50);
        textSize(16);
        text("Arrow keys to move left/right, D to shoot, P to pause.\n\nYou can only shoot one bullet at a time so aim carefully.\n\nYou need to destroy all the enemies\nto progress to the next level.\n\nYou start with " + this.initialLives + " lives for each level.\n\nDestroying the spaceship that randomly flies across the\ntop of the screen will give you bonus points,\nreduced bonus duration, or an extra life (maximum of " + this.maxLives + ").\n\nYou will get bonus points if you finish the level quicker.\n\nTry to kill the boss as quickly as you can\n to stop random boss enemies appearing.", width/2, 120);
        
        e2.pos = new PVector(width*0.25, height*0.87);
        e2.update();
        e2.display();

        e4.pos = new PVector(width*0.75, height*0.87);
        e4.update();
        e4.display();
        
        this.backButton.draw();
    };

    //Game Complete Screen
    Game.prototype.gameCompleteScreen = function() {
        image(this.levelCompleteImage, 0, 0, width, height);
        this.textColor = this.levelCompleteTextColor;
        textSize(40);
        textAlign(CENTER, TOP);
        fill(this.textColor);
        text("GAME COMPLETE", 300, 100);
        text("Total Score: " + this.finalScore, 300, 150);
        textSize(16);
        text("Congratulations, you have destroyed " + boss.name + ".\n\nPlanet earth is now safe\nbecause you are so awesome.\n\nHowever, if you wish to go back in time,\nclick on the Home button to play again.", 300, 210);
        this.completeButton.draw();
    };

    //Next Screen
    Game.prototype.nextScreen = function() {
        if(this.level === 1) {
            image(this.images.backImage, 0, 0, width, height);
            textSize(40);
            textAlign(CENTER, TOP);
            fill(this.textColor);
            text("YOUR MISSION", 300, 130);
            this.homeButton.draw();
            this.playButton.draw();
        }
        else if(this.level <= this.levels.length - 1) {
            image(this.levelCompleteImage, 0, 0, width, height);
            this.textColor = this.levelCompleteTextColor;
            textSize(40);
            textAlign(CENTER, TOP);
            fill(this.textColor);
            text("LEVEL COMPLETE", 300, 130);
            //Bonus points awarded if duration is less than n seconds
            textSize(24);
            text("You received " + this.levelDurationBonus + " bonus points!", 300, 250);
            //End of bonus points section
            this.homeButton.draw();
            this.nextButton.draw();
        }
        fill(this.textColor);
        textSize(18);
        text(this.levels[this.level].story, 300, 180);
    };

    //Game Over Screen
    Game.prototype.gameoverScreen = function() {
        //image(this.images.backImage, 0, 0, width, height);
        image(this.levelCompleteImage, 0, 0, width, height);
        this.textColor = this.levelCompleteTextColor;
        textSize(40);
        textAlign(CENTER, TOP);
        fill(this.textColor);
        text("GAME OVER", 300, 130);
        textSize(30);
        text("Score: " + (this.totalScore + this.score), 300, 180);
        this.homeButton.draw();
        this.replayButton.draw();
    };

    //Initial game setup
    Game.prototype.setup = function() {
        {
            for(var i in this.images){
                if(typeof this.images[i] !== 'object'){
                    background(0, 0, 0, 0);
                    noStroke();
                    this.images[i] = this.images[i]();
                }
            }
        } //Preload Images
        
        {
            p1 = new Player(10, this.headerHeight/2 - 10, 30, 30);

            e1 = new Enemy1({
                pos: new PVector(0, 0),
                acceleration: new PVector(0, 0),
                backColor: this.colorThemes[0].colors[1],
                missileColor: color(200)
            });
        
            e2 = new Enemy2({
                pos: new PVector(0, 0),
                acceleration: new PVector(0, 0),
                backColor: this.colorThemes[0].colors[4],
                missileColor: color(0)
            });
        
            e3 = new Enemy3({
                pos: new PVector(0, 0),
                acceleration: new PVector(0, 0),
                backColor: this.colorThemes[0].colors[3],
                missileColor: color(0)
            });
        
            e4 = new Enemy4({
                pos: new PVector(0, 0),
                acceleration: new PVector(0, 0),
                backColor: this.colorThemes[0].colors[3],
                missileColor: color(0)
            });
        
            portal = new Portal({
                pos: new PVector(0, 0),
                backColor: this.colorThemes[0].colors[4],
                outerColor: this.colorThemes[0].colors[3],
                centerColor: this.colorThemes[0].colors[2],
                coreColor: this.colorThemes[0].colors[1]
            });

            portalEnemy = new PortalEnemy({
                pos: new PVector(0, 0),
                w: 30,
                h: 30,
                backColor: this.colorThemes[0].colors[4],
                missileColor: color(0)
            });

            boss = new Boss({
                pos: new PVector(0, 0),
                acceleration: new PVector(0, 0),
                w: 70,
                h: 70,
                backColor: this.colorThemes[0].colors[2],
                missileColor: color(0)
            });

            bossEnemy = new BossEnemy({
                pos: new PVector(0, 0),
                w: 40,
                h: 40,
                backColor: this.colorThemes[0].colors[4],
                centerColor: this.colorThemes[0].colors[0],
                missileColor: color(0)
            });
        
        } //Menu Assets
      
        this.highScores.sort(function(a, b) {
            return b.score - a.score;
        })
        
        this.init();
        
        player = new Player(width / 2, height - 50, 40, 40);
    };

    Game.prototype.checkPaused = function() {
        if (keyPressed && keyCode === 80) { //P - Pause
            if(this.page === "play" || this.page === "replay") {
                this.paused = !this.paused;
                this.pausedScreen = get();
            }
            keyCode = 0;
        }
    };

} //Game

game = new Game({});

draw = function () {
    game.checkPaused();

    background(game.backColor);

    switch(game.page) {
        case "home":
            game.homeScreen();
            break;
        case "how":
            game.howScreen();
            break;
        case "themes":
            game.themesScreen();
            break;
        case "levels":
            game.levelsScreen();
            break;
        case "enemies":
            game.enemiesScreen();
            break;
        case "scores":
            game.scoresScreen();
            break;
        case "play":
        case "replay":
            game.play();
            break;
        case "start":
        case "next":
            game.nextScreen();
            break;
        case "gamecomplete":
            game.gameCompleteScreen();
            break;
        case "gameover":
            game.gameoverScreen();
            break;
    }

    cursor(hover ? 'pointer' : 'default');
    clicked = false;
    hover = false;
};
    
  }
}

var canvas = document.getElementById("canvas"); 
var processingInstance = new Processing(canvas, sketchProc);