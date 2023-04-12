import React from 'react'
import Html1 from '../Html1/Html1'
import { PageContext } from '../../Context/Context'
import Html2 from '../Html2/Html2';
import Html3 from '../Html3/Html3';
import { useContext } from 'react';
import PageNoteFound from '../PageNoteFound';


export default function Template() {
    const {selectpage,setselectpage} = useContext (PageContext);
    return (
        <div className=' col-md-12 p-0'>
            <div className="row">
                {selectpage.template1 === 'one' ? <Html1/> : selectpage.template2 === 'two' ? <Html2/> : selectpage.template3 === 'three' ? <Html3/> : <PageNoteFound/>}
                {/* <Html1/> */}
            </div>
        </div>
    )
}
