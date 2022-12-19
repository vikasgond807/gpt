import React ,{useState} from 'react'
import {motion} from 'framer-motion';
import './Navbar.scss';
import {HiX,HiMenu} from 'react-icons/hi'

import logo from '../../assests/logo.png'

const Navbar = () => {

    const [toggle, setToggle] = useState(false)
  return (
    <div className='navbar'>
        <div className="navbar-logo">
              <img src={logo} alt='' />
        </div>

          <ul className='navbar-links'>
              {['Join Us','Apply Now','Contact']
                  .map((item) => (
                      <li className="app__flex p-text" key={`link-${item}`}>
                          <div />
                          <a href={`#${item}`}> {item} </a>

                      </li>
                  )

                  )
              }

          </ul>


          <div className="navbar-menu">
              <HiMenu onClick={() => setToggle(true)} />

              {toggle && (
                  <motion.div
                      whileInView={{ x: [300, 0] }}
                      transition={{ duration: 0.85, ease: 'easeOut' }}
                  >
                      <HiX onClick={() => setToggle(false)} />
                      <ul>
                          {['About Us','Our Leaders','Our Values','Press','Events','Merch','Videos','Contact Us'].map((item) => (
                              <li key={item}>
                                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                                      {item}
                                  </a>
                              </li>
                          ))}
                      </ul>
                  </motion.div>
              )}
          </div>




        
    </div>
  )
}

export default Navbar