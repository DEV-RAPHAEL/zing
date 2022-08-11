import React from 'react'
import { Avatar } from "@mui/material"
import AccessTime from '@mui/icons-material/AccessTime';
import styled from 'styled-components'

const HeaderLeft = () => {
  return (
    <div>
         <ProfileIcon/>
         <AccessTime/>
    </div>
  )
}

export default HeaderLeft;

const ProfileIcon = styled(Avatar)``; 