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
       this.state({clientes:res.data});
     })
     .catch( error =>{
       console.log(error.status)
       console.log("error hola")
     })
   }

   render() {
     return(
     <div>
      <h1>AbogAPI</h1>
     </div>
   )}
 }
