import React, { useState } from 'react'
import CreateForm from '../Form/CreateForm'
import Template from '../Template/Template'
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';

export default function Home() {
const [data,setdata] = useState('');

    return (
        <ScrollSync>
       <div style={{display:'flex',position:'relative',height:'300'}}>
        <div className="row">
        <ScrollSyncPane>
            <div className="col-md-3" style={{overflow:'auto'}}>
                
                <CreateForm onQuery={setdata}/>
                
            </div>
            </ScrollSyncPane>
            <ScrollSyncPane>
            <div className="col-md-9">
                
                <Template data={data}/>
                
            </div>
            </ScrollSyncPane>
        </div>
       </div>
       </ScrollSync>
    )
}
