import * as React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Header.stylesheet.css';

export default function Header() {

    return(
        <Navbar className= "Container">
            <Nav className="navContainer">
                <Nav.Link className="titulo" as={Link} to='/'><h1 className="headerText">Pé de Fava</h1></Nav.Link>
                <Nav.Link as={Link} to='/Sobre'><h5 className="headerText">Sobre</h5></Nav.Link>
                <Nav.Link as={Link} to='/Empresas'as={Link}><h5 className="headerText">Empresas</h5></Nav.Link>
                <Nav.Link as={Link} to='/Entrar'><h5 className="headerText">Entrar</h5></Nav.Link>
            </Nav>
        </Navbar>
    );
}