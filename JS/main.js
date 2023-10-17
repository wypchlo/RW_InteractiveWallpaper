import { TxtFile } from "./classes.js";
async function main() {
    const positions = await TxtFile.init("Assets/positions.txt");
    console.log(positions.readLine(1));
}
main();
