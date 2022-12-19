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
        <h2 className='culture__app-header' style={{ paddingTop: "40px" ,color:'red'}}>Our Unique Culture</h2>
        <p className='culture__app-text' style={{ paddingTop: "5px", paddingBottom: '20px', marginTop: '20px', marginBottom: '20px', fontWeight: '500', fontSize: '20px' }}>
          We believe that our careers are part of how we influence the world around us, so we strive to maintain a culture that allows each person to find purpose in their work. Our worth is determined not simply by our remuneration but also by the rewards we get from creating positive change for others. Our workplace is a happy one;
           we encourage our team members to maximize their work-life 
           balance and to see their colleagues as a kind of extended 
           familial support system. We love coming to work at Girl Power 
           Talk because it is our second home.
        </p>
      </div>
      <div >
        <div style={{ display: "flex" }}>
          <img width='300px' height='280px'
            className="cultureImage"
            src="https://girlpowertalk.com/wp-content/uploads/2022/07/rachita-receiving-award-1.png"
          />
          <img width='300px' height='280px'
            className="cultureImage"
            src="https://girlpowertalk.com/wp-content/uploads/2022/07/girls-with-cup-cakes.png"
          />
        </div>
        <div style={{ display: "flex" }}>
          <img width='300px' height='280px' 
            className="cultureImage"
            src="https://girlpowertalk.com/wp-content/uploads/2022/01/f1-corousel.jpg"
          />
          <img width='300px' height='280px' 
            className="cultureImage"
            src="https://girlpowertalk.com/wp-content/uploads/2022/06/meet-up.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Culture;



