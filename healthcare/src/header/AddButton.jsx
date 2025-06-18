import React from 'react'
import Styles from "./headerBar.module.css"
import { IoAddCircleSharp } from "react-icons/io5";
const AddButton = () => {
  return (
    <div id={Styles.add}>
          <IoAddCircleSharp id={Styles.button}/>
        </div>
  )
}

export default AddButton
