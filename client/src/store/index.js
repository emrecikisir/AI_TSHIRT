import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#b51f1f',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png',
    
});

export default state;