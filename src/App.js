//dependencias necesarias
import { useState } from "react";
//data
import Resenias from "./Data/Resenias";
//Componentes
import Header from "./Componentes/Header";
import Resenia from "./Componentes/Resenia";
import ReseniaList from "./Componentes/ReseniaList";
import FormResenias from "./Componentes/FormResenias";

function App(){

    //crear estado inicial para arreglo de resenias
    const [lista_resenias,
           setListaResenias  ] = useState(Resenias)

    //metodo para borrar una resenia:
    const deleteResenia = id => {
        if (window.confirm("estas seguro de borrar la resenia")){
            setListaResenias(lista_resenias.filter((resenia)=>resenia.id !== id ))
        }
    }       

    //metodo para añadir reseña nueva al arreglo
    const addResenia=(newResenia)=>{
       //id a resenia
       newResenia.id=lista_resenias.length + 1
        setListaResenias( [newResenia, ...lista_resenias])
    }
    return (
        <div className="container">
            <FormResenias
            addResenia = {addResenia}/>
             <ReseniaList
                deleteResenia={deleteResenia}
                listaresenias={lista_resenias}  />
        </div>
        
    )
}
export default App;