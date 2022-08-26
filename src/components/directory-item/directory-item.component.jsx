import {useNavigate} from "react-router-dom"
import { BackgroundImage,DirectoryItemContainer,DirectoryBody } from "./directory-item.styles";
import "./directory-item.styles";

const DirectoryItem = ({title,imageUrl,route}) => {
  const navigate=useNavigate();

  const onNavigateHandle=()=> navigate(route)
  return (
    <DirectoryItemContainer onClick={onNavigateHandle}>
        <BackgroundImage imageUrl={imageUrl}/>
        <DirectoryBody>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </DirectoryBody>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem;
