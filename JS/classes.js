export class Vector2 {
    x;
    y;
    constructor(x, y) {
        this.x = x,
            this.y = y;
    }
}
export class TxtFile {
    path;
    text;
    lines;
    constructor(path) {
        this.path = path;
    }
    static init(path) {
        return async function () {
            let self = new TxtFile(path);
            await self.setValues();
            return self;
        }();
    }
    async setValues() {
        let file = await fetch(this.path);
        this.text = await file.text();
        this.lines = this.text.split("\n");
    }
    getText = () => this.text;
    readLine = (index) => this.lines[index];
    getVectorFromLineIndex(index) {
        let lineSplit = this.lines[index].split(", ");
        return new Vector2(Number(lineSplit[0]), Number(lineSplit[1]));
    }
}
