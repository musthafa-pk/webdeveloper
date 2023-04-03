import React, { useState } from 'react'
import CreateForm from '../Form/CreateForm'
import Template from '../Template/Template'

export default function Home() {
const [data,setdata] = useState('');

    return (
       <div>
        <div className="row">
            <div className="col-md-3">
                <CreateForm onQuery={setdata}/>
            </div>
            <div className="col-md-9">
                <Template data={data}/>
            </div>
        </div>
       </div>
    )
}
