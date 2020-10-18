import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'



export default function Nieto() {
    const state = useSelector(store => store)
    const dispatch = useDispatch()

    const Precion = () => {
        dispatch({ type: "DEL_STATE", payload: "esto se añade desde el nieto" })
    }

    useEffect(() => {
        console.log(state)

    }, [state])


    return (
        <div style={{ backgroundColor: "red", color: "white", fontWeight: "bold", height: "100px" }}>
            Soy un Nieto
            <button onClick={Precion}>clickme</button>
        </div>
    )
}
