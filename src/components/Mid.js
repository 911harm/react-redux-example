import React from 'react'
import Children1 from './Children1'
import Children2 from './Children2'

export default function Mid() {
    return (
        <div className="col-md-8 mx-auto text-primary bg-dark text-center mt-5 d-flex justify-content-between p-4">
            <Children1></Children1>
            <Children2></Children2>
        </div>
    )
}
