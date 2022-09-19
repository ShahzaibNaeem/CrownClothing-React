import styled from "styled-components";


export const CategoryTitle=styled.h2`
    text-transform: uppercase;
    text-align: center;
    font-size: 28px;
    margin-bottom: 20px;
    
@media screen and (max-width:800px){
    font-size: 24px;   
}

`

export const CategoryContainer=styled.h2`
    display: grid;
    grid-template-columns: repeat(4,auto);
    column-gap: 20px;
    row-gap: 40px;

    @media screen and (max-width:800px){
     grid-template-columns: repeat(3,auto);
     row-gap: 20px;    
    }

    @media screen and (max-width:600px){
     grid-template-columns: repeat(2,auto); 
     row-gap: 20px;  
     margin: 0px 15px;     
    }
`
