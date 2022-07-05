import Link from 'next/link'
import HooksUseReducer from '../components/HooksUseReducer'
import HookUseState from '../components/HookUseState'

export default function Contato() {
    return (
        <div>
            <h1>Contato</h1>
            <HookUseState/>
            <hr/>
            <HooksUseReducer/>
            <hr/>
            <Link href="/"><a>Voltar</a></Link>
        </div>
    )}