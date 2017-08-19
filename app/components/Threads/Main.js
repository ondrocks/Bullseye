import React from 'react';
import { Row, Col } from 'react-materialize';
import MapContainer from '../Map/MapContainer';
import Nav from '../Nav/Nav';
import AddNew from './AddNew';
import Threads from './Threads';


const ThreadsMain = () => {
  return (
    <Row>
      <Col l={5} style={{ paddingRight: 0, paddingLeft: 0 }}>
        <MapContainer />
      </Col>

      <Col l={7} style={{ paddingRight: 0, paddingLeft: 0 }}>
        <Row>
          <Nav />
        </Row>
        <Row>
          <AddNew />
        </Row>
        <Row>
          <Threads />
        </Row>
      </Col>
    </Row>
  );
};

export default ThreadsMain;