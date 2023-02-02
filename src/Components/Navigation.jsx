import React, {useState} from 'react'
import NavBar from './NavBar'
import Drawer from './Drawer';
import { routes } from '../const';

const Navigation = () => {
    // console.log(routes);
    const [isOpen,setIsOpen]= useState(false);

    const toggledrawer=()=>{
        setIsOpen(!isOpen);
    }

  return (
    <>
    <Drawer routes={routes} isOpen={isOpen} toggledrawer={toggledrawer}></Drawer>
    <NavBar routes={routes} toggledrawer={toggledrawer}></NavBar>
    </>
  )
}
//okok
export default Navigation   