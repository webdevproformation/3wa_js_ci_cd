import { useState , useEffect } from "react"

const App = () => {
  const [etudiants, setEtudiants] = useState([]);
  useEffect(() => {

    fetch(import.meta.env.VITE_API_URI)
    .then(function(reponse){
      return reponse.json();
    })
    .then(function(data){
      console.log(data);
      setEtudiants(data) 
    })
    
  }, [])
  return <div>
      <h1>mon application</h1>
      <ul>
        { etudiants.map((etudiant, id)  => (<li key={id}>{etudiant}</li>) ) }  
      </ul>  
    </div>
}

export default App ;