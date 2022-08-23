import { createContext ,useState ,useEffect } from "react";
import {getCategoriesAndDocumnets} from "../utils/firebase/firebase.utils.js";
export const CategoriesContext=createContext({
    categoriesMap:{}
});

export const CategoriesProvider=({children})=>{
   const [categoriesMap, seCategoriesMap] = useState({});

   useEffect(() => {
    const getCategoriesMap=async()=>{
      const categoryMap=await getCategoriesAndDocumnets();
      seCategoriesMap(categoryMap);
    }
    getCategoriesMap();  
    }, [])  
   
   const value={categoriesMap};

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}