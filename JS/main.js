class TxtFile {
    static async read(path) {
        const file = await fetch(path);
        const text = await file.text();
        return text;
    }
}
TxtFile.read("Assets/positions.txt").then(res => {
    console.log(res);
});
