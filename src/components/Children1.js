import React from 'react';
import { useSelector } from 'react-redux';
var ChildStyle = {
    height: "200px"
}
export default function Children1() {
    const state = useSelector(store => store)
    return (
        <div style={ChildStyle} className="col-md-5 mx-auto text-white bg-secondary text-center mt-5">
            {state.left ?
                (<h1>{state.left}</h1>):
                (<h1>left</h1>)}

        </div>
    )
}
