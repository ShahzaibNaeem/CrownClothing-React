import styled from "styled-components";
import {Link} from "react-router-dom";

export const CategoryPreviewContainer=styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 35px;
    
    @media screen and (max-width:800px){  
     margin:0px 10px ;         
    }
` 

export const CategoryPreviewTitle=styled.div`
    margin-bottom: 20px; 
    @media screen and (max-width:800px){
        margin-bottom: 16px; 
    }
    @media screen and (max-width:600px){
        text-align: center;
    }
` 

export const Title=styled(Link)`
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    transition:all 0.2s linear; 
    &:visited,&:link{
        color:black;
     }
    &:hover,&:active{
        color:#808282;
    }

    @media screen and (max-width:800px){
        font-size:24px;
    }
` 
export const CategoryPreviewBody=styled.div`
    display: grid;
    grid-template-columns: repeat(4,auto);
    column-gap: 20px; 

    @media screen and (max-width:800px){  
     grid-template-columns: repeat(3,auto);    
    }
    @media screen and (max-width:600px){
     grid-template-columns: repeat(2,auto); 
     margin:0px 15px ;   
    }
` 