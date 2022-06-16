export const validate = {
  array: (key: any) => {
    if (
      key === undefined ||
      typeof key === "undefined" ||
      key === null ||
      key.length < 0
    ) {
      return false;
    }

    return true;
  },
  string: (key: any) => {
    if (
      key === undefined ||
      typeof key === "undefined" ||
      key === null ||
      key.trim().length < 0
    ) {
      return false;
    }

    return true;
  },
  object: (key: any) => {
    if (
      key === undefined ||
      typeof key === "undefined" ||
      key === null ||
      Object.keys(key).length === 0
    ) {
      return false;
    }

    return true;
  },
  number: (key: any) => {
    if (
      key === undefined ||
      typeof key === "undefined" ||
      key === null ||
      Number.isNaN(parseFloat(key)) ||
      !Number.isFinite(Number(key))
    ) {
      return false;
    }

    return true;
  },
  exist: (key: any) => {
    if (
      key === undefined ||
      typeof key === "undefined" ||
      key === null ||
      key === "null"
    ) {
      return false;
    }

    return true;
  },
  func: (key: any) => {
    if (typeof key !== "function") {
      return false;
    }

    return true;
  },
};

export const round = (num: number, decimals = 2) =>
  Math.round(num * 10 ** decimals) / 10 ** decimals;

export const getCleanedString = (cadena: string, separator = "_") => {
  if (typeof cadena !== "string") {
    return cadena;
  }
  // Definimos los caracteres que queremos eliminar
  const specialChars = "!@#$^&%*()+=-[]/{}|:<>?,.";

  // Los eliminamos todos
  for (let i = 0; i < specialChars.length; i++) {
    cadena = cadena.replace(new RegExp(`\\${specialChars[i]}`, "gi"), "");
  }

  // Lo queremos devolver limpio en minúsculas
  cadena = cadena.toLowerCase();

  // Quitamos espacios y los sustituimos por _ porque nos gusta mas asi
  cadena = cadena.replace(/ /g, separator);

  // Quitamos acentos y "ñ". Fíjate en que va sin comillas el primer parámetro
  cadena = cadena.replace(/á/gi, "a");
  cadena = cadena.replace(/é/gi, "e");
  cadena = cadena.replace(/í/gi, "i");
  cadena = cadena.replace(/ó/gi, "o");
  cadena = cadena.replace(/ú/gi, "u");
  cadena = cadena.replace(/ñ/gi, "n");
  return cadena;
};

export const truncateText = (text: string, lengthCharacters = 25) => {
  return text.length >= lengthCharacters
    ? text.substr(0, lengthCharacters).concat("...")
    : text;
};
