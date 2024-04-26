import User from "./User.js";

export const testUserOn = false;
export const testUser = new User ("admin", "admin", "Piter", "Smith",
    ["ADMINISTRATOR"]);

export const t = msg => { if (testUserOn) console.log(msg); }

//export const baseUrl = 'https://webaccounting.herokuapp.com/account'
export const baseUrl = 'http://localhost:8080'
export const createToken = (login, password) => `Basic ${window.btoa(login + ':' + password)}`;


export const baseColor = '#383393';
import xLogoName from "../images/Logo Name.png";
import xGlyph from "../images/Glyph.png";
import xGraphDemo from "../images/graph_demo.png";

export const LogoName = xLogoName;
export const Glyph = xGlyph;
export const GraphDemo = xGraphDemo;

