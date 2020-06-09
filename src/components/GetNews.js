import React  from 'react';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { Query } from 'react-apollo'


// styled
const Wrapper = styled.div`
  text-align: left;
  margin: 20px 0 0 50px;
`

const GET_NEWS = gql`
  query Query($slug: String! ){
      articles(where: {slug: {_eq: $slug }}) {
      body
      created_at
      id
      slug
      teaser
      title
    }
  }  
`;


function GetList({ slug }) {
  return (
    <div>
      <Query query={GET_NEWS} variables={{ slug }} >
        {({ loading, error, data }) => (
          <>
            {/* {loading && <div>Loading...</div>} */}
            {error && <div>Error...</div>}
            {data && data && (
              <Wrapper>
                {data.articles.map(( item ) => (
                  <div key={item.id} style={{marginTop: "11px"}}>
                    <h3 style={{margin:'0'}}>
                      {item.title}{" "}
                      <span>
                        — {item.created_at}
                      </span>
                    </h3>
                    <div >
                      <p style={{margin:'0 0 10px 0'}}>{item.teaser}</p>
                      <p style={{margin:'0'}}>{item.body}</p>
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
