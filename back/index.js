import express from "express"
import cors from "cors"

const app = express();


app.use(cors())

app.get("/", (req, rep )=> {
    rep.json("bonjour")
});

app.listen(4000, console.log("serveur express start"))