import React from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import Listado from './components/Listado'
import CategoriasProvider from './context/CategoriasContext'
import RecetasProvider from './context/RecetasContext'
import ModalProvider from './context/ModalContext'


function App() {
  return (
    <ModalProvider>
    <RecetasProvider>
   <CategoriasProvider>
     <Header />
     <div className="containet mt-5">
       <div className="row">
         <Formulario/>
       </div>
       <Listado />
     </div>
     
   </CategoriasProvider>
   </RecetasProvider>
   </ModalProvider>
  );
}

export default App;
