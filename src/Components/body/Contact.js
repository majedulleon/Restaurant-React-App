import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            telnum: "",
            email: "",
            agree: false,
            contactType: "tel",
            message: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = (event) => {
        let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        let name = event.target.name;
        this.setState({
            [name]: value
        })
    }


    render() {
        return (
            <div className="container">
                <div className="row row-content" style={{ paddingLeft: "20px", textAlign: "left" }}>
                    <div className="row-12">
                        <h3>Please Provide Us Your Feedback</h3>
                    </div>
                    <div className="row-12 col-md-7">
                        <Form>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" name="firstname" placeholder="First Name"
                                        value={this.state.firstname} />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" name="lastname" placeholder="Last Name"
                                        value={this.state.lastname} />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Telephone Number</Label>
                                <Col md={10}>
                                    <Input type="tel" name="telnum" placeholder="Telephone Number"
                                        value={this.state.telnum} />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="agree" checked={this.state.agree} /> <strong>MAY
                                                WE CONTACT YOU ?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Input type="select" name="contactType" value={this.state.contactType}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" name="message" value={this.state.message} rows="12" />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>

                        </Form>
                    </div>

                </div>
            </div>
        )
    };
}

export default Contact;