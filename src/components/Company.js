import React, { useEffect } from 'react'
import { Container, Row, Col, ListGroup} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios';
import './Company.css'
import { useHistory } from 'react-router';
import {useState} from 'react';

function Company() {
    const [companyList, setCompanyList] = useState([]);
    const history = useHistory();
    const token = localStorage.getItem('token');
    if(!token) history.push('/login');

    useEffect( () => {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }
        axios.get(`http://localhost:5000/api/company/${userId}`,config)
        .then(res => {
            console.log(res.data)
            setCompanyList(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    },[])

    return (
        <div className="company">
                <ListGroup variant="flush" className="list-group">
                    <ListGroup.Item action className="list-group-item">Cras justo odio</ListGroup.Item>
                    <ListGroup.Item action className="list-group-item">Cras justo odio</ListGroup.Item>
                    <ListGroup.Item action className="list-group-item">Cras justo odio</ListGroup.Item>
                    <ListGroup.Item action>Cras justo odio</ListGroup.Item>
                </ListGroup>
            <Container className="links">
                <Row>
                    <Col>
                        <Link to="/listprod">
                            List Prod
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/createinvoice">
                            Create Invoice
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Company
