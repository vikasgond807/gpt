import React from "react";
import "./culture.module.css";
const Culture = () => {
    return (
        <div className="culture-container"
            style={{
                display: "flex",
                paddingInline: "100px",
                justifyContent: "space-evenly",
                flexWrap: "wrap",

            }}
        >
            <div style={{ flexBasis: "600px" }}>
                <h2 className='culture__app-header' style={{ paddingTop: "40px" ,color:'red'}}>The Girl Power Talk Family</h2>
                <p className='culture__app-text' style={{ paddingTop: "5px", paddingBottom: '20px' ,fontWeight:'500' ,fontSize:'20px' }}>
                    We meticulously recruit ambitious young leaders who value personal growth, professional
                    development, and positive social change. Every candidate who is invited to
                    join our global team is special not so much for what they do, but for who 
                    they are. We celebrate difference and believe in the collective power that 
                    is created when individuals are free to be authentic and true to themselves.
                    Our genuine care and love for one another inspires us to work and  play
                    harder than everyone else. Our happiness is infectious because it is real.
                </p>
            </div>
            <div>
               <div>
                    <img style={{marginTop:'20px',marginBottom:'20px'}}
                        className="culturetwoImage"
                        src="https://girlpowertalk.com/wp-content/uploads/2022/06/Sheroes.png"
                    />
                </div>
            </div>
        </div>
    );
};

export default Culture;



