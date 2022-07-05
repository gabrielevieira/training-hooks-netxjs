import { useReducer } from "react"

const HooksUseReducer = () => {
    const [number, dispatch] = useReducer((state, action) =>{
        return Math.random(state)
    })

    return (
    <div>
        <h1>useReducer</h1>
        <p>Numero:{number}</p>
        <button onClick={dispatch}>Alterar o numero</button>
    </div>
  )
}

export default HooksUseReducer