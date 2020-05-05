import React, {Component} from 'react';
import { Link } from "react-router-dom";
import gql from 'graphql-tag';
import { Layout, Menu } from 'antd';
import styled from 'styled-components';
import {  NotificationOutlined } from '@ant-design/icons';
import { Query } from 'react-apollo'
import {  ReadOutlined } from '@ant-design/icons';


// styled
const Wrapper = styled.div`
  margin-top: 20px;
  position: fixed;
  width: 200px;
`

const ReadOutlinedImg = styled(ReadOutlined)`
  float: left; 
  font-size: 38px; 
  background: white;
  padding: 8px 0 0 25px;
  width: 100%;
`

const GET_LIST = gql`
query Query($slug: String ){
  categories(where: {slug: {_eq: $slug }}) { 
      slug
      name_rubric
      articles_categories {
        article {
          id
        }
      }
    }
  }
`;


const { SubMenu } = Menu;

class GetMenu extends Component {

  render(props) { 

    return (
      <Query query={GET_LIST}>
        {({ loading, error, data }) => {
        if (loading) return <div>Fetching</div>
        if (error) return <div>Error</div>

        return (
          <Wrapper>
            <Layout>
            <Link to="/">
              <ReadOutlinedImg />
            </Link>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <SubMenu key="sub3" icon={<NotificationOutlined />} title="Рубрики">
                  {data.categories.map(( item ) => (
                    <Menu.Item>
                      <Link to={`${item.slug}`}>{item.name_rubric}</Link>
                    </Menu.Item>
                  ))} 
                </SubMenu>
              </Menu>
            </Layout>
          </Wrapper>
        )

        }}
      </Query>
    )

  }
};


export default GetMenu;
