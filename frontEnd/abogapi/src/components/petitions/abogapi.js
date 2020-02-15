import React,{Component} from "react"
import axios from "axios"
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';
import {
  Link,
} from "react-router-dom";


 export default class ContainerAbogados extends Component{
   state = {
      clientes : []
   }
   componentDidMount(){
     console.log("Componente montado");
     axios.get("https://boiling-peak-23962.herokuapp.com/abogados/all")
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
        return(
          <Card>
            <CardBody>
              <CardTitle>{abogado.nombre}</CardTitle>
              <CardText>Nuestros abogados en {abogado.areaLaboral}</CardText>
                <Link to="/lawyers">
                  <Button>Contratar abogados</Button>
                </Link>
            </CardBody>
          </Card>)
    })
   }

   render() {
     return(
     <div>
        { this.renderLawyers() }
     </div>
   )}
 }
