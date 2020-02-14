import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';
const CardLawyer = (props) => {
  return (
    <CardGroup>
      <Card>
        <CardImg top width="100%" src="https://concepto.de/wp-content/uploads/2019/10/derecho-fiscal-tributario-e1571610602568.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Fiscal</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>Ver abogaods</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://teoriadelderecho.com/wp-content/uploads/2019/07/conceptos-importantes-del-Derecho-Civil.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Civil</CardTitle>

          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Ver abogaods</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://concepto.de/wp-content/uploads/2014/02/derecho-laboral-1-e1551651916418.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Laboral</CardTitle>

          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>Ver abogaods</Button>
        </CardBody>
      </Card>
    </CardGroup>
  );
};

export default CardLawyer;
