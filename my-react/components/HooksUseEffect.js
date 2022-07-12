//Contrala quntas vezes o useEffect é realizado

import React, { useEffect, useState } from 'react'

const HooksUseEffect = () => {
    const [num, setNum] = useState(1);
    const [anotherNumber, setAnotherNumber] = useState(10)
    
    
    // sem dependencia, vai ser executado sempre quando for redentrizado
    useEffect(()=>{
        console.log(" UseEffect = Sem Array dependencia = Executado sempre que for renderizado")        
    })
    
    //array vazio, executa ao carregar a pagina, executa uma unica vez
    useEffect(()=>{
        console.log(" UseEffect = Array vazio = unica vez")        
    },[])

    
    //Array dependencia com valor, executa quando algum valor expecifico necessita ser rerendenrizado
    useEffect(()=>{
        console.log("UseEffect = Com valor no array = executado quando o valor é alterado")        
    },[anotherNumber])
    
    const changeSomaValores = () => {
        setNum(num + 1)
    }

  return (
    <div>
        <h1>UseEffect</h1>
       <p>Numero: {num}</p> 
       <button onClick={changeSomaValores}>OK</button>
       <p>Outro numero: {anotherNumber}</p>
       <button onClick={() => setAnotherNumber(12)}>OK</button>
    </div>
  )
}

export default HooksUseEffect