import React from 'react'
import CreateForm from '../Form/CreateForm'
import Template from '../Template/Template'

export default function Home() {
    return (
       <div>
        <div className="row">
            <div className="col-md-3">
                <CreateForm/>
            </div>
            <div className="col-md-9">
                <Template/>
            </div>
        </div>
       </div>
    )
}
