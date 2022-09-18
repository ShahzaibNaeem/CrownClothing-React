import styled from "styled-components"

type BackgroundImageProps={
    imageUrl:string
}

export const BackgroundImage=styled.div<BackgroundImageProps>`
     width: 100%;
     height: 100%;
     background:${({imageUrl})=>`url(${imageUrl})`};
     background-position: center;
     background-size: cover;   
     transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95); 
`

export const DirectoryBody=styled.div`
        height: 90px; 
        padding: 0 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px solid black;
        background-color: white;
        opacity: 0.7;
        position: absolute;

        h2{
            text-transform:uppercase;
            font-size: 22px;
            font-weight: 700;
            margin: 0 6px;
            color: #4a4a4a;

        }
        p {
            font-size: 16px;
            font-weight: 300;
          }

     &:first-child {
        margin-right: 7.5px;
      }
    
     &:last-child {
        margin-left: 7.5px;
      }
   `
   
   export const DirectoryItemContainer=styled.div`
       display: flex;
       flex: 1 1 auto;
       align-items: center;
       justify-content: center;
       min-width: 30%;
       height: 240px;
       margin: 0 7.5px 15px;
       border: 1px solid black;
       overflow: hidden;
   
       &:hover{
           cursor:pointer;
            ${DirectoryBody}{
           opacity: 0.9;
           }
            ${BackgroundImage}{
            transform: scale(1.1);
           }
       }
   `
   