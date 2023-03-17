const { json } = require("body-parser");
const express = require("express");
const data = require("./data");

const server = express();
server.use(express.json());

server.get("/", (request, response) => {
  response.send("Hello");
});
server.get("/aktorler", (request, response) => {
  response.status(200).json(data);
});
server.get("/aktorler/:id", (request, response) => {
  /*Requestin bodysinden veri almak (POSTMAN ile)*/
  /*http://localhost:5000/aktorler/1 adresine postman ile get isteği attığımızda ya da post isteği atıldığında (örneğin frontendden) bu cevap server tarafına gelecek */
  console.log("req.body =", request.body);

  /*Requestin querysinden veri almak */
  //http://localhost:5000/aktorler/1?isim=M%C3%BCnir&soyisim=%C3%96zkul&film_turu=komedi
  //console.log("req.query =", request.query);
  const { id } = request.params;
  const aktor = data.find((aktor) => aktor.id === parseInt(id));
  if (aktor) {
    response.status(200).json(aktor);
  } else {
    response.status(200).send("Aradığınız aktör bulunamadı");
  }
});

server.listen(5000, () => {
  console.log("5000 Portuna gelen istekler dinleniyor...");
});
