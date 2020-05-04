import React from 'react';
import { Link } from "react-router-dom";
import gql from 'graphql-tag';
import styled from 'styled-components';
import { Query } from 'react-apollo'


// styled
const Wrapper = styled.div`
  text-align: left;
  margin: 20px 0 0 50px;
`

const GET_LIST = gql`
  query Query( $slug: String! ){
    categories(where: {slug: {_eq: $slug }}) {
      title
      articles_categories {
        article {
          created_at
          slug
          teaser
          title
          id
        }
      }
    }
  }
`;


function GetList ({ slug }) {

  return(
    <div>
      <Query query={GET_LIST} variables={{ slug }} >
        {({ loading, error, data }) => (
          <>
            {/* {loading && <div>Loading...</div>} */}
            {error && <div>Error...</div>}
            {data && data && (
              <Wrapper>
                <h1>{data.categories[0].title}</h1>
                {data.categories[0].articles_categories.map(({ article }) => (
                  <div key={article.id} style={{marginTop: "11px"}}>
                    <h3 style={{margin:'0'}}>
                      {article.title}{" "}
                      <span>
                        — {article.created_at}
                      </span>
                    </h3>
                    <div >
                      <p style={{margin:'0'}}>{article.teaser}</p>
                      <Link to={article.slug} style={{margin:'0', cursor:'pointer'}}>Читать далее</Link>
                    </div>
                  </div>
                ))} 
              </Wrapper>
            )}
          </>
        )}
      </Query>
    </div>
  )

};


export default GetList;
