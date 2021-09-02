import React,{useState} from "react";
import './Login.css';
import axios from "axios";
import { Form,Button, Container } from "react-bootstrap";

function Login() {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    // useEffect(()=>{
    //     console.log(email);
    // },[email]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        // const token = localStorage.getItem('token');
        const config = {
            headers: {
                'Content-Type': 'application/json',
                //  Authorization: `Bearer ${token}`,
            }
        }

        axios.post(
            "/api/users/login",
            {
                email: email, password: password
            },
            config
        )
        .then((res)=>{
            console.log(res.data);
            localStorage.setItem('token', res.token);
        })
        .then(err=>{
            console.log(err);
        })
    };

    return (
        <div className="login">
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={e=>setEmail(e.target.value)}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                    Login
                    </Button>
                </Form>
            </Container>
        </div>
    );
}

export default Login;