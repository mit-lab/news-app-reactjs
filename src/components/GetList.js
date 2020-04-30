import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';


// styled
const Wrapper = styled.div`
  text-align: left;
  margin-left: 50px;
  `
const GET_LIST = gql`
  {
    categories(where: {slug: {_eq: "all-news" }}) {
      title
      articles_categories {
        article {
          created_at
          slug
          teaser
          title
        }
      }
    }
  }
`;

function GetList() {
  const { loading, error, data } = useQuery(GET_LIST);
    if (loading) return <p>Loading</p>;
    if (error) return <p>Error :(</p>;
  return (
    <Wrapper>
      <h1>{data.categories[0].title}</h1>
      {data.categories[0].articles_categories.map(({ article }) => (
        <div key={article.slug}>
          <h3>
            {article.title}{" "}
            <span>
              — {article.created_at}
            </span>
          </h3>
          <p>{article.teaser}</p>
        </div>
      ))} 
    </Wrapper>
  )
}


export default GetList;
