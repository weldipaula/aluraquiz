import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import {useRouter} from 'next/router'

import db from '../db.json'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'


/*const BackgroundImage = styled.div `
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`;*/

export const QuizContainer = styled.div `
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  //Hooks
  const router = useRouter()
  const [name, setName] = React.useState('')

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz - The Walking Dead</title>
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Quiz da galera</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (infosDoEvento){
              infosDoEvento.preventDefault()
              router.push(`/quiz?name=${name}`)
            }}>
              <input
                onChange={function (infosDoEvento){
                  console.log(infosDoEvento.target.value)
                  setName(infosDoEvento.target.value)
                }}
                placeholder="Entre com seu nome" />
              <button type="submit" disabled={name.length === 0}>
                Jogar {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>          
        <Widget>
          <Widget.Content>
            <h1>Quiz da galera</h1>
            <p>algum teto aqui</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl='https://github.com/weldipaula' />
    </QuizBackground>
  );
}
