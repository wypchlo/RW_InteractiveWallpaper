attribute vec2 position;
attribute vec2 texcoord;

uniform vec2 u_resolution;

varying vec2 v_texcoord;

void main() {
    vec2 zeroToOne = position / u_resolution;
    vec2 zeroToTwo = zeroToOne * 2.0;
    vec2 clipSpace = zeroToTwo - 1.0;
    gl_Position = vec4(position * vec2(1, -1), 0, 1);
    v_texcoord = texcoord;
}