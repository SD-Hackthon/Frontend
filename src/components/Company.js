import React from 'react'
import { Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Company() {
    return (
        <div>
            <Container>
                <Link to="/listprod">
                    List Prod
                </Link>
                <Link to="/createinvoice">
                    Create Invoice
                </Link>
            </Container>
        </div>
    )
}

export default Company
