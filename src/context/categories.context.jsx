import { createContext ,useState ,useEffect } from "react";
import {getCategoriesAndDocumnets} from "../utils/firebase/firebase.utils.js";
export const CategoriesContext=createContext({
    categoriesMap:{}
});

export const CategoriesProvider=({children})=>{
   const [categoriesMap, setCategoriesMap] = useState({});

   useEffect(() => {
    const getCategoriesMap=async()=>{
      const categoryMap=await getCategoriesAndDocumnets();
      setCategoriesMap(categoryMap);
    }
    getCategoriesMap();
    // eslint-disable-next-line
    }, [])  
   
   const value={categoriesMap};

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}