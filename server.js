import express from "express";
const app = express();
app.use(express.json());

app.post("/fe/recepcion/api/ecf", (req, res) => {
  console.log("DGII -> Recepción e-CF", req.body);
  res.status(200).json({ ok: true });
});

app.post("/fe/aprobacioncomercial/api/ecf", (req, res) => {
  console.log("DGII -> Aprobación Comercial", req.body);
  res.status(200).json({ ok: true });
});

app.post("/fe/autenticacion/api/semilla/validacioncertificado", (req, res) => {
  console.log("DGII -> Autenticación", req.body);
  res.status(200).json({ ok: true });
});

app.get("/", (req, res) => {
  res.send("ZAYO Contable RD - Backend activo");
});

app.listen(3000, () => console.log("Server running"));