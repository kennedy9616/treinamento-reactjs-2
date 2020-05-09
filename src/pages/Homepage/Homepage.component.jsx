import * as React from 'react';
import {Jumbotron, Button, Container, ButtonGroup, } from 'react-bootstrap';
import RestaurantList from '../../components/RestaurantList/RestaurantList.component';
import './Homepage.stylesheet.css'
import Yelp from '../../apis/yelp.json';

export default function Homepage(){
    const [results, setResults] = React.useState([]);
    const [displayResults, setDisplayResults] = React.useState([]);

    React.useEffect(() => {
        setResults(Yelp.businesses);
        setDisplayResults(Yelp.businesses);
    }, [])

    const ordemAlfabetica = () => {
        function compare(nome1, nome2){
            if(nome1.name > nome2.name)
                return 1;
            return -1;
        }
        setDisplayResults([...results].sort(compare));
    }

    const orderByRating = () => {
        function compare(r1, r2){
            if(r1.rating > r2.rating)
                return -1;
            return 1;
        }
        setDisplayResults([...results].sort(compare));
    }

    const filterByPrice = price => {
        console.log(results);
        setDisplayResults([...results].filter(item => item.price === price));
    }
    const filterPais = categoriaPais => {
        function check(categoria) {
            return categoria.alias === categoriaPais;
        }
        setDisplayResults([...results].filter(
            item => item.categories.some(check)
        ));
    }
    
    return(
        <Jumbotron fluid>
            <Container className="topContainer">
                <Button onClick = {ordemAlfabetica} >
                    Ordem Alfabética
                </Button>
                <Button onClick = {orderByRating}>
                    Ordenar por avaliação
                </Button>
                <Container className="filterContainer">
                    Filtrar por preço: 
                    <ButtonGroup>
                        <Button onClick = {() => {filterByPrice('$')}}>$</Button>
                        <Button onClick = {() => {filterByPrice('$$')}}>$$</Button>
                        <Button onClick = {() => {filterByPrice('$$$')}}>$$$</Button>
                    </ButtonGroup>
                </Container>
                <Container className= "filterContainer">
                    Filtrar por País:
                    <ButtonGroup>
                        <Button onClick ={()=> {filterPais('brazilian')}}>Brasil</Button>
                        <Button onClick = {() => {filterPais('japanese')}}>Japão</Button>
                        <Button onClick = {() => {filterPais('french')}}>França</Button>
                    </ButtonGroup>
                </Container>
            </Container>
            <RestaurantList data={displayResults}/>
        </Jumbotron>
    )
}