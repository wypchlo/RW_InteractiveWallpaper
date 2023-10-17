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

    public static init(path : string)
    {
        //returns the result of a function using the constructor to create the object
        return (async function () 
        {
            let self = new TxtFile(path);
            await self.setValues();
            return self;
        }())
    }

    private async setValues(){
        this.file = await fetch(this.path);
        this.text = await this.file.text();
        this.lines = this.text.split("\n");
    }

    public getText = () => this.text;

    public readLine = (index : number) => this.lines[index];
}

async function main(){
    const positions = await TxtFile.init("Assets/positions.txt");
    console.log(await positions.getText());
}

main();