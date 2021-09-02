import Axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import './Invoice.css';
import InvoiceTab from './InvoiceTab';
import {useState} from 'react';

const data = [
    {
        id: '1234',
        from: 'xyz',
        to: 'temp1@email.com',
        amount: 432,
        isPaid: false,
        paidToEmail: 'xyz@email.com',
        paidToNo: '8709020810',
        clientAddress : "Tumkur",
        invoiceAddress : "0."
    },
    {
        id: '1235',
        from: 'abc',
        to: 'temp2@email.com',
        amount: 1000,
        isPaid: true,
        paidToEmail: 'abc@email.com',
        paidToNo: '8709020810',
        clientAddress : "Tumkur",
        invoiceAddress : "sample.pdf"
    },
    {
        id: '1235',
        from: 'abc',
        to: 'temp2@email.com',
        amount: 1000,
        isPaid: true,
        paidToEmail: 'abc@email.com',
        paidToNo: '8709020810',
        clientAddress : "Tumkur",
        invoiceAddress : "sample.pdf"
    }
]

function Invoice() {
    const [invoice,setInvoice] = useState();



    // async componentDidMount(){
    //     const response = await fetch("/api/users/invoices")
    //     const data = await response.json();
    //     setInvoice(data);
    // }

    return (
        <div className="invoice-body">
            <Container>
                <Row>
                    <Col>Invoice ID</Col>
                    <Col>Amount</Col>
                    <Col>Payment Status</Col>
                    <Col>View/Download Receipt</Col>
                </Row>
                <div className="invoice-list">
                {data.map(item => <InvoiceTab {...item}/>)}
                </div>
            </Container>
        </div>
    )
}

export default Invoice
