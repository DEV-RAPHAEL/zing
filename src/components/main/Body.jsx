import React from 'react'
import styled from 'styled-components'
import Sidebar from '../sidebar/Sidebar'

const Body = () => {
  return (
    <BodyArea>
        <Sidebar />
    </BodyArea>
  )
}

export default Body

const BodyArea = styled.div`
    display:flex;
    height:100vh;
`;
