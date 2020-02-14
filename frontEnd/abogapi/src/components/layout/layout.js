import React from "react"
import NavBar from "./navbar"
import Footer from "./footer"
import CardLawyer from "./cards"


const Layout = (props) =>{
  return (
    <div>
      <div><NavBar/></div>
      <div className="imgSize">
      <img class="theIMG" src="https://www.osservatorioantitrust.eu/es/wp-content/uploads/2015/10/justicia.jpg" alt="Italian Trulli"></img>
      <div class="centered">
        <h2>Abogados a un click</h2>
        <p>Encuentra el abogado ideal para tus necesidades legales</p>
      </div>
      </div>
      <br />
      <div>
      <h1>Explora abogados en una de nuestras areas de especialidad</h1>
      <CardLawyer/>
      </div>
      <br />
      <br />
      <br />

      <div class="theFooter">
      <Footer/>
      </div>



    </div>)



}
export default Layout
