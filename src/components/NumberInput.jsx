import { useState } from "react";
import PropTypes from "prop-types";
import Resultado from './Resultado'
import { operaciones } from "../helpers/operaciones";


const NumberInput = () => {
    const [numeros,setNumeros] = useState({
        numero1:0,
        numero2:0,
    })
   
const {
  handleChange,
  suma,
  resta,
  multiplicacion,
  divicion,
  numero1,
  numero2 
} = operaciones(numeros,setNumeros)


    
  return (
    <>
      <label className="mx-2">
    Numero 1: {" "} 
    <input name="numero1" type="number" onChange={handleChange} value={numero1}/>
      </label>
      <label className="mx-2">
    Numero 2: {" "} 
    <input name="numero2" type="number" onChange={handleChange} value={numero2}/>
      </label>

      <Resultado operacion="Suma" calculo={suma()}/>
      <Resultado operacion="Resta" calculo={resta()}/>
      <Resultado operacion="Multiplicacion" calculo={multiplicacion()}/>
      <Resultado operacion="Division" calculo={divicion()}/>
    </>
  );
};

NumberInput.propTypes = {
    name:PropTypes.string,
};

export default NumberInput;
