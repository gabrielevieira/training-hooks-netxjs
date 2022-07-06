import { useReducer, useState } from "react"

const HooksUseReducer = () => {
    const [number, dispatch] = useReducer((state, action) =>{
        return Math.random(state)
    })

   const initialTask = [
        {id: 1 , text: "Fazer comida" },
        {id: 2, text: "Limpar a casa"},
        {id: 4, text: "Alimentar o cachorro"}
    ]

    const taskReducer = (state, action) =>{
        switch (action.type) {
            case "ADD":
                const newTask = {
                    id: Math.random(),
                    text: taskCont,
                }
                
                setTaskCont("");

                return [...state, newTask]

                case "DELETE":
                    return state.find((task) => task.id !== action.id)
        
             default:
                 return state
        }
    }


    const handleChangeTask = (e) => {
        e.preventDefault()

        dispatchTask({type: "ADD"})

    }

    const removeTask = (id) => {
        dispatch({type: "DELETE", id})

    }


    const [taskCont, setTaskCont] = useState("")
    const [tasks, dispatchTask] = useReducer(taskReducer, initialTask)

    return (
    <div>
        <h1>useReducer</h1>
        <p>Numero:{number}</p>
        <button onClick={dispatch}>Alterar o numero</button>
        <hr/>
        <h1>useReducer inserindo na lista</h1>
        <p>Lista de atividade:</p>
        <div>
            <h1>aqui</h1>
        {tasks.map((t)=>
        <ul><li key={t.id} onDoubleClick={()=> removeTask(t.id)}>{t.text}</li></ul>
        )}
        </div>        
        <form onSubmit={handleChangeTask}>
            <input value={taskCont} type="text" onChange={(e)=> setTaskCont(e.target.value)}/>
            <input type="submit" value="Enviar"/>
        </form>
        
    </div>
  )
}

export default HooksUseReducer