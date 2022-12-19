import React from 'react'
import './Blog.module.css';
import { FiYoutube } from 'react-icons/fi';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Blog = () => {
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
                <h2 className='culture__app-header' style={{ paddingTop: "40px" }}>Girl Just Wanna Have Fun</h2>
                <p className='culture__app-text' style={{ paddingTop: "5px", paddingBottom: '20px', fontWeight: '500', fontSize: '20px' }}>

                    We meticulously recruit ambitious young leaders who value personal growth, professional
                    development, and positive social change.Every candidate who is invited to
                    join our global team is special not so much for what they do, but for who
                    they are.We celebrate difference and believe in the collective power that
                    is created when individuals are free to be authentic and true to themselves.
                    Our genuine care and love for one another inspires us to work and  play
                    harder than everyone else. Our happiness is infectious because it is real.
                </p>

                <a href='https://www.youtube.com/@GirlPowerTalk' target=" "><span style={{ color: 'red' }}>Know More <AiOutlineArrowRight/> <FiYoutube/> </span></a>
            </div>
            <div>
                <div style={{ display: "flex",marginTop:'80px'}}>
                    <iframe width="460" height="315" src="https://www.youtube.com/embed/mouDXrNfuXw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    {/* <iframe width="360" height="215" src="https://www.youtube.com/embed/mouDXrNfuXw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

                </div>
                {/* <div style={{ display: "flex",gap:'5px' }} >
                    <iframe width="360" height="215" src="https://www.youtube.com/embed/mouDXrNfuXw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    <iframe width="360" height="215" src="https://www.youtube.com/embed/mouDXrNfuXw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                </div> */}
            </div>
        </div>
    )
}

export default Blog
