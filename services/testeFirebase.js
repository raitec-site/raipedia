const db = require("./firebaseAdmin");

async function criar() {
  await db.collection("inicio").doc("principal").set({
    nome: "banco de dados raipedia"
  });

  console.log("Documento criado");
}

criar();