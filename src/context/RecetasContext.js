import React, { createContext, useState, useEffect} from 'react'
import axios from 'axios'

export const RecetasContext = createContext()

const RecetasProvider = (props) => {

const [recetas, setRecetas] = useState([]);
const [busqueda, setBusqueda] = useState({
    nombre:'',
    categoria:''
})

const { nombre, categoria } = busqueda;



const [ternario, setTernario] = useState(false);

useEffect(() => {
  if(ternario){
    const  obtenerRecetas = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria.replace(' ','_')}`;
   
        const resultado = await axios.get(url)
        
        setRecetas(resultado.data.drinks)
       }
       obtenerRecetas()
  }
}, [busqueda])

return (
    <RecetasContext.Provider
     value={{
      recetas,
      setBusqueda,
      setTernario
      
     }}
    >
     {props.children}
    </RecetasContext.Provider>
)
    }

export default RecetasProvider
