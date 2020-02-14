import React,{Component} from "react"
import axios from "axios"

 export default class ContainerAbogados extends Component{
   state = {
      clientes : []
   }
   componentDidMount(){
     console.log("Componente montado");
     axios.get("https://boiling-peak-23962.herokuapp.com/clientes/all")
     .then(res => {
       console.log('Data de peticion: \n', res.data);
       this.setState({clientes:res.data});
     })
     .catch( error =>{
       console.log(error)
       console.log("error hola")
     })
   }

   renderLawyers(){
    return this.state.clientes.map( abogado => {
      return <h1>{abogado.nombre}</h1>
    })
   }

   render() {
     return(
     <div>
        { this.renderLawyers( ) }
     </div>
   )}
 }
