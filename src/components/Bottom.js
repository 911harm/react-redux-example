import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTextLeft, setTextRight, setTextTitle } from '../actions'

export default function Bottom() {
    let state = useSelector(state => state)
    const dispatch = useDispatch()

    const ShowState = () => {
        console.log(state)
    }

    return (
        <div className="mt-5 pt-5">
            Edita la pagina
            <div className="form col-md-4 mx-auto">
                <div className="form-group">

                    <input placeholder="titulo" className="form-control" type="text" onChange={(e) => {
                        dispatch(setTextTitle(e))
                    }} />
                </div>
                <div className="form-group">
                    <input placeholder="left" className="form-control" type="text" onChange={(e) => {
                        dispatch(setTextLeft(e))
                    }} />
                </div>
                <div className="form-group">
                    <input placeholder="right" className="form-control" type="text" onChange={(e) => {
                        dispatch(setTextRight(e))
                    }} />
                </div>


            </div>
            <button onClick={ShowState}>Show State</button>
        </div>
    )
}
