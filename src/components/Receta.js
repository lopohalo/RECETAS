import React, {useState, useContext} from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { ModalContext } from '../context/ModalContext';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 450,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

const mostrarIngredientes = ingredientes =>{
  let ingrediente = []

  for(let i = 1 ; i < 16 ; i++){
      if(ingredientes[`strIngredient${i}`]){
          ingrediente.push(
              <li>{ingredientes[`strIngredient${i}`]} {ingredientes[`strMeasure${i}`]}</li>
          )
      }
  }
 
  return ingrediente
}

const Receta = ({receta}) => {
  
    const [ modalStyle ] = useState( getModalStyle );
    const { setIdreceta, ingredientes,  setIngredientes } = useContext( ModalContext );
    
    const [ open, setOpen ] = useState(false);

    const classes = useStyles();
    
    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{receta.strDrink}</h2>
                <img className="card-img-top" src={receta.strDrinkThumb} alt={`Imagen de {receta.strDrink}`} />
                <div className="card-body">
                    <button
                     type="button"
                     className="btn btn-block btn-primary"
                     onClick={() => {
                       setIdreceta(receta.idDrink)
                       handleOpen()
                     }}
                    >
                      Ver Receta
                    </button>
                    <Modal 
                     open={open}
                     onClick={() => {
                       handleClose()
                       setIngredientes({});
                       setIdreceta(null);
                     }}
                    >
                      <div style={modalStyle} className={classes.paper}>
                         <h2>{ingredientes.strDrink}</h2>
                         <h3 className="mt-4">Intrucciones</h3>
                         <p>
                           {ingredientes.strInstructions}
                         </p>
                         <img className="img-fluid my-4" src={ingredientes.strDrinkThumb} />
                         <h3>Ingredientes y cantidades</h3>
                         <ul>
                           {mostrarIngredientes(ingredientes)}
                         </ul>
                      </div>
                    </Modal>

                </div>
            </div>
        </div>
     );
}
 
export default Receta;

