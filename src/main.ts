import { Playlib } from "../node_modules/playlib/bin/playlib.js";

const canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("canvas");
canvas.width = window.innerWidth - 40
canvas.height = window.innerHeight - 30
const ScreenSize = new Playlib.Size(canvas.width, canvas.height);

let config = {
    game_name: "Fancy Florist",
    game_version: "1.0.0",
    style: "border: 1px solid black; background-color: white;",
    width: ScreenSize.width,
    height: ScreenSize.height,
    useOwnCanvas: true,
    canvas: canvas,
}

// var player = new Playlib.Rect(new PlayLib.Vector2(60, 60), new PlayLib.Size(20, 20), ScreenSize);

var player = new Playlib.Sprite("./assets/player_canvas.png", new Playlib.Vector2(config.width/2-70/2, config.height/2-70/2), ScreenSize, null);

await player.init();

class GameScene extends Playlib.Scene
{


    create(ctx: any)
    {
        player.draw(ctx);
    }

    update(ctx: any, dt: number) 
    {
    
        if (Playlib.Input.KeyPressed(Playlib.Keys.Up)) {
            player.position.y -= 2.5;
        }
        if (Playlib.Input.KeyPressed(Playlib.Keys.Down)) {
            player.position.y += 2.5;
        }
        if (Playlib.Input.KeyPressed(Playlib.Keys.Left)) {
            player.position.x -= 2.5;
        }
        if (Playlib.Input.KeyPressed(Playlib.Keys.Right)) {
            player.position.x += 2.5;
        }

        if (player.position.y <= 0) {
            player.position.y = 1;
        }
        if (player.position.x <= 0) {
            player.position.x = 1;
        }

        if (player.position.y >= ScreenSize.height - 70) {
            player.position.y = 1 - 70 + ScreenSize.height;
        }
        
        
        if (player.position.x >= ScreenSize.width - 70) {
            player.position.x = 1 - 70 + ScreenSize.width;
        }

        player.draw(ctx);
    }
}


var game = new Playlib.Game(config, [new GameScene()]);


game.run();
