import * as React from 'react';
import {Card, Col,Row} from 'react-bootstrap';
import './Footer.stylesheet.css';

export default function Footer() {
  return(
        <Card.Footer className="footer">
          <Row >
            <Col>
              <h3 className="footertext">Pé de Fava</h3>
            </Col>
            <Col>
              <h6 className="footertext"> Av. São Paulo, 1 - Jardim Tranquilidade, Guarulhos - SP, 07052-161</h6>
            </Col>
            <Col>
              <h5 className="footertext">Telefone: (11) 2421-8499</h5>
            </Col>
          </Row>
        </Card.Footer>
  );
}
