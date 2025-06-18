import Styles from "./headerBar.module.css"
import React from 'react'
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div id={Styles.search}>
      <input type="text"  placeholder="Search"/>
      <IoSearch id={Styles.btn}/>
    </div>
  )
}

export default SearchBar
