import Axios from 'axios';
import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

function CreateCompany() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [img, setImg] = useState(null);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(address);
        console.log(img);
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        Axios.post(
            "/api/users/company",
            {name:name,address:address,img:img}
            ,config
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
                <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" onChange={e => setName(e.target.value)} placeholder="COMPANY NAME" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="text" onChange={e => setAddress(e.target.value)} placeholder="ADDRESS" />
                    </Form.Group>
                    <Form.Group className="position-relative mb-3">
                        <Form.Label>Company Logo</Form.Label>
                        <Form.Control
                        type="file"
                        required
                        name="file"
                        onChange={e=> setImg(e.target.value)}
                        // isInvalid={!!errors.file}
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                        {/* {errors.file} */}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default CreateCompany
