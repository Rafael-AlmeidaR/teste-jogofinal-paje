class Sounds
{   constructor()
    {   this.graveRumble = new Audio("./sounds/graveRumble.ogg");

        this.siren = new Audio("./sounds/siren.ogg");
        this.awooga = new Audio("./sounds/awooga.ogg");

        this.plant = new Audio("./sounds/plant.ogg");

        this.splat1 = new Audio("./sounds/splat-0.ogg");
        this.splat2 = new Audio("./sounds/splat-1.ogg");

        this.loseMusic = new Audio("./sounds/loseMusic.ogg");
        this.cherryBomb = new Audio("./sounds/cherrybomb.ogg");
        this.chomp0 = new Audio("./sounds/chomp.ogg");
        this.chomp1 = new Audio("./sounds/chomp2.ogg");

        this.gainSuns = new Audio("./sounds/sun.ogg");
        this.kernelPultSplat = new Audio("./sounds/kernelpultSplat.ogg");

        this.backgroundMusic = new Audio("./sounds/grasswalk.mp3");
        this.backgroundMusic.loop = true;
        // this.dirt = new Audio("./sounds/dirt.ogg");
    }

    playAudioDuplicated(audio)
    {   let duplicatedAudio = new Audio(audio.src);
        duplicatedAudio.volume = audio.volume;
        duplicatedAudio.play();
    }
}