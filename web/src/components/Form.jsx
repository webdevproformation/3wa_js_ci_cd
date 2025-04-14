import {useState , useContext} from "react";
import {EtudiantContext} from "../context/EtudiantContext";

const Form = () => {
    const [name, setName] = useState("");
    const {etudiants, setEtudiants} = useContext(EtudiantContext);

    const submit = (e) =>{
        e.preventDefault();

        if(name === ""){
            alert("veuillez compléter le champ nom");
            return ;
        }

        const options = { 
            method: "post", 
            body: JSON.stringify({name}), 
            headers: {"Content-Type": "application/json"} 
        };

        fetch(import.meta.env.VITE_API_URI , options)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                const etudiantsClone = [...etudiants] ;
                etudiantsClone.push(data);
                setEtudiants(etudiantsClone);
                setName("");
            });
    }

    return <div>
        <h2>Ajouter un nouvel étudiant :</h2>
        <form onSubmit={submit}>
            <input type="text" placeholder="nom de l'étudiant" onChange={(e) => { setName(e.target.value) }} value={ name } />
            <input type="submit" value="Ajouter !"/>
        </form>
    </div>
}

export default Form