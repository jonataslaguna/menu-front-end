import MenuContext from './MenuContext';

type MenuProviderProps = {
  children: React.ReactNode;
};

function MenuProvider({ children }: MenuProviderProps) {

  return (
    <MenuContext.Provider value={{}}>
      {children}
    </MenuContext.Provider>   
  );
}

export default MenuProvider;
