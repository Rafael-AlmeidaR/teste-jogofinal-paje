class Time
{   constructor()
    {   this.states = ["day", "night"];
        this.statesConfigMultipliers = [
        {   zombies: {
                damage: 0.9,
                baseVelocity: 0.9
            }
        },
        {   zombies: {
                damage: 1.5,
                baseVelocity: 1.7
            },
        }
        ];
        this.state = 0;

        this.count = 0;
        this.stateLimits = [45 * FPS, 15 * FPS];

        this.backgrounds = [
                               new Image(),
                               new Image()
                           ];

        this.backgrounds[0].src = "./imgs/day.webp";
        this.backgrounds[1].src = "./imgs/night.png";


        this.applyChanges();
    }

    update()
    {   this.count++;

        if (this.count >= this.stateLimits[this.state])
        {   this.changeState();
            this.count = 0;
        }
    }

    changeState()
    {   this.unapplyChanges();
        this.state = (this.state + 1) % this.states.length;
        this.applyChanges();
    }

    applyChanges()
    {   for (let i = 0; i < graves.enemies.length; i++)
        {   graves.enemies[i].damage *= this.statesConfigMultipliers[this.state].zombies.damage;
            graves.enemies[i].baseVelocity *= this.statesConfigMultipliers[this.state].zombies.baseVelocity;
        }
    }

    unapplyChanges()
    {   for (let i = 0; i < graves.enemies.length; i++)
        {   graves.enemies[i].damage /= this.statesConfigMultipliers[this.state].zombies.damage;
            graves.enemies[i].baseVelocity /= this.statesConfigMultipliers[this.state].zombies.baseVelocity;
        }

    }

    draw()
    {   context.drawImage(this.backgrounds[this.state], 0, 0, canvas.width, canvas.height);
    }

}