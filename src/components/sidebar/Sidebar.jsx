import React from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'


const Sidebar = () => {
  return (
    <SidebarContainer>
        <SidebarHeader>
            <SidebarText>
                <h2>Talk Tech Project</h2>
                <h3>
                    <FiberManualRecordIcon/>
                    Sir Raphael
                </h3>
            </SidebarText>
            
        </SidebarHeader>
    </SidebarContainer>
    )
}

export default Sidebar


const SidebarContainer = styled.div`

`;
const SidebarHeader = styled.div`
    
`;
const SidebarText = styled.div`

`;