import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const AddTaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [deadline, setDeadline] = useState("");
  const [status, setStatus] = useState("Need to start");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;

    onAdd({
      id: Date.now(),
      title,
      assignedTo,
      deadline,
      status,
      description: "",
      team: "Sample Team",
    });

    setTitle("");
    setAssignedTo("");
    setDeadline("");
    setStatus("Need to start");
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Row className="g-2">
        <Col md={4}>
          <Form.Control
            placeholder="Task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Col>
        <Col md={3}>
          <Form.Control
            placeholder="Assigned to"
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
          />
        </Col>
        <Col md={3}>
          <Form.Control
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </Col>
        <Col md={2}>
          <Form.Select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>Need to start</option>
            <option>In Progress</option>
            <option>Completed</option>
          </Form.Select>
        </Col>
      </Row>
      <Button type="submit" className="mt-2">
        Add Task (demo)
      </Button>
    </Form>
  );
};

export default AddTaskForm;
