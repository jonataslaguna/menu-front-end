import { useEffect, useState } from 'react';
import MenuContext from './MenuContext';
import { MenuDataType } from '../types/MenuDataType';
import { useMenuData } from '../hooks/useMenuData';

type MenuProviderProps = {
  children: React.ReactNode;
};

function MenuProvider({ children }: MenuProviderProps) {
  const [menuFoodData, setMenuFoodData] = useState<MenuDataType[]>();
  
  const { data } = useMenuData('food');

  useEffect(() => {
    setMenuFoodData(data);
  }, [data]);


  return (
    <MenuContext.Provider value={{
      menuFoodData,
      setMenuFoodData
    }}>
      {children}
    </MenuContext.Provider>   
  );
}

export default MenuProvider;
