import { indigo } from '@material-ui/core/colors';
import React from 'react'
import '../App.css';
import { SidebarData } from './SidebarData';

function sidebar() {
    return (
        <div className= "Sidebar">
            <ul>
                {
                    SidebarData.map((val,key)=>{
                        return (
                            
                            <li  key={key} onClick={()=>{ window.location.pathname= val.link}}>
                                {"  "}
                                <div className="sidebarlist"> {val.icon}</div>{"  "}
                                <div>
                                    {"  "+val.title}
                                </div>
                                
                                </li>
                        );
                        
                    })
                }
           </ul>
        </div>
    )
}

export default sidebar
