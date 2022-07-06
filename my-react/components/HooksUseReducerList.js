import { useReducer, useState } from "react";



const useHooksReducerList = () => {
    //1 - funcao do reducer, diz o que será feito( passa a funcao que altera o estado e o estado inicial)
    const [listText, setListText] = useState("")
    const [listValue, setListValue] = useState()

    const initialList = [
        { id:1, fruta: "Maçã", valor:"R$ 3.00" },
        { id:2, fruta:"Banana", valor:"R$2,00" },
        { id:3, fruta:"Laranja", valor:"R$2,00" }   
    ]


    //2 - funcao do reducer alterar o estado
    const changeListReducer = (state, action) =>{
        switch (action.type) {
            case "ADD":
            const newList = {
                id: Math.random(),
                fruta: listText,
                valor: listValue,
            }    

            setListText("")
            setListValue()
            
            return [ ...state, newList]
        
            default:
                return state;
        }

    } 



    const handleChangeSubmit = (e) => {
        e.preventDefault();
        dispatchList({type: "ADD"})
    }

    const [list, dispatchList] = useReducer(changeListReducer, initialList)


    return(
        <div>
            <h1>Lista de Compras</h1>
            {list?.map((l)=>(
                <ul>
                    <li key={l.id}>Fruta: {l.fruta} - valor R$ {l.valor}</li>
                </ul>
            ))}
            <form onSubmit={handleChangeSubmit}>
                <label>Produto:</label>
                <input type="text" value={listText} onChange={(e)=> setListText(e.target.value)}/>
                <label>Preço:</label>
                <input type="number" value={listValue} onChange={(e)=> setListValue(e.target.value)}/>
                <input type="submit" value="Enviar"/>
            </form>
        </div>
    )  

}

export default useHooksReducerList;