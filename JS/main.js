import { TxtFile } from "./classes.js";
async function main() {
    const positions = await TxtFile.init("Assets/positions.txt");
    let position = positions.getVectorFromLineIndex(1);
    console.log(position);
}
main();
