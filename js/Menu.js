class Menu
{   constructor()
    {   this.buttons = new Buttons([]);
        this.active = false;

        this.background = new Image();
        this.background.src = "./imgs/menu.png";
        this.mj = new Image();
        this.mj.src = "./imgs/mj.png";
        this.paje = new Image();
        this.paje.src = "./imgs/pvz-paje.png";

        this.selectedCharacter = 0;

        this.changeButtonsMenu();
    }

    changeButtonsMenu()
    {   this.buttons.keysCooldown.actual = this.buttons.keysCooldown.start;
        this.buttons.selectedOption = 0;
        this.buttons.list = [
                                new Button(canvas.width * 0.45, canvas.height * 0.45, canvas.width * 0.4, canvas.height * 0.1,"Jogar", () =>
        {   clearInterval(timer)
            player = new [Peashooter, GatlingPea, KernelPult][this.selectedCharacter]();
            timer = setInterval(loop, 1000 / FPS);
            sounds.awooga.play()
            sounds.backgroundMusic.play()
        }),
        new Button(canvas.width * 0.45, canvas.height * 0.6, canvas.width * 0.4, canvas.height * 0.1, "Personagens", () =>
        {   this.changeButtonsCharacters();
        }),
        new Button(canvas.width * 0.45, canvas.height * 0.75, canvas.width * 0.4, canvas.height * 0.1, "Controles", () =>
        {   this.changeButtonsControls();
        })
                            ];
    }

    changeButtonsCharacters()
    {   this.buttons.keysCooldown.actual = this.buttons.keysCooldown.start;
        this.buttons.selectedOption = 0;
        this.buttons.list = [
                                new Button(canvas.width * 0.01, canvas.height * 0.01, canvas.width * 0.1, canvas.height * 0.1, "←", () =>
        {   this.changeButtonsMenu();
        }),
        new ImageButton(canvas.width * 0.45, canvas.height * 0.45, canvas.width * 0.4, canvas.height * 0.1, "Disparervilha", () =>
        {   this.selectedCharacter = 0;
            this.changeButtonsMenu();
        }, "peashooter.png"),
        new ImageButton(canvas.width * 0.45, canvas.height * 0.6, canvas.width * 0.4, canvas.height * 0.1, "Ervilha Minigun", () =>
        {   this.selectedCharacter = 1;
            this.changeButtonsMenu();
        }, "gatling-pea.png"),
        new ImageButton(canvas.width * 0.45, canvas.height * 0.75, canvas.width * 0.4, canvas.height * 0.1, "Milho Coronel", () =>
        {   this.selectedCharacter = 2;
            this.changeButtonsMenu();
        }, "kernel-pult.png")
                            ];
    }

    changeButtonsControls()
    {   this.buttons.keysCooldown.actual = this.buttons.keysCooldown.start;
        this.buttons.selectedOption = 0;
        this.buttons.list = [
                                new Button(canvas.width * 0.01, canvas.height * 0.01, canvas.width * 0.1, canvas.height * 0.1, "←", () =>
        {   this.changeButtonsMenu();
        }),
        new Button(canvas.width * 0.45, canvas.height * 0.6, canvas.width * 0.4, canvas.height * 0.1, "Alterar Controles", () =>
        {   alert("fazer um código para alterar os controles")
        })
                            ];
    }

    update()
    {   this.buttons.update();
    }

    draw()
    {   context.drawImage(this.background, 0, 0, canvas.width, canvas.height);
        context.drawImage(this.mj, canvas.width * 0.05, canvas.height * 0.15, canvas.width * 0.3, canvas.height * 0.8);
        context.drawImage(this.paje, canvas.width * 0.45, canvas.height * 0.035, canvas.width * 0.4, canvas.height * 0.4);
        this.buttons.draw();
    }
}


class Buttons
{   constructor(list)
    {   this.list = list;
        this.selectedOption = 0;
        this.keysCooldown = { start: 6 };
        this.keysCooldown.actual = this.keysCooldown.start;
    }

    update()
    {   if (this.keysCooldown.actual <= 0)
        {   if (keys[87])
            {   this.selectedOption = this.selectedOption - (this.selectedOption > 0);
                this.keysCooldown.actual = this.keysCooldown.start;
            }
            else
            {   if (keys[83])
                {   this.selectedOption = this.selectedOption + (this.selectedOption < (this.list.length - 1));
                    this.keysCooldown.actual = this.keysCooldown.start;
                }
            }
            if (keys[13])
            {   this.list[this.selectedOption].act();
            }
        }

        this.keysCooldown.actual--;
    }

    draw()
    {   for (let i = 0; i < this.list.length; i++)
        {   this.list[i].draw(i === this.selectedOption);
        }
    }
}

class Button
{   constructor(x, y, width, height, text, action)
    {   this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.text = text;
        this.action = action;
    }

    draw(selected)
    {   context.fillStyle = "black";
        context.fillRect(this.x - 4, this.y - 4, this.width + 8, this.height + 8);

        context.fillStyle = selected ? "#86060A" : "white";
        context.fillRect(this.x, this.y, this.width, this.height);

        context.fillStyle = selected ? "white" : "black";
        context.font = "30px Arial";
        context.textBaseline = "middle";
        context.textAlign = "center";
        context.fillText(this.text, this.x + this.width / 2, this.y + this.height / 2);
    }

    act()
    {   if (this.action)
        {   this.action();
        }
    }
}

class ImageButton extends Button
{   constructor(x, y, width, height, text, action, image)
    {   super(x, y, width, height, text, action);
        this.image = new Image();
        this.image.src = "./imgs/" + image;
    }

    draw(selected)
    {   super.draw(selected);
        context.drawImage(this.image, this.x, this.y, this.height, this.height);
    }
}