import Link from 'next/link'
import { useContext } from 'react'
import { SomeContext } from '../components/HooksUseContext'


export default function about(){

     const { contextValue } = useContext(SomeContext)

    return(
    <div>
        <h1>Sobre nós</h1>
         <p>O valor do Context é : {contextValue}</p> 
        <Link href="/"><a>Voltar</a></Link>
    </div>
)}