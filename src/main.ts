


import { Vector2, Rect, Size, Screen, Object, Sprite, version, Input, Keys, info } from '../node_modules/@nikee_dev/gameengine_js/GameEngine.js'

const canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const ScreenSize = new Size(canvas.width, canvas.height);


