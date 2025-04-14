import Liste from "./components/Liste";
import Form from "./components/Form";
import { EtudiantContextProvider } from "./context/EtudiantContext";

const App = () => {
    return <div>
      <EtudiantContextProvider> 
        <Form />
        <Liste />
      </EtudiantContextProvider>
    </div>
}

export default App ;