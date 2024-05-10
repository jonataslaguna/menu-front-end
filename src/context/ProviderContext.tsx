import { useState } from 'react';
import MenuContext from './MenuContext';
import { NewProduct } from '../types/MenuDataType';

type MenuProviderProps = {
  children: React.ReactNode;
};

function MenuProvider({ children }: MenuProviderProps) {
  const [pageName, setPageName] = useState('food');
  const [newProductData, setNewProductData] = useState<NewProduct>();

  return (
    <MenuContext.Provider value={{
      pageName,
      setPageName,
      setNewProductData
    }}>
      {children}
    </MenuContext.Provider>   
  );
}

export default MenuProvider;
