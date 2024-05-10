import { createContext } from 'react';

type MenuContextType = {
    pageName: string;
    setPageName: (pageName: string) => void;
};

const MenuContext = createContext({} as MenuContextType);

export default MenuContext;