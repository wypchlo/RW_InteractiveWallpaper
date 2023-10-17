import { Vector2, TxtFile } from "./classes.js";

const RESOLUTION = new Vector2(window.innerHeight / 9 * 16, window.innerHeight);
const RESOLUTION_MULTIPLIER = new Vector2(RESOLUTION.x / 1366, RESOLUTION.y / 786);
const canvasContainer = document.querySelector("#canvasContainer");

async function main()
{
    const positions = await TxtFile.init("Assets/positions.txt");
    let position : Vector2 = positions.getVectorFromLineIndex(1);
    console.log(position);
}

main();