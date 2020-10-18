import React from 'react'
import { useSelector } from 'react-redux'

export default function Headeer() {
    let state = useSelector(state => state)
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="#">
                    <img src="https://www.freepngimg.com/thumb/github/1-2-github-free-png-image.png" width={30} height={30} alt="" loading="lazy" />
                </a>
            </nav>
            {state.title ?
                (<h1>{state.title}</h1>) :
                (<h1>Titulo de la Pagina</h1>)}
        </div>
    )
}
