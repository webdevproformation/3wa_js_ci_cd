import express from "express"
import cors from "cors"
import {connect , Schema, model} from "mongoose"
import "dotenv/config"

const app = express();
const PORT = process.env.PORT || 1234

connect(process.env.MONGO_URI)
    .then(()=> console.log("connexion réussie à la base de données"))
    .catch(err=> console.log(err))

app.use(cors());
app.use(express.json());

// https://medium.com/@fixitblog/solved-cannot-overwrite-model-once-compiled-mongoose-3f4a92d961ff
// Cannot overwrite model once compiled Mongoose

const etudiantSchema = Schema({
    name: String,
})
const Etudiant = model("etudiants",etudiantSchema);


app.get("/", async (req, rep )=> {
    try{
        const etudiants = await Etudiant.find()
        rep.json(etudiants)
    }
    catch(err){
        rep.json({msg : err})
    }
});

app.post("/" , async ( req, rep ) => {
    try{
        const { name } = req.body;
        const etudiant = new Etudiant({ name })
        const resultat = await etudiant.save();
        rep.json(resultat);
    }
    catch(err){
        rep.json({msg : err})
    }
})

app.listen(PORT, console.log(`serveur express start ${PORT}`))