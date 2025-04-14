import { useContext } from "react";
import {EtudiantContext} from "../context/EtudiantContext";

const Liste = () => {
    const { etudiants } = useContext( EtudiantContext );
    return <div>
        <h1>mon application</h1>
        <ul>
            { etudiants.map(etudiant  => (<li key={etudiant._id}>{etudiant.name}</li>) ) }  
        </ul>  
    </div>
}


export default Liste ;
