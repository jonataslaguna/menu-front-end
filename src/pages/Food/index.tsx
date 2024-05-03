import { useContext } from 'react';
import styles from './food.module.css';
import MenuContext from '../../context/MenuContext';
import Card from '../../components/Card';
import { MenuDataType } from '../../types/MenuDataType';

function Food() {
  const { menuFoodData } = useContext(MenuContext);

  return (
    <div className={ styles.foodContainer }>
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