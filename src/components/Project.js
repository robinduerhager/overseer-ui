import React, { Component } from "react";
import { Button, Grid, Row, Col, Clearfix } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

const Project = props => {
  return (
    <Link to={{ pathname:'/Events', state: { projectID: props.projectID, rulebook: props.rulebook } }} style={{ textDecoration: "none" }}>
      <div className="Project">
        <Grid>
          <Row className="">
            <Col md={6} mdPush={6}>
              <code>
                {
                  <center>
                    <div className="ProjectName">
                      <h4>{props.name}</h4>
                    </div>
                  </center>
                }
              </code>
            </Col>
            <Col md={6} mdPull={6}>
              <code>
                {
                  <center>
                    <div className="ProjectType">
                      <h4>{props.type}</h4>
                    </div>
                  </center>
                }
              </code>
            </Col>
          </Row>
        </Grid>
      </div>
    </Link>
  );
};

export default Project;
