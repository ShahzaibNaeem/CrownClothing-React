import styled from 'styled-components';
import {Link, NavLink } from 'react-router-dom';

export const NavigationContainer=styled.div`
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    padding: 0px 20px;
`
export const LogoContainer=styled(Link)`
   padding:"25px";
`

export const NavigationLinks=styled.div`
      display: flex;
      align-items: center;
      gap: 30px;
`

export const NavigationLink=styled(NavLink)`
        
      &:link,&:visited{                      
        color:black;
        text-transform: uppercase;
        transition:color 0.2s linear;          
      }
      &:hover,&:active{
        color:#808282;
      }

      &.active{
      padding: 8px 0px; 
      border-bottom: 2px solid black;
      }

`
export const NavigationLinkSignOut=styled.span`
      text-transform: uppercase;
      font-size: 18px;
      cursor: pointer;
`

