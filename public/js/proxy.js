import { ChemicalServer } from "chemicaljs";
import express from "express";

const [app, listen] = new ChemicalServer({
    default: "uv",
    uv: true,
    rh: false,
    scramjet: false
  });
const port = process.env.PORT || 3000;

app.use(express.static("public", {
    index: "index.html",
    extensions: ["html"]
}));

app.serveChemical();

app.use((req, res) => {
    res.status(404);
    res.send("404 Error");
});

listen(port, () => {
    console.log(`Mewing Academy is listening on ${port}`);
});