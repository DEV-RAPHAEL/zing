import React from 'react'
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
    color:red;
    display:flex;
    height:100vh;
`;
