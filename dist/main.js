import { Size } from '../node_modules/@nikee_dev/gameengine_js/GameEngine.js';
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ScreenSize = new Size(canvas.width, canvas.height);
