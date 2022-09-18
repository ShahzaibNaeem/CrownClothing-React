import styled from "styled-components";
import {Link} from "react-router-dom";

export const CategoryPreviewContainer=styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 35px;
` 
export const CategoryPreviewTitle=styled.div`
    margin-bottom: 20px; 
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
` 
export const CategoryPreviewBody=styled.div`
    display: grid;
    grid-template-columns: repeat(4,auto);
    column-gap: 20px; 
` 