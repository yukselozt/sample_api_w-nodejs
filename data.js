const { randomUUID } = require("crypto");

module.exports = [
  {
    id: randomUUID(),
    name: "Kemal Sunal",
    movies: ["Sakar Şakir", "Üç Kağıtçı", "Tosun Paşa"],
  },
  {
    id: randomUUID(),
    name: "Şener Şen",
    movies: ["Davaro", "Kibar Feyzo", "Tosun Paşa"],
  },
  {
    id: randomUUID(),
    name: "Adile Naşit",
    movies: ["Davaro", "Neşeli Günler", "Süt Kardeşler"],
  },
];
