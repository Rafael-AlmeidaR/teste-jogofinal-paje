class PowerUps
{   constructor()
    {   this.list = [];

        this.spawnChance = 0.5;
        this.spawnCount = 0;
        this.spawnTime = 15;

        this.availablePowerUps = [SpeedBoost, StrengthBoost, MedKit];
    }

    update()
    {   for (let i = 0; i < this.list.length; i++)
        {   if (this.list[i].collide(player))
            {   this.list[i].effect();
                this.list.splice(i, 1);
                i--;
            }
        }

        this.spawnCount++;
        if (this.spawnCount >= this.spawnTime * FPS)
        {   if (Math.random() <= this.spawnChance)
            {   this.generatePowerUp();
            }
            this.spawnCount = 0;
        }

    }

    generatePowerUp()
    {   let randomPlataformIndex = Math.trunc(Math.random() * plataforms.list.length);
        let plataform = plataforms.list[randomPlataformIndex];

        let randomPowerUpIndex = Math.trunc(Math.random() * this.availablePowerUps.length);

        let positionSpawn =
        {   x:
            plataform.x + (Math.random() * plataform.width),
y:
            plataform.y - canvas.height * 0.05
        };

        let powerUp = new this.availablePowerUps[randomPowerUpIndex](positionSpawn.x, positionSpawn.y);
        this.list.push(powerUp);
    }

    draw()
    {   for (let i = 0; i < this.list.length; i++)
        {   this.list[i].draw();
        }
    }
}


class PowerUp extends Entity
{   constructor(x, y, image)
    {   super(x, y, canvas.height * 0.05, canvas.height * 0.05, image, 1,);
    }
}

// ===========================================================================================
class SpeedBoost extends PowerUp
{   constructor(x, y)
    {   super(x, y, "coffee.png");
    }

    effect()
    {   player.speedSettings.counter = player.speedSettings.time;
    }
}

class StrengthBoost extends PowerUp
{   constructor(x, y)
    {   super(x, y, "pepper.png");
    }

    effect()
    {   player.strengthSettings.counter = player.strengthSettings.time;
    }
}

class MedKit extends PowerUp
{   constructor(x, y)
    {   super(x, y, "chocolate.png");
    }

    effect()
    {   dave.life.actual = Math.min(dave.life.actual + dave.life.max * 0.25, dave.life.max);
    }
}