class TxtFile{
    static async read(path : string)
    {
        const file : Response = await fetch(path);
        const text : string = await file.text();
        return text;
    }
}

TxtFile.read("Assets/positions.txt").then(res => {
    console.log(res);
});