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
      <ButtonMenu activeIndex={!isExact ? 1 : 0} size="sm" variant="subtle">
        <Button >
          {TranslateString(292, 'Unlock Wallet')}
        </Button>
      </ButtonMenu>
    </Wrapper>
  )
}

export default IfoTabButtons
