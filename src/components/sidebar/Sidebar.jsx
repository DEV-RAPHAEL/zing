import React from 'react'
import styled from 'styled-components'
import Options from './options'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import CreateIcon from "@mui/icons-material/Create"
import InsertCommentIcon from "@mui/icons-material/InsertComment"
import InboxIcon from "@mui/icons-material/Inbox"
import DraftsIcon from "@mui/icons-material/Drafts"
import PeopleAltIcon from "@mui/icons-material/PeopleAlt"
import AppsIcon from "@mui/icons-material/Apps"
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder"
import FileCopyIcon from "@mui/icons-material/FileCopy"
import ExpandLessIcon from "@mui/icons-material/ExpandLess"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import AddIcon from "@mui/icons-material/Add"



 
const Sidebar = () => {
  return (
    <SidebarContainer>
        <SidebarHeader>
            <SidebarText>
                <h2>Fundutech Chat</h2>
                <h3>
                    <FiberManualRecordIcon/>
                    Ajayi Raphael
                </h3>
            </SidebarText>
            <CreateIcon />
            </SidebarHeader>
            <Options Icon={InsertCommentIcon} title='Threads'/>
            <Options Icon={InboxIcon} title='Mentions & Reactions'/>
            <Options Icon={DraftsIcon} title='Saved Items'/>
            <Options Icon={BookmarkBorderIcon} title='Channel Browser'/>
            <Options Icon={PeopleAltIcon} title='People and User Groups'/>
            <Options Icon={AppsIcon} title='Apps'/>
            <Options Icon={FileCopyIcon} title='FIle Browser'/>
            <Options Icon={ExpandLessIcon} title='Show Less'/>
            <hr />
            <Options Icon={ExpandMoreIcon} title='Rooms'/>
            <hr />
            <Options Icon={AddIcon} newRoom title='Create a Room'/>

    </SidebarContainer>
    )
}

export default Sidebar


const SidebarContainer = styled.div`
    background-color: var(--primary-color);
    color:white;
    flex:0.3;
    max-width: 260px;
    border-top: 1px solid #0b4597;

    >  hr{
        margin-top: 10px;
        margin-bottom: 10px;
        border:1px solid #0b4597;
    }
`;
const SidebarHeader = styled.div`
    display:flex;

    border-bottom: 1px solid #0b4597;
    padding: 8px;

    > .MuiSvgIcon-root  {
        padding: 8px;
        color: #0b4597;
        font-size: 16px;
        background-color: white;
        border-radius: 100%;
    }
`;
const SidebarText = styled.div`
    flex:1;
      > h2 {
            font-size: 15px;
            font-weight: 900;
            margin-bottom: 5px;
        }
      > h3{
            display:flex;
           font-size:12px;
           font-weight: 400;
           align-items: center;
        }
      > h3 > .MuiSvgIcon-root{
                font-size:14px;
                margin-top:1px;
                margin-right:2px;
                color:green;
             }
`;