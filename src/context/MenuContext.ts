import { createContext } from 'react';
import { MenuDataType } from '../types/MenuDataType';

type MenuContextType = {
    menuFoodData: MenuDataType[] | undefined;
    setMenuFoodData: (data: MenuDataType[]) => void;
};
 
const MenuContext = createContext({} as MenuContextType);

export default MenuContext;