import React from 'react'
import styled from 'styled-components'

import { useRouteMatch, Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem, Button, Heading, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`



const IfoTabButtons = () => {
  const { url, isExact } = useRouteMatch()
  const TranslateString = useI18n()
  return (
    <Wrapper>
      <Button >
          {TranslateString(292, 'Unlock Wallet')}
      </Button>
    </Wrapper>
  )
}

export default IfoTabButtons
