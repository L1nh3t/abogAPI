import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';

import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const CardLawyer = (props) => {
  return (
    <CardGroup>
      <Card>
        <CardImg top width="100%" src="https://concepto.de/wp-content/uploads/2019/10/derecho-fiscal-tributario-e1571610602568.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Fiscal</CardTitle>
          <CardText>Nuestros abogados en materia fiscal son de los mejores en el mercado a nivel nacional e internacional.</CardText>
            <Link to="/lawyers">
              <Button>Ver abogados</Button>
            </Link>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://teoriadelderecho.com/wp-content/uploads/2019/07/conceptos-importantes-del-Derecho-Civil.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Civil</CardTitle>

          <CardText>Nuestros abogados se distingen por el exelente servio que brindan, ya que cada cliente recibe atención personalizada.</CardText>
          <Link to="/lawyers">
              <Button>Ver abogados</Button>
            </Link>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://concepto.de/wp-content/uploads/2014/02/derecho-laboral-1-e1551651916418.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Laboral</CardTitle>

          <CardText>Tenemos un reconocido cuerpo de abogados especializados en Derecho Laboral.</CardText>
          <Link to="/lawyers">
              <Button>Ver abogados</Button>
            </Link>
        </CardBody>
      </Card>
    </CardGroup>
  );
};

export default CardLawyer;
