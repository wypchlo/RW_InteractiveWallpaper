import { Vector2, TxtFile } from "./classes.js";

async function main()
{
    const canvas = document.querySelector("canvas");
    const gl = canvas.getContext("webgl");

    const program = gl.createProgram();

    // SHADERS //

    const vertShaderFile = await TxtFile.init("Shaders/vertexShader.vert");
    const fragShaderFile = await TxtFile.init("Shaders/fragmentShader.frag");
    
    const vertShaderText : string = vertShaderFile.getText();
    const fragShaderText : string = fragShaderFile.getText();

    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    const fragmentShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertShaderText);
    gl.shaderSource(fragmentShader, fragShaderText);
}

main();