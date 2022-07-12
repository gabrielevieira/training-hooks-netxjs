import Link from 'next/link'
import HooksUseEffect from '../components/HooksUseEffect'
import HooksUseReducer from '../components/HooksUseReducer'
import HookUseState from '../components/HookUseState'

export default function conceitos() {
    return (
        <div>
            <h1>Conceitos</h1>
            <HookUseState/>
            <hr/>
            <HooksUseReducer/>
            <hr/>
            <HooksUseEffect/>
            <hr/>
            <Link href="/"><a>Voltar</a></Link>
        </div>
    )}