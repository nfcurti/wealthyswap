import React from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'
import { ButtonMenu, ButtonMenuItem, Button, Heading, Text } from '@pancakeswap-libs/uikit'
import Container from 'components/layout/Container'
import useI18n from 'hooks/useI18n'
import IfoTabButtons from './components/IfoTabButtons'
import Hero from './components/Hero'
import CurrentIfo from './CurrentIfo'
import PastIfo from './PastIfo'

const Blurb = styled(Text)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 20px;
  font-weight: 600;
  text-align:center;
  margin-top:00.5em;
  padding-bottom:2em;
  border-bottom: 2px solid ${({ theme }) => theme.colors.textSubtle};
`

const Ifos = () => {
  const { path } = useRouteMatch()
  const TranslateString = useI18n()
  return (
    <>
      <Hero />
      <Container>
        <IfoTabButtons />
        <Blurb>{TranslateString(10007, 'Help')}</Blurb>
      </Container>
    </>
  )
}

export default Ifos

