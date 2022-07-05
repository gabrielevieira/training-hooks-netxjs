import React, { useState } from 'react'

const HookUseState = () => {
    const [nome, setNome] = useState("Gabriele")

    const [age, setAge] = useState(18)

    function changeNome(){
        setNome(nome + " Vieira")

    }

    const handleChange = (e) => {
        e.preventDefault();

        console.log(age)

    }

  return (
    <div>
        <h1>useState</h1>
        <h3>{nome}</h3>
        <button onClick={changeNome}>OK</button>
        <hr/>
        <h1>useState com inputs</h1>
        <p>Digite a sua idade: </p>
        <form onSubmit={handleChange}>
            <input type="text" value={age} onChange={(e)=> setAge(e.target.value)} />
            <input type="submit" value="Enviar"/>
        </form>
        <p>Você tem {age} anos</p>

    </div>
  )

}

export default HookUseState