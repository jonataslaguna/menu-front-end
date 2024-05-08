import { useContext } from 'react';
import styles from './food.module.css';
import MenuContext from '../../context/MenuContext';
import Card from '../../components/Card';
import { MenuDataType } from '../../types/MenuDataType';
import leftIcon from '../../../public/svg/left-icon.svg';
import { useNavigate } from 'react-router-dom';

function Food() {
  const { menuFoodData } = useContext(MenuContext);
  const navigate = useNavigate();

  return (
    <div className={ styles.foodContainer }>
      <div className={ styles.backIcon } onClick={() => navigate("/")}>
        <img src={leftIcon} alt="back icon" />
      </div>
      <h1>Foods</h1>
      <div className={ styles.cardGrid }>
        {menuFoodData?.map((food: MenuDataType) => (
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