import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
export default class index extends Component {
    render() {
        return (
            <Container fluid className="containerBody bg-dark">
                <p className="text-white pt-5 headText logoText">Radiogamia</p>
                <p className="text-white"> Login With</p>
                <br></br>
                <Row>
                    <Col xs={6} className="offset-3">
                        <Row>
                            <Col>
                                
                                 <GoogleLogin
                                    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                                    buttonText="Login"
                                    cookiePolicy={'single_host_origin'}
                                />
                            </Col>
                            <Col>
                                <FacebookLogin
                                    appId="1088597931155576"
                                    autoLoad={true}
                                    fields="name,email,picture"
                                    className="kep-login-facebook"
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <br></br>
                <br></br>
                <p className="text-white">
                    <Link to="/home" style={{ textDecoration: 'none' }} className="text-white"> Skip</Link> </p>
            </Container>
        )
    }
}
