import { createContext } from "react"


export const SomeContext = createContext()

export const HooksUseContext = ({children}) => {

    const contextValue = "Contexto do Hooks ..."

    return(
        <SomeContext.Provider value={{contextValue}}>
            {children}
        </SomeContext.Provider>
    )
}

export default HooksUseContext