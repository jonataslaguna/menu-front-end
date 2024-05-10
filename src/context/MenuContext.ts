import { createContext } from 'react';
import { NewProduct } from '../types/MenuDataType';

type MenuContextType = {
    pageName: string;
    setPageName: (pageName: string) => void;
    setNewProductData: (data: NewProduct) => void;
};

const MenuContext = createContext({} as MenuContextType);

export default MenuContext;