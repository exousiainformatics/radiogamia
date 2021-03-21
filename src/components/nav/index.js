import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faImages, faSearchPlus, faCaretSquareDown, faCheckSquare } from '@fortawesome/free-solid-svg-icons'
export default class index extends Component {
    render() {
        return (
            <Container fluid className="navContainer">
                <Row>
                    <Col xs={2} className="p-2">
                        <h3>Radiogamia</h3>
                    </Col>
                    <Col xs={6} className="offset-1 p-2 mt-2">
                        <Row>
                            <Col xs={2}>
                                <Row>
                                    <Col xs={6}>
                                        <Row>
                                            <Col xs={10} className="arrowContainer">
                                                <div className=""><FontAwesomeIcon icon={faArrowLeft} /></div>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={6}>
                                        <Row>
                                            <Col xs={10} className="arrowContainer">
                                                <div className=""><FontAwesomeIcon icon={faArrowRight} /></div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={2} className="offset-1">
                                <FontAwesomeIcon icon={faImages} size="2x"/>
                            </Col>
                            <Col xs={2}>
                                <FontAwesomeIcon icon={faSearchPlus} size="2x"/>
                            </Col>
                            <Col xs={3}>
                                <h5>Show Report</h5>
                            </Col>
                            <Col xs={2}>
                                <FontAwesomeIcon icon={faCaretSquareDown} size="2x"/>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={2} className="offset-1 p-2 mt-2">
                       <h6>
                           <span>Hi </span>
                           <span>Avatar</span>
                       </h6>
                    </Col>
                </Row>
            </Container>
        )
    }
}
