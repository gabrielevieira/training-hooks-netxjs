import React, { useState } from 'react'

const HookUseState = () => {
    const [nome, setNome] = useState("Gabriele")

    function changeNome(){
        setNome(nome + " Vieira")

    }
  return (
    <div>
        <h1>{nome}</h1>
        <button onClick={changeNome}>OK</button>
    </div>
  )
}

export default HookUseState