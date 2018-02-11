import react, { Component } from "react";
import { Col, Row, Container } from "../../components/Layout";
import Header from "../../components/Header";
import Form from "../../components/Form";
import Panel from "../../components/Panel";

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
            </Container>
        );
    }
}


export default Home;