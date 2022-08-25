import "./directory-item.styles";
import { BackgroundImage,DirectoryItemContainer,DirectoryBody } from "./directory-item.styles";

const DirectoryItem = ({title,imageUrl}) => {
  return (
    <DirectoryItemContainer>
        <BackgroundImage imageUrl={imageUrl}/>
        <DirectoryBody>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </DirectoryBody>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem;
