import { Playlib } from "../../playlib.js/bin/playlib.js";

const canvas: any = document.getElementById("canvas");
canvas.width = window.innerWidth - 40
canvas.height = window.innerHeight - 30
const ScreenSize = new Playlib.Vector2(canvas.width, canvas.height);

let config = {
    game_name: "Fancy Florist",
    game_version: "1.0.0",
    style: "border: 1px solid black; background-color: white;",
    width: ScreenSize.x,
    height: ScreenSize.y,
    useOwnCanvas: true,
    canvas: canvas,
}

// var player = new Playlib.Rect(new PlayLib.Vector2(60, 60), new PlayLib.Size(20, 20), ScreenSize);

var player = new Playlib.Sprite("./assets/player_canvas.png", new Playlib.Vector2(config.width/2-70/2, config.height/2-70/2), ScreenSize);
console.log(player);
const speed = 15

class GameScene extends Playlib.Scene
{

    async create(ctx: any)
    {        
        this.ClearScreen = true;

        await player.init();

        player.draw(ctx);
    }

    async update(ctx: any, dt: number) 
    {
    
        if (Playlib.Input.KeyPressed(Playlib.Keys.Up)) {
            player.position.y -= speed;
        }
        if (Playlib.Input.KeyPressed(Playlib.Keys.Down)) {
            player.position.y += speed;
        }
        if (Playlib.Input.KeyPressed(Playlib.Keys.Left)) {
            player.position.x -= speed;
        }
        if (Playlib.Input.KeyPressed(Playlib.Keys.Right)) {
            player.position.x += speed;
        }

        if (player.position.y <= 0) {
            player.position.y = 1;
        }
        if (player.position.x <= 0) {
            player.position.x = 1;
        }

        if (player.position.y >= ScreenSize.y - 70) {
            player.position.y = 1 - 70 + ScreenSize.y;
        }
        
        
        if (player.position.x >= ScreenSize.x - 70) {
            player.position.x = 1 - 70 + ScreenSize.x;
        }

        player.draw(ctx, new Playlib.Vector2(34, 63), new Playlib.Vector2(1, 1), new Playlib.Vector2(34, 63));
    }
}


var game = new Playlib.Game(config, [new GameScene()]);


game.run();
