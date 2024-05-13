import MenuContext from './MenuContext';
import { useState } from 'react';

type MenuProviderProps = {
  children: React.ReactNode;
};

function MenuProvider({ children }: MenuProviderProps) {
  const [pageName, setPageName] = useState('food');

  return (
    <MenuContext.Provider value={{
      pageName,
      setPageName,
    }}>
      {children}
    </MenuContext.Provider>   
  );
}

export default MenuProvider;
