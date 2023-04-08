import React, { useState } from 'react'
import CreateForm from '../Form/CreateForm'
import Template from '../Template/Template'
import Mainbar from '../Mainbar/Mainbar';
// import { FormContext } from '../../Context/Context'

export default function Home() {
    // const [data,setdata] = useState('');
    const [data, setdata] = useState('');

    return (

        <div>
            <Mainbar />
            <div className="row m-0">
                {/* <FormContext.Provider value={{data,setdata}}> */}
                <div className="col-md-3 side-scroll">
                    {/* <CreateForm onQuery={setdata}/> */}
                    <CreateForm />
                </div>
                <div className="col-md-9 side-scroll">
                    {/* <Template data={data}/> */}
                    <Template />
                </div>
                {/* </FormContext.Provider> */}
            </div>
        </div>

    )
}
