import { Button, Container } from "react-bootstrap";
import React from "react";
import Table from "react-bootstrap/Table";
import { connect } from "react-redux";
import DashboardItem from "../../components/DashbosrdItem";
import { LinkContainer } from "react-router-bootstrap";
import "../../sass/dashboard.scss"
const Dashboard = (props) => {
  return (
    <>
      <Container>
      <h1 className="text-center my-5">Admin Panel</h1>
      <LinkContainer to="/add">
      <Button  className="btn-add mb-4">Add</Button>
      </LinkContainer>
      <Table className="table-dashboard" bordered >
        <thead>
          <tr>
            <th>#</th>
            <th>Photo</th>
            <th>Title</th>
            <th>Description</th>
            <th>Date</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {props.pvalue.map((item, i) => {
           return <DashboardItem
              key={i}
              photo={item.img}
              title={item.title}
              desc={item.desc}
              date={item.date}
              count={i}
              id={item.id}
            />;
          })}
        </tbody>
      </Table>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    pvalue: state,
  };
};

export default connect(mapStateToProps)(Dashboard);