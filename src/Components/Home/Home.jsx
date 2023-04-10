import React, { useState,useEffect } from 'react'
import CreateForm from '../Form/CreateForm'
import Template from '../Template/Template'
import Mainbar from '../Mainbar/Mainbar';
import ClipLoader from 'react-spinners/ClipLoader';
// import { FormContext } from '../../Context/Context'

export default function Home() {
    // const [data,setdata] = useState('');
    const [data, setdata] = useState('');

    const[loading,setloading] = useState(false);

    useEffect(()=>{
        setloading(true)
        setTimeout(()=>{
            setloading(false)
        },1000);
    },[])

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
                    {loading ? (
                        <div className="loader">
                             <ClipLoader size={30} color={'#f37f24'} loading={loading}/>
                        </div>
                   ):(<Template />)}
                    
                </div>
                {/* </FormContext.Provider> */}
            </div>
        </div>

    )
}
