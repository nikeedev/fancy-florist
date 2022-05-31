import { GameEngine } from '../node_modules/@nikee_dev/gameengine_js/GameEngine.js'

const canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 40
canvas.height = window.innerHeight - 30
const ScreenSize = new GameEngine.Size(canvas.width, canvas.height);

let config = {
    game_name: "Fancy Florist",
    game_version: "1.0.0",
    style: "border: 1px solid black; background-color: white;",
    width: ScreenSize.width,
    height: ScreenSize.height,
    useOwnCanvas: true,
    canvas: canvas,
    context: ctx
}

var game = new GameEngine.Game(config);

// var player = new GameEngine.Graphics.Rect(new GameEngine.Vector2(60, 60), new GameEngine.Size(20, 20), ScreenSize);

var player = new GameEngine.Graphics.Sprite("./../assets/player_canvas.png", new GameEngine.Vector2(config.width/2-70/2, config.height/2-70/2), ScreenSize);

await player.init();


game.create(() => {
    player.draw(game.context, true);
})

game.update(() => {
    
    if (GameEngine.Input.GetKeyDown(GameEngine.Keys.ArrowUp)) {
        player.position.y -= 2.5;
    }
    if (GameEngine.Input.GetKeyDown(GameEngine.Keys.ArrowDown)) {
        player.position.y += 2.5;
    }
    if (GameEngine.Input.GetKeyDown(GameEngine.Keys.ArrowLeft)) {
        player.position.x -= 2.5;
    }
    if (GameEngine.Input.GetKeyDown(GameEngine.Keys.ArrowRight)) {
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

    player.draw(game.context, true);
})
