import React from 'react';
import { Switch, Route } from "react-router-dom"
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Row, Col } from 'antd';



// components
import GetMenu from './GetMenu';
import GetList from './GetList';
import GetNews from './GetNews';


const GET_PATH = gql`
  {
    categories {
      slug
    }
    articles {
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
      
      {/* автоматическое создание Route с path рубрик */}
      {console.log(data.categories, 'data.categories')}
      {data.categories.map(( item ) => (
        <Route path={`/${item.slug}`}>
          <Row>
            <Col flex="200px"><GetMenu /></Col>
            <Col flex="700px"><GetList slug={item.slug}/></Col>
          </Row>
        </Route>
      ))}  

      {/* автоматическое создание Route с path отдельных статей */}
      {console.log(data.articles, 'data.articles')}
      {data.articles.map(( item ) => (
        <Route path={`/${item.slug}`}>
          <Row>
            <Col flex="200px"><GetMenu /></Col>
            <Col flex="700px"><GetNews slug={item.slug} /></Col>
          </Row>
        </Route>
      ))} 

      <Route path="/">
        <Row>
          <Col flex="200px"><GetMenu /></Col>
          <Col flex="700px"><GetList slug="all-news" /></Col>
        </Row>
      </Route>

  </Switch>
  
  )
}


export default GetSwitch;
