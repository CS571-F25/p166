import React from "react";
import { Card, Badge } from "react-bootstrap";

const statusVariant = (status) => {
  if (status === "In Progress") return "warning";
  if (status === "Completed") return "success";
  return "info";
};

const TaskCard = ({ task }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{task.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Assigned to: {task.assignedTo} | Due: {task.deadline}
        </Card.Subtitle>
        <Badge bg={statusVariant(task.status)} className="mb-2">
          {task.status}
        </Badge>
        <Card.Text className="mt-2">{task.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TaskCard;
