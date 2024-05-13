import styles from './food.module.css';
import Card from '../../components/Card';
import { MenuDataType } from '../../types/MenuDataType';
import leftIcon from '/svg/left-icon.svg';
import { useNavigate } from 'react-router-dom';
import { useMenuData } from '../../hooks/useMenuData';
import plusIcon from '/svg/plus-icon.svg';
import MenuContext from '../../context/MenuContext';
import { useContext, useEffect } from 'react';

function Food() {
  const navigate = useNavigate();
  const { data } = useMenuData('food'); 
  const { setPageName } = useContext(MenuContext);

  const handleClick = () => {
    navigate("/form")
  };
  
  useEffect(() => {
    setPageName('food');
  }, [setPageName]);

  return (
    <div className={ styles.foodContainer }>
      <div className={ styles.backIcon } onClick={() => navigate("/")}>
        <img src={leftIcon} alt="back icon" />
      </div>
      <div  className={ styles.plusIcon } onClick={handleClick}>
        <img src={plusIcon} alt="plus icon" />
      </div>
      <h1>Foods</h1>
      <div className={ styles.cardGrid }>
        {data?.map((food: MenuDataType) => (
          <Card key={food.id} 
            name={food.name}
            imageUrl={food.imageUrl}
            price={food.price}  />
        ))}
      </div>
    </div>
  );
}

export default Food; 