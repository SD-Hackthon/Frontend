import React, { useState} from 'react'
import { Container, Form , Button, Dropdown,  Col, Row} from 'react-bootstrap';
// import { Multiselect } from 'multiselect-react-dropdown';
import Axios from 'axios';
import './createInvoice.css'
import { useHistory } from 'react-router';

const data = [
    {
        name: "abc",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ullam repudiandae provident, deleniti ratione ipsum sunt porro deserunt",
        unit:"pack",
        quantity: 2,
        price: 20,
        imgurl: "https://micro-cdn.sumo.com/image-resize/sumo-convert?uri=https://media.sumo.com/storyimages/ef624259-6815-44e2-b905-580f927bd608&hash=aa79d9187ddde664f8b3060254f1a5d57655a3340145e011b5b5ad697addb9c0&format=webp"
    },
    {
        name: "abd",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ullam repudiandae provident, deleniti ratione ipsum sunt porro deserunt",
        unit:"pack",
        quantity: 4,
        price: 80,
        imgurl: "https://micro-cdn.sumo.com/image-resize/sumo-convert?uri=https://media.sumo.com/storyimages/ef624259-6815-44e2-b905-580f927bd608&hash=aa79d9187ddde664f8b3060254f1a5d57655a3340145e011b5b5ad697addb9c0&format=webp"
    },
    {
        name: "adc",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ullam repudiandae provident, deleniti ratione ipsum sunt porro deserunt",
        unit:"pack",
        quantity: 3,
        price: 60,
        imgurl: "https://micro-cdn.sumo.com/image-resize/sumo-convert?uri=https://media.sumo.com/storyimages/ef624259-6815-44e2-b905-580f927bd608&hash=aa79d9187ddde664f8b3060254f1a5d57655a3340145e011b5b5ad697addb9c0&format=webp"
    },
]

function CreateInvoice() {

    const [customerName, setCustomerName] = useState('');
    const [customerAddress, setCustomerAddress] = useState('')
    const [customerNumber, setCustomerNumber] = useState('')

    const [name, setName] = useState('');
    const [foundName, setFoundName] = useState(data);
    const [product,setProduct] = useState({
        prodName: '',
        qty: 0
    });
    const [list, setList] = useState([]);
    const [email, setEmail] = useState('');

    const history = useHistory();
    const token = localStorage.getItem('token');
    if(!token) history.push('/login');

    // For fetching data from backend
    // useEffect(() => {
    //     fetch("http://localhost:5000/")
    //     .then((res)=>res.json())
    //     .then((result)=>{
    //         setFoundName(result);
    //     },
    //     (error)=>{
    //         console.log(error);
    //     }
    //     );
    // }, []);



    const handleSelect = (e) => {
        setProduct({
            ...product,
            prodName: e.target.innerHTML
        })
        setFoundName([]);
        setName(e.target.innerHTML);
        // console.log(product.prodName);
    }

    const filter = (e) => {
        const keyword = e.target.value;
        // console.log(keyword)
        if (keyword !== '') {
            const results = data.filter((name) => {
                return name.name.toLowerCase().startsWith(keyword.toLowerCase());
            });
            setFoundName(results);
        }
        else{
            setFoundName([]);
        }
        setName(keyword);
    };

    const addItem = () => {
        const newList = list;
        newList.push(product);
        setList(newList);
        setName("")
        setFoundName([]);
        // console.log(newList)
    }

    //Posting the list
    const submitHandler = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }
        Axios.post(
            "http://localhost:5000/api/company/invoice/612f92f9e981e966b219a7cb",
            {
                clientEmail: email,
                // clientName: customerName,
                // clientAddress: customerAddress,
                // mobileNo: customerNumber,
                data: list
            }
            ,config
        )
        .then((res)=>{
            console.log(res.data);

        })
        .catch(err=>{
            console.log(err);
        })
    }

    return (
        <div className="createInvoice">
            <Container>
                <Form onSubmit={submitHandler}>
                    <Row className="g-2">
                        <Col xs={8}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Product Name" value={name} onChange={filter}/>
                            </Form.Group>

                            <Dropdown.Menu show={name.length}>
                            {foundName.map (item =>
                                    <div>
                                        <Dropdown.Item eventKey={item.id} onClick={handleSelect}>
                                            {item.name}
                                        </Dropdown.Item>
                                    </div>
                            )}
                            </Dropdown.Menu>
                        </Col>
                        <Col >
                            <Form.Control type="number" placeholder="Quantity" value={product.qty} onChange={e=>setProduct({...product, qty: e.target.value})}/>
                        </Col>
                        <Col>
                            <Button onClick={addItem}>Add</Button>
                        </Col>
                    </Row>


                    {list.map(item =>  <Row>
                        <Col>{item.prodName}</Col>
                        <Col>{item.qty}</Col>
                        </Row>)}

                    {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Recepient's Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" onChange={e=>setCustomerName(e.target.value)}/>
                    </Form.Group> */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Recepient's Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={e=>setEmail(e.target.value)}/>
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Recepient's Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter Number" onChange={e=>setCustomerNumber(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Recepient's Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" onChange={e=>setCustomerAddress(e.target.value)}/>
                    </Form.Group> */}
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default CreateInvoice
