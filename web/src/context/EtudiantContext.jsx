import { createContext , useEffect , useState } from "react";

export const EtudiantContext = createContext();


export const EtudiantContextProvider = function({children}){

    const [etudiants, setEtudiants] = useState([]);

    useEffect(() => {
        fetch(import.meta.env.VITE_API_URI)
            .then(function(reponse){
                return reponse.json();
            })
            .then(function(data){
                setEtudiants(data) 
            })  
    }, [])

    return <EtudiantContext.Provider value={{ etudiants , setEtudiants }} >
        {children}
    </EtudiantContext.Provider>;
}

