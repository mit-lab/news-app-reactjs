import React from 'react';
import {  Link } from "react-router-dom";
import styled from 'styled-components';


// components
import Header from './Header';
import Footer from './Footer';


// styles
const TemplateWrapper = styled.div`
`
const WrapperExternal = styled.div`
  display: flex; 
  justify-content: space-around;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;

`
const Menu = styled.div`
`
const RubricNewsList = styled.div`
`
const H2 = styled.h2`
  margin: 0
`
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`

function Template() {
  return (
    <TemplateWrapper>

      <Header />
      <WrapperExternal>

        <Menu>
          {/*Реализовать отдельной компонентой */}
          {/*Автоматичское создание ссылок СДЕЛАТЬ
          т.е. иначе проходишья map по slug. Проверяешь 
          через ввод в адрес название slug. Если Открылась компонента
          TemplateRubric, то работает */}

          <Link to="/sport">Cпорт</Link><br /><br />
          <Link to="/science">Наука</Link><br /><br />
          <Link to="/business">Бизнес</Link><br /><br />

          {/*Автоматичское создание ссылок СДЕЛАТЬ*/} 
        </Menu>


        <RubricNewsList>
          <H2>Статьи рубрики</H2> 
          {/* {post.map(({ article }) => ( */}
            <Wrapper key="">
              <h3>Название статьи <br/>
                <span>
                     Дата создания статьи
                </span>
              </h3>
              <p>Текст</p>
            </Wrapper>
          {/* ))}  */}
          <Link to="/">Вернуться на главную</Link><br /><br />
        </RubricNewsList>

      </WrapperExternal>
        
      <Footer />

    </TemplateWrapper>
  );
}

export default Template;
