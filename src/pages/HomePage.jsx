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
              work into tasks with deadlines. Right now this is an early
              prototype, but it already shows how teams and tasks will be
              organized across different pages.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4} className="mt-3 mt-md-0">
        <Card>
          <Card.Header>Current Milestone</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>✅ React Router with 3 pages</ListGroup.Item>
            <ListGroup.Item>✅ React Bootstrap styling</ListGroup.Item>
            <ListGroup.Item>✅ Primary navigation bar</ListGroup.Item>
            <ListGroup.Item>✅ 5+ reusable components</ListGroup.Item>
            <ListGroup.Item>🕒 Future: real data + auth</ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default HomePage;
