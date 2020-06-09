import React from 'react';
import { Switch, Route,   BrowserRouter as Router,
  Link,
  useRouteMatch,
  useParams} from "react-router-dom"
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
      title
    }
    articles {
      slug
    }
  }
`;


function GetSwitch() {
  const { loading, error, data } = useQuery(GET_PATH);
  let match = useRouteMatch();


  if (loading) return <p></p>;
  if (error) return <p>Error :(</p>;
  return (
    <Router>
      <div>

        <br />
        {console.log(data.categories, 'data.categories')}
        <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", marginLeft: "33px"}}>
          {data.categories.map(( item ) => (
            <Link to={`/${item.slug}`}>{`${item.title}`}</Link>
          ))}  
        </div>

        <Switch>
            {data.categories.map(( item ) => (
              <Route path={`/${item.slug}`}>
                <Row>
                  <GetList slug={item.slug}/>
                </Row>
            </Route>
            ))}  

        </Switch>
        
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

export default GetSwitch;
