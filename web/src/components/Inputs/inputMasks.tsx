const phoneNumberMask = [
    "(",
    /[1-9]/,
    /\d/,
    ")",
    " ",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    /\d/
];
const celphoneNumberMask = [
    "(",
    /[1-9]/,
    /\d/,
    ")",
    " ",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    /\d/
];

const cepMask = [
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/
];

const nisMask = [
    /\d/, /\d/, /\d/, /\d/, /\d/,
    /\d/, /\d/, /\d/, /\d/, /\d/,
    /\d/, /\d/, /\d/, /\d/
];

const cartaoSusMask = [
    /\d/, /\d/, /\d/, /\d/,
    " ", /\d/, /\d/, /\d/, /\d/,
    " ", /\d/, /\d/, /\d/, /\d/,
    " ", /\d/, /\d/, /\d/, /\d/
];

const pesoMask = [
    /\d/, /\d/, /\d/,
    ".", /\d/
];

const imcMask = [
    /\d/, /\d/,
    ".", /\d/, /\d/
];

const idadeGestacionalMask = [
    /\d/, /\d/,
    " ", "S", "e", "m",
    "a", "n", "a", "s"
];

const idadeGestacionalMesesMask = [
    /\d/, /\d/,
    " ", "M", "e", "s", "e", "s"
];


export { phoneNumberMask, celphoneNumberMask, cepMask, nisMask, cartaoSusMask, pesoMask, imcMask, idadeGestacionalMask, idadeGestacionalMesesMask }