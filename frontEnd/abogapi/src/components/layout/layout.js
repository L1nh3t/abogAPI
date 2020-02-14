import React from "react"
import NavBar from "./navbar"
import Footer from "./footer"
import CardLawyer from "./cards"


const Layout = (props) =>{
  return (
    <div>
      <div><NavBar/></div>
      <div className="imgSize"><img src="https://www.osservatorioantitrust.eu/es/wp-content/uploads/2015/10/justicia.jpg" alt="Italian Trulli"></img></div>
      <br />


      <div>
      <h1>Explora abogados en una de nuestras areas de especialidad</h1>
      <CardLawyer/>
      </div>



    </div>)



}
export default Layout
