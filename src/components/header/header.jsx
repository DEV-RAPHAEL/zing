import React from 'react'
import styled from 'styled-components'
import { Avatar } from "@mui/material"
import AccessTime from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'

const Header = () => {
  return (
    <HeaderContainer>
        <HeaderLeft>
            <ProfileIcon/>
            <AccessTime/>
        </HeaderLeft>
        <Search>
            <SearchIcon/>
            <input placeholder="Search" /> 
        </Search>
        <HeaderRight>
            <HelpOutlineIcon />
        </HeaderRight>

    </HeaderContainer>
  )
};

export default Header;

const HeaderContainer = styled.div`
  display:Flex;
  
  width: 100%;
  align-items: center;
  padding: 10px 0;
  justify-content: space-between;
  background-color: var(--primary-color);
  color:white;
`;
const HeaderLeft = styled.div`
  flex:0.3;
  display:flex;
  align-items: center;
  margin-left:20px;
 
  
      > .MuiSvgIcon-root{
          margin-left: auto;
          margin-right: 30px;
      }
`;

const ProfileIcon = styled(Avatar)`
      cursor:pointer;
          :hover{
            opacity:0.8;
          }
`; 
const Search = styled.div`
    flex:0.4;
    opacity:1;
    text-align: center;
    border-radius: 6px;
    text-align: center;
    background-color: #0b4597;
    display: flex;
    padding:0 50px;
    color:grey;
    border:1px grey solid;

    >input{
      background-color: transparent;
      text-align: center;
      border:none; 
      min-width:30vw;
      outline:none;
      color:white;
    }
`;

const HeaderRight = styled.div`
  flex:0.3;
  display: flex;
  align-items: flex-end;
    > .MuiSvgIcon-root{
        margin-left: auto;
        margin-right: 20px;
    }
`;