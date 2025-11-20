import React from "react";
import { Card, Badge } from "react-bootstrap";

const TeamCard = ({ team }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>
          {team.name}{" "}
          <Badge bg="secondary">{team.members.length} members</Badge>
        </Card.Title>
        <Card.Text>{team.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TeamCard;
