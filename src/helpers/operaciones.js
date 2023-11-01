export const operaciones = (numeros,setNumeros) => {
    const  {numero1,numero2} = numeros

    const handleChange = (e) => {
        setNumeros({
            ...numeros,
            [e.target.name]: Number(e.target.value)
        })
        }
       const suma = () =>  Number(numero1 + numero2)
       const resta = () =>  Number(numero1 - numero2)
       const multiplicacion = () =>  Number(numero1 * numero2)
       const divicion = () =>  Number(numero1 / numero2)

       return {handleChange,suma,resta,multiplicacion,divicion,numero1,numero2}
    
}