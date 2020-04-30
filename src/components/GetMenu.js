import React from 'react';
import { Link } from "react-router-dom";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Layout, Menu, Breadcrumb } from 'antd';
import styled from 'styled-components';
import {  NotificationOutlined } from '@ant-design/icons';


// styled
const Wrapper = styled.div`
  position: fixed;
  width: 200px;
`

// components
// import Header from './Header';
// import Footer from './Footer';


const GET_LIST = gql`
  {
    categories {
      slug
      name_rubric
    }
  }
`;


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


function GetMenu () {
  const { loading, error, data } = useQuery(GET_LIST);
  if (loading) return <p>Loading</p>;
  if (error) return <p>Error :(</p>;
 
  return (
    <Wrapper>
      <Layout>
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
};


export default GetMenu;
