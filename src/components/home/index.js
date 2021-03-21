import React, { Component } from 'react'
import { Container, Row, Col, Image, Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faImages, faSearchPlus, faCaretSquareDown, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import First from '../../assets/images/Picture1a.jpg';
import Image1 from '../../assets/images/Picture1.jpg';
import ZoomImage from '../zoomImage';
import Nav from '../nav';
const data = [
    {
        image: Image1,
        compImage: First,
        report: 'The Radiological Society of North America (RSNA) has developed a set of templates for structured reporting of radiology results. To measure how much of the content of conventional narrative ("free-text") reports is covered by the concepts included in the RSNA reporting templates, we selected five reporting templates that represented a variety of imaging modalities and organ systems. From a sample of 8,275 consecutive, de-identified radiology reports from an academic medical center, we identified one corresponding imaging procedure code for each reporting template. The reports were annotated with RadLex and SNOMED CT terms using the BioPortal Annotator web service. The reporting templates we examined accounted for 17 to 49 % of the concepts that actually appeared in a sample of corresponding radiology reports.',
        width: '50%',
        compWidth: '80%'
    }
]
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setShow: false,
            isCompare: false,
            zoom: false
        }
    }
    handleSetShow = () => {
        this.setState({
            setShow: true
        })
    }
    handleSetCompare = () => {
        if (!this.state.isCompare) {
            this.setState({
                isCompare: true
            })
        } else if (this.state.isCompare) {
            this.setState({
                isCompare: false
            })
        }
    }
    handleSetZoom = () => {
        if (!this.state.zoom) {
            this.setState({
                zoom: true
            })
        } else if (this.state.zoom) {
            this.setState({
                zoom: false
            })
        }
    }
    render() {
        return (
            <>
                <div className="navContainer">
                    <Row>
                        <Col xs={3} className="p-2 text-center">
                            <h1 className="logoText">Radiogamia</h1>
                        </Col>
                        <Col xs={6} className="offset-1 p-2 mt-2">
                            <Row>
                                <Col xs={2}>
                                    <Row>
                                        <Col xs={6}>
                                            <Row>
                                                <Col xs={10} className="arrowContainer" title="Prev">
                                                    <div className=""><FontAwesomeIcon icon={faArrowLeft} /></div>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col xs={6}>
                                            <Row>
                                                <Col xs={10} className="arrowContainer" title="Next">
                                                    <div className=""><FontAwesomeIcon icon={faArrowRight} /></div>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={2} className="offset-1"
                                    onClick={this.handleSetCompare}
                                    style={{ cursor: 'pointer' }} title="Compare">
                                    <FontAwesomeIcon icon={faImages} size="2x" />
                                </Col>
                                <Col xs={2} onClick={this.handleSetZoom} style={{ cursor: 'pointer' }} title="Zoom">
                                    <FontAwesomeIcon icon={faSearchPlus} size="2x" />
                                </Col>
                                <Col xs={2} title="Different View">
                                    <FontAwesomeIcon icon={faCaretSquareDown} size="2x" />
                                </Col>
                                <Col xs={3} onClick={this.handleSetShow} style={{ cursor: 'pointer' }} title="Show Report">
                                    <FontAwesomeIcon icon={faFileAlt} size="2x" />
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={1} className="offset-1 p-2 mt-2">
                            <h6>
                                <span>Hi </span>
                                <span>Avatar</span>
                            </h6>
                        </Col>
                    </Row>
                </div>
                <Container fluid>
                    <Container fluid>
                        <>
                            {!this.state.zoom ? (
                                <>
                                    {!this.state.isCompare ? (
                                        <Row>
                                            <Col>
                                                {data.map((data, index) => (
                                                    <Image src={data.image} width={data.width} />
                                                ))}
                                            </Col>
                                        </Row>
                                    ) : (
                                            <>
                                                {data.map((data, index) => (
                                                    <Row>
                                                        <Col xs={6}>
                                                            <Image src={data.image} width={data.compWidth} />
                                                        </Col>
                                                        <Col xs={6}>
                                                            <Image src={data.compImage} width={data.compWidth} />
                                                        </Col>
                                                    </Row>
                                                ))}
                                            </>
                                        )}
                                </>
                            ) : (
                                    <ZoomImage data={data} />
                                )}
                        </>
                        <>
                            {this.state.setShow ? (
                                <Modal
                                    size="xl"
                                    aria-labelledby="contained-modal-title-vcenter"
                                    centered
                                    show={this.state.setShow}
                                    onHide={() => this.setState({ setShow: false })}
                                    style={{ backgroundColor: 'transparent', maxHeight: '100%' }}
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title id="contained-modal-title-vcenter" className="modalHead">
                                            Detail View
                                </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>

                                        {data.map((data, index) => (
                                            <Row>
                                                <Col xs={6} style={{ borderRight: '1px solid', borderColor: 'rgba(233, 222, 222, 0.699)', textAlign: 'center' }}>
                                                    <Row>
                                                        <Col xs={12}>
                                                            <Image src={data.image} />
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col xs={6} style={{ textAlign: 'center' }}>
                                                    <Row>
                                                        <Col xs={12}>
                                                            <span className="modalSubHead">Report</span>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col xs={12}>
                                                            <p>{data.report}</p>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        ))}
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button onClick={() => this.setState({ setShow: false })}>Close</Button>
                                    </Modal.Footer>
                                </Modal>
                            ) : (
                                    <span></span>
                                )
                            }
                        </>
                    </Container>
                </Container>
            </>
        )
    }
}
