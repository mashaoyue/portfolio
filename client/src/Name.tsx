import React from "react";
import "./styles/Name.css"

const Name = ()=>{

    return(
        <div className="name_container">
            <div>
                <h1 className="name">
                    RALPH MA
                </h1>
            </div>
            <div className="careers">
                <h2 className="full_stack">
                    FULL-STACK&nbsp;
                </h2>
                {/* &nbsp; */}
                <h2 className="developer">
                    DEVELOPER
                </h2>
                <h2 style={{opacity:0.9}} className="and">
                    ,&nbsp;
                </h2>
                <h2 className="tutor">
                    TUTOR
                </h2>
                <h2 style={{opacity:0.8}} className="and">
                    ,&nbsp;AND&nbsp;
                </h2>
                <h2 className="volunteer">
                    VOLUNTEER
                </h2>
                <h2 style={{opacity:0.7}} className="and">
                    ,&nbsp;AND&nbsp;
                </h2>
                <h2 className="gamer">
                    GAMER
                </h2>
                <div className="additional_info">
                <h2 style={{opacity:0.6}} className="and">
                    ,&nbsp;AND&nbsp;
                </h2>
                <h2 className="cashier">
                    CASHIER
                </h2>
                <h2 style={{opacity:0.3}} className="and">
                    ,&nbsp;AND&nbsp;
                </h2>
                <h2 className="musician">
                    MUSICIAN
                </h2>
                <h2 style={{opacity:0.15}} className="and">
                    ,&nbsp;AND...
                </h2>
                </div>
            </div>
        </div>
    )
}

export default Name;