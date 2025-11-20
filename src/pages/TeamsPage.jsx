import React from "react";
import { Row, Col } from "react-bootstrap";
import TeamCard from "../components/TeamCard.jsx";
import { sampleTeams } from "./sampleData.jsx";

const TeamsPage = () => {
  return (
    <>
      <h2 className="mb-3">Teams</h2>
      <Row>
        {sampleTeams.map((team) => (
          <Col md={6} key={team.id}>
            <TeamCard team={team} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default TeamsPage;
