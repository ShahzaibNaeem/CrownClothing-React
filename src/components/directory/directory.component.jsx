import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.styles.scss";


const Directory = ({directoryItems}) => {

  return (
    <div className="directories-container">
    {directoryItems.map((category) => (
      <DirectoryItem key={category.id} {...category}/>))}
  </div>
  )
}

export default Directory;
