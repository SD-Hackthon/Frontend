import Axios from 'axios';
import { Container,  Row, Button, Form } from 'react-bootstrap'
import ProdCard from './ProdCard';
import {useState} from 'react';

function ListProducts() {
    //Extract the products list
    const [name,setName]=useState();
    const [price,setPrice] =useState();

    const data = [
        {
            name: "Product 1",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ullam repudiandae provident, deleniti ratione ipsum sunt porro deserunt",
            unit:"pack",
            quantity: 2,
            price: 20,
            imgurl: "https://micro-cdn.sumo.com/image-resize/sumo-convert?uri=https://media.sumo.com/storyimages/ef624259-6815-44e2-b905-580f927bd608&hash=aa79d9187ddde664f8b3060254f1a5d57655a3340145e011b5b5ad697addb9c0&format=webp"
        },
        {
            name: "Product 2",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ullam repudiandae provident, deleniti ratione ipsum sunt porro deserunt",
            unit:"pack",
            quantity: 4,
            price: 80,
            imgurl: "https://micro-cdn.sumo.com/image-resize/sumo-convert?uri=https://media.sumo.com/storyimages/ef624259-6815-44e2-b905-580f927bd608&hash=aa79d9187ddde664f8b3060254f1a5d57655a3340145e011b5b5ad697addb9c0&format=webp"
        },
        {
            name: "Product 3",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ullam repudiandae provident, deleniti ratione ipsum sunt porro deserunt",
            unit:"pack",
            quantity: 3,
            price: 60,
            imgurl: "https://micro-cdn.sumo.com/image-resize/sumo-convert?uri=https://media.sumo.com/storyimages/ef624259-6815-44e2-b905-580f927bd608&hash=aa79d9187ddde664f8b3060254f1a5d57655a3340145e011b5b5ad697addb9c0&format=webp"
        },
    ]

    //Add a SubmitHandler
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("new product added");
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        Axios.post(
            "api/users/addproduct",
            {name:name,price:price},config
        )
        .then((res)=>{
            console.log(res.data);
        })
        .then(err=>{
            console.log(err);
        })
    }


    return (
        <div>
            <Container>
                <Row>
               {data.map(item => <ProdCard {...item}/>)}
                </Row>
                <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Product Name" onChange={e=>setName(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" placeholder="Product Price"onChange={e=>setPrice(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Add New Product
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default ListProducts
