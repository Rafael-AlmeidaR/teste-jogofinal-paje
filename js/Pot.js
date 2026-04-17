class Pots
{   constructor()
    {   this.list = [
                        new Pot(canvas.width * 0.25, canvas.height * 0.23, -1),
                        new Pot(canvas.width * 0.75, canvas.height * 0.23, 1),
                        new Pot(canvas.width * 0.93, canvas.height * 0.49, -1),
                        new Pot(canvas.width * 0.07, canvas.height * 0.49, 1),
                        new Pot(canvas.width * 0.3, canvas.height * 0.97, -1),
                        new Pot(canvas.width * 0.7, canvas.height * 0.97, 1),
                 ];
    }

    update()
    {   for (let i = 0; i < this.list.length; i++)
        {   this.list[i].update();
        }
    }

    draw()
    {   for (let i = 0; i < this.list.length; i++)
        {   this.list[i].draw();
        }
    }
}

class Pot extends Entity
{   constructor(x, y, direction)
    {   super(x, y, canvas.width * 0.04, canvas.height * 0.045, "pot.png", direction);
        this.radius = canvas.height * 0.135;
        this.plant = null;
        this.spawnnablePlants = [CherryPlant, CabbagePlant, WallNutPlant, SunflowerPlant, CarnivorousPlant];
    }
    proximity()
    {   let playerCenter = { x: player.x + player.width / 2, y: player.y + player.height };
        return Math.hypot(this.x - playerCenter.x, this.y - playerCenter.y) < this.radius;
    }

    update()
    {   if (this.plant)
        {   this.plant.update();
            if (this.plant.life.actual <= 0)
            {   this.plant = null;
            }
        }
        else
        {   if (this.proximity())
            {   this.spawn();
            }
        }
    }

    spawn()
    {   let spawnKeys = [keys[49], keys[50], keys[51], keys[52], keys[53]];
        let spawnKey = spawnKeys.indexOf(true);
        if (spawnKey !== -1)
        {   let checkPlant = new this.spawnnablePlants[spawnKey](this.x - this.width / 2, this.y - this.height * 1.8, this.width, this.height * 1.5, this.direction);
            if (player.suns >= checkPlant.price)
            {   player.suns -= checkPlant.price;
                this.plant = checkPlant;
                sounds.plant.play();
            }
        }
    }

    draw()
    {

        if (this.plant)
        {   this.plant.draw();
        }
        context.drawImage(this.image, this.x - this.width / 2, this.y - this.height / 2, this.width, this.height)
    }
}