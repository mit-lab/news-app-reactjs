import React from 'react';
import { Switch, Route } from "react-router-dom"
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Row, Col, Divider } from 'antd';


// components
import GetMenu from './GetMenu';
import GetList from './GetList';
import styled from 'styled-components';


const GET_PATH = gql`
  {
    categories {
      slug
    }
  }
`;

function GetSwitch() {
  const { loading, error, data } = useQuery(GET_PATH);

    if (loading) return <p></p>;
    if (error) return <p>Error :(</p>;

  return (
    <Switch>
      
      {/* автоматическое создание Route с path */}
      {data.categories.map(( item ) => (
        <Route path={`/${item.slug}`}>
          <Row>
            <Col flex="200px"><GetMenu /></Col>
            <Col flex="800px"><GetList /></Col>
          </Row>
        </Route>
      ))} 

        {/* Route c маршрутом создан временно, удалю */}
        <Route path="/">
          <Row>
            <Col flex="200px"><GetMenu /></Col>
            <Col flex="800px"><GetList /></Col>
          </Row>
        </Route>

  </Switch>
  )
}


export default GetSwitch;
