import React from "react";
import { Row, Col, Card, ListGroup } from "react-bootstrap";

const HomePage = () => {
  return (
    <Row>
      <Col md={8}>
        <Card>
          <Card.Body>
            <Card.Title>Welcome to Team To-Do</Card.Title>
            <Card.Text>
              This app helps users organize projects into teams and break down
              work into tasks with deadlines. 
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default HomePage;
