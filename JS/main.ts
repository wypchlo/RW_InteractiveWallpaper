class Vector2{
    x;
    y;
    constructor(x, y){
        this.x = x,
        this.y = y;
    }
}

class TxtFile{
    path : string;
    file : Response;
    text : string;
    lines : string[];

    constructor(path){
        this.path = path;
    }

    static init(path : string)
    {
        return (async function () 
        {
            let self = new TxtFile(path);
            await self.set();
            return self;
        }())
    }

    async set(){
        this.file = await fetch(this.path);
        this.text = await this.file.text();
        this.lines = this.text.split("\n");
    }

    async getText()
    {
        return this.text;
    }

    async readLine(index : number)
    {
        return this.lines[index];
    }
}

async function main(){
    const positions = await TxtFile.init("Assets/positions.txt");
    console.log(await positions.getText());
}

main();