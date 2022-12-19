import React from 'react'
import './Vision.module.css';

const Vision = () => {
  return (
      <div className="culture-container"
          style={{
              display: "flex",
              paddingInline: "100px",
              justifyContent: "space-evenly",
              flexWrap: "wrap",

          }}

          
      >

          <div>
              <div >
                  <img style={{ marginTop: '20px', marginBottom: '20px' ,width:'500px',height:'500px'}}
                      className="culturetwoImage"
                      src="https://girlpowertalk.com/wp-content/uploads/2022/02/home-about-girl-power-talk-min.png"
                  />
              </div>
          </div>


          <div style={{ flexBasis: "600px" }}>
              <h2 className='culture__app-header' style={{ paddingTop: "40px", color: 'red' }}>Our Vision</h2>
              <p className='culture__app-text' style={{ paddingTop: "5px", paddingBottom: '20px', fontWeight: '500', fontSize: '20px' }}>
                  Girl Power Talk is passionate about elevating young women to become global leaders who are recognized for their myriad of 
                  talents and contributions. We believe that through education, opportunity, and the support of empathetic male allies, 
                  girls and women will advance beyond gender roles, aspire to new levels of achievement and reshape our society. 
                  Through our innovative ecosystem, we are changing the world of work for the better and providing all voices equal 
                  weight in a new narrative defining the future.
              </p>
          </div>
          
      </div>
  )
}

export default Vision