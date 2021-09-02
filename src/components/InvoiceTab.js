import { Button, Col, Row } from "react-bootstrap"
import './InvoiceTab.css'

function InvoiceTab(item) {
    const handleClick = (e) => {
        //Payment Gateway to be linked here
    }

    return (
        <div>
            <Row className="invoice-list">
                <Col>{item.id}</Col>
                <Col>{item.amount}</Col>
                <Col>
                    <Button onClick={handleClick} disabled={item.isPaid}>{item.isPaid ? 'Paid' : 'Pay'}</Button></Col>
                <Col>Download Link</Col>
            </Row>
        </div>
    )
}

export default InvoiceTab
