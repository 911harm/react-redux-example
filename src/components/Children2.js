import React from 'react'
// import Nieto from './Nieto'
import { useSelector } from 'react-redux';
var ChildStyle = {
    height: "200px"
}
export default function Children2() {
    const state = useSelector(store => store)
    return (
        <div style={ChildStyle} className="col-md-5 mx-auto text-white bg-secondary text-center mt-5">
            {state.right ?
                (<h1>{state.right}</h1>) :
                (<h1>right</h1>)}
            {/* <Nieto></Nieto> */}
        </div>
    )
}