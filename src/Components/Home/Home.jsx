import React, { useState } from 'react'
import CreateForm from '../Form/CreateForm'
import Template from '../Template/Template'
import { FormContext } from '../../Context/Context'

export default function Home() {
    // const [data,setdata] = useState('');
    const [data, setdata] = useState('');

    return (

        <div>
            <div className="row">
                <FormContext.Provider value={{data,setdata}}>
                    <div className="col-md-3">
                        {/* <CreateForm onQuery={setdata}/> */}
                        <CreateForm />
                    </div>
                    <div className="col-md-9">
                        {/* <Template data={data}/> */}
                        <Template />
                    </div>
                </FormContext.Provider>
            </div>
        </div>

    )
}
