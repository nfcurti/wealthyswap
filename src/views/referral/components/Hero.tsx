import React from 'react'
import styled from 'styled-components'
import { Heading, Text,  } from '@pancakeswap-libs/uikit'
import Container from 'components/layout/Container'
import useI18n from 'hooks/useI18n'

const Title = styled(Heading).attrs({ as: 'h1', size: 'xl' })`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 24px;
`

const Blurb = styled(Text)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 20px;
  font-weight: 600;
`

const StyledHero = styled.div`
  padding-bottom: 40px;
  padding-top: 40px;
  margin-bottom: 32px;
`

const imgStyle = {
    display: 'flex',
    margin: 'auto',
    marginTop: '3em',
}

const Hero = () => {
  const TranslateString = useI18n()

  return (
    <StyledHero>
      <Container>
        <Title>{TranslateString(10004, 'IFO: Initial Farm Offerings')}</Title>
        <Blurb>{TranslateString(10005, 'Buy new tokens with a brand new token sale model.')}</Blurb>
      </Container>
      <img alt='crown' src='/images/egg/3.png' style={imgStyle}/>
    </StyledHero>

  )
}

export default Hero
