import React, {useContext, useState} from 'react'
import {CategoriasContext} from '../context/CategoriasContext'
import {RecetasContext} from '../context/RecetasContext'

const Formulario = () => {
    const [busqueda, setbusqueda] = useState({
        nombre: '',
        categoria:''
    });

    const { categorias } = useContext( CategoriasContext );
    const { setBusqueda, setTernario} = useContext( RecetasContext );

    const obtenerDatosRecetas = e => {
        setbusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }
    return ( 
        <form 
        className="col-12"
        onSubmit={e => { 
            e.preventDefault();
             setBusqueda(busqueda); 
             setTernario(true); }}
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por Categoria o Ingrediente</legend>

            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                    name="nombre"
                    className="form-control"
                    type="text"
                    placeholder="Buscar por Ingrediente"
                    onChange={obtenerDatosRecetas}
                    />
                </div>
                <div className="col-md-4">
                    <select
                     className="form-control" 
                     name="categoria" 
                     onChange={obtenerDatosRecetas}
                     >
                        <option value="">--Selecciona Categoria</option> 
                        {categorias.map(categoria => (
                            <option
                             key={categoria.strCategory}
                             value={categoria.strCategory}
                             >{categoria.strCategory}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                     type="submit"
                     className="btn btn-block btn-primary"
                     value="Buscar Bebidas"
                    />
                </div>
            </div>
        </form>
    );
}
 
export default Formulario;