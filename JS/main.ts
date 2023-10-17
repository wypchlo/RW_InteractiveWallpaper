class TxtFile{
    static async read(path : string)
    {
        const file : Response = await fetch(path);
        return await file.text();
    }
}

async function main(){
    const text = await TxtFile.read("Assets/positions.txt");
    console.log(text);
}

main();