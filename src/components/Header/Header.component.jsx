import * as React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Header.stylesheet.css';

export default function Header() {

    return(
        <Navbar className= "Container">
            <Nav className="navContainer">
                <Nav.Link className="titulo" as={Link} to='/'><h1>Pé de Fava</h1></Nav.Link>
                <Nav.Link as={Link} to='/Sobre'><h2>Sobre</h2></Nav.Link>
                <Nav.Link as={Link} to='/Empresas'as={Link}><h2>Empresas</h2></Nav.Link>
                <Nav.Link as={Link} to='/Entrar'><h2>Entrar</h2></Nav.Link>
            </Nav>
        </Navbar>
    );
}