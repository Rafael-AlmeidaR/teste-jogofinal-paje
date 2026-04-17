class Entity
{   constructor(x, y, width, height, image, direction, life = null)
    {   this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.direction = direction;
        this.life =
        {   max:
            life,
actual:
            life
        };

        if (image)
        {   this.image = new Image();
            this.image.src = "./imgs/" + image;
        }
    }

    draw()
    {   if (this.image)
        {   context.save();
            context.translate(this.x + this.width / 2, 0);
            context.scale(this.direction, 1);
            context.drawImage(this.image, -this.width / 2, this.y, this.width, this.height);
            context.restore();
        }

        if (this.life.max !== null)
        {   context.fillStyle = "red";
            context.fillRect(this.x, this.y - 2 * (canvas.height * 0.01), this.width, canvas.height * 0.01);

            let lifePercentual = this.life.actual / this.life.max;
            context.fillStyle = "green";
            context.fillRect(this.x, this.y - 2 * (canvas.height * 0.01), this.width * (lifePercentual), canvas.height * 0.01);
        }
    }

    collide(entity)
    {   return (entity.x + entity.width >= this.x &&
                entity.x <= this.x + this.width &&
                this.y + this.height >= entity.y &&
                this.y <= entity.y + entity.height);
    }
}