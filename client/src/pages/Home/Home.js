import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Layout";
import Header from "../../components/Header";
import Form from "../../components/Form";
import Panel from "../../components/Panel";
import Footer from "../../components/Footer";

class Home extends Component {
    state = {

    }
    // Need to add app logic

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <Header />
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <Panel title="Search">
                            <Form
                            // insert change handlers here
                            />
                        </Panel>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <Panel title="Results">
                        
                        </Panel>
                    </Col>
                </Row>
                <Footer/>
            </Container>
        );
    }
}


export default Home;