import React from 'react'
import styled from 'styled-components'
function Options({Icon, title, newRoom}) {

    /* Add and select Room function */
    const addRoom = () =>{

    };

    const selectRoom = () =>{

    };
  return (
    <Option
    /* function to select or create Room */
        onClick={addRoom ? addRoom : selectRoom}
    >
        {Icon && <Icon fontSize='small' style={{padding:10}} />}
        {Icon ? (
            <h3>{title}</h3>
        ):(
            <OptionChannel>
                <span>#</span> {title}
            </OptionChannel>
        )}
    </Option>
  )
}

export default Options;
const Option = styled.div`
    display:flex;
    font-size:12px;
    align-items: center;
    padding-left: 2px;
    cursor:pointer;

    :hover{
        opacity:0.8;
        background-color: #0b4597;
    }
    > h3{
        font-weight: 500;
    }
    > h3 span{
        padding: 10px;
    }
`;
const OptionChannel = styled.div``;