class Plataforms
{   constructor()
    {   this.list = [
                        new Plataform(-canvas.width * 0.05, canvas.height * 0.98, canvas.width * 1.1, canvas.height * 0.1, "plataform.png"),

                        new Plataform(-canvas.width * 0.1, canvas.height * 0.75, canvas.width * 0.45, canvas.height * 0.1, "plataform.png"),
                        new Plataform(canvas.width * 0.65, canvas.height * 0.75, canvas.width * 0.45, canvas.height * 0.1, "plataform.png"),

                        new Plataform(canvas.width * 0.3, canvas.height * 0.49, canvas.width * 0.4, canvas.height * 0.1, "plataform.png"),
                        new Plataform(-canvas.width * 0.02, canvas.height * 0.5, canvas.width * 0.16, canvas.height * 0.1, "plataform-small.png"),
                        new Plataform(canvas.width * 0.86, canvas.height * 0.5, canvas.width * 0.16, canvas.height * 0.1, "plataform-small.png"),

                        new Plataform(-canvas.width * 0.05, canvas.height * 0.24, canvas.width * 0.45, canvas.height * 0.1, "plataform.png"),
                        new Plataform(canvas.width * 0.6, canvas.height * 0.24, canvas.width * 0.45, canvas.height * 0.1, "plataform.png")
                 ];
    }
    draw()
    {   for (let i = 0; (i < this.list.length); i++)
        {   this.list[i].draw();
        }
    }
}


class Plataform extends Entity
{   constructor(x, y, width, height, image)
    {   super(x, y, width, height, image, 1);
    }
}