import { useReducer, useState } from "react";



const useHooksReducerList = () => {
    const [listText, setListText] = useState("")
    // const [listValue, setListValue] = useState(0)

    //3 - Cria o estado inicial da lista
    const initialList = [
        { id: 1, fruta: "Maçã", valor: "R$ 3.00" },
        { id: 2, fruta: "Banana", valor: "R$2,00" },
        { id: 3, fruta: "Laranja", valor: "R$2,00" }
    ]


    //2 - Criar a funcao do reducer  para alterar o estado, deve conter como props state e action
    const changeListReducer = (state, action) => {
        switch (action.type) {
            case "ADD":
                const newList = {
                    id: Math.random(),
                    fruta: listText
                }

                setListText("")
                // setListValue()

                return [...state, newList]

            case "DELETE":
                return state.filter((task) => task.id !== action.id)

            default:
                return state;
        }
    }


    const handleChangeSubmit = (e) => {
        e.preventDefault();
        dispatchList({ type: "ADD" })
    }

    // const removerTask = (id) => {
    //     dispatchList({ type: "DELETAR", id: id })
    // }

    //1 - funcao do reducer, diz o que será feito( passa a funcao que altera o estado e tb passa o estado inicial)
    const [list, dispatchList] = useReducer(changeListReducer, initialList)


    return (
        <div>
            <h1>Lista de Compras</h1>
            <ul>
                {list?.map((l) => (

                    <li key={l.id} >
                        Fruta: {l.fruta} - valor R$ {l.valor}
                     </li>
                ))}
            </ul>
            <form onSubmit={handleChangeSubmit}>
                <label>Produto:</label>
                <input type="text" value={listText} onChange={(e) => setListText(e.target.value)} />
                {/* <label>Preço:</label>
                <input type="number" value={listValue} onChange={(e)=> setListValue(e.target.value)}/>
                <input type="submit" value="Enviar"/> */}
            </form>
        </div>
    )

}

export default useHooksReducerList;