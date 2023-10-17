export class Vector2
{
    x : number;
    y : number;
    constructor(x : number, y : number)
    {
        this.x = x,
        this.y = y;
    }
}

export class TxtFile
{
    path : string;
    text : string;
    lines : string[];

    constructor (path : string)
    {
        this.path = path;
    }

    public static init (path : string)
    {
        return async function() 
        {
            let self = new TxtFile(path);
            await self.setValues();
            return self;
        }()
    }

    private async setValues(){
        let file = await fetch(this.path);
        this.text = await file.text();
        this.lines = this.text.split("\n");
    }

    public getText = () => this.text;

    public readLine = (index : number) => this.lines[index];

    public getVectorFromLineIndex (index : number)
    {
        let lineSplit = this.lines[index].split(", ");
        return new Vector2(Number(lineSplit[0]), Number(lineSplit[1]));
    }
}

