precision mediump float;

uniform vec2 u_offset;
uniform sampler2D u_originalImage;

varying vec2 v_texcoord;

void main() {
    vec2 transformedTexCoord = v_texcoord * vec2(1, .5);
    vec2 parallax = (u_offset);
    vec4 depthDistortion = texture2D(u_originalImage, transformedTexCoord + vec2(0, .5) + parallax);
    float parallaxMult = depthDistortion.r;

    parallax = parallax * parallaxMult;

    gl_FragColor = texture2D(u_originalImage, (transformedTexCoord + parallax));
}