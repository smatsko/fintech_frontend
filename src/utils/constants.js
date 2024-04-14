import User from "./User.js";

export const testUserOn = false;
export const testUser = new User ("test", "1234", "Piter", "Smith");

//export const baseUrl = 'https://webaccounting.herokuapp.com/account'
export const baseUrl = 'http://localhost:8080/account'
export const createToken = (login, password) => `Basic ${window.btoa(login + ':' + password)}`;


export const baseColor = '#383393';
import xLogoName from "../images/Logo Name.png";
import xGlyph from "../images/Glyph.png";

export const LogoName = xLogoName;
export const Glyph = xGlyph;

