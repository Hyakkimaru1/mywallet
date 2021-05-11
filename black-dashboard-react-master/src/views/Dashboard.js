/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { useHistory } from "react-router";
// nodejs library that concatenates classes
import {
  Card, Col, Row, CardTitle, CardText
} from 'reactstrap';

function Dashboard(props) {
  const history = useHistory();
  return (
    <>
      <div className="content">
        <Row>
          <Col sm={{ size: 'auto', offset: 1 }}>
            <Card className="mycard">
              <CardTitle>
                Actions
              </CardTitle>
              <CardText onClick={() => history.push("/user/send-transaction")}>
                <span className="cardaction">
                  <span>Send </span>
                  <span>Transaction</span>
                </span>
              </CardText>
              <CardText onClick={() => history.push("/user/mining")}>
                <span className="cardaction">
                  <span>Mining </span>
                  <span>MC coin</span>
                </span>
              </CardText>
            </Card>
          </Col>
          <Col sm={{ size: '4', offset: 1 }} style={{marginLeft: "13.666%"}}><Card className="mycard">
            <CardTitle>
              History
              </CardTitle>
            <CardText onClick={() => history.push("/user/history")}>
              <span className="cardaction">
                <span>Your </span>
                <span>Transactions</span>
              </span>
            </CardText>
          </Card></Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
