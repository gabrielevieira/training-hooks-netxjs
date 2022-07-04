import Link from 'next/link'
import HookUseState from '../components/HookUseState'

export default function Contato() {
    return (
        <div>
            <h1>Contato</h1>
            <HookUseState/>
            <Link href="/"><a>Voltar</a></Link>
        </div>
    )}