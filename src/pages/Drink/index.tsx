import { useNavigate } from 'react-router-dom';
import styles from './drink.module.css';
import leftIcon from '/svg/left-icon.svg';
import { MenuDataType } from '../../types/MenuDataType';
import Card from '../../components/Card';
import { useMenuData } from '../../hooks/useMenuData';

function Drink() {
  const navigate = useNavigate();
  const { data } = useMenuData('drink'); 

  return (
    <div className={ styles.drinkContainer }>
      <div className={ styles.backIcon } onClick={() => navigate("/")}>
        <img src={leftIcon} alt="back icon" />
      </div>
      <h1>Drinks</h1>
      <div className={ styles.cardGrid }>
      {data?.map((drink: MenuDataType) => (
          <Card key={drink.id} 
            name={drink.name}
            imageUrl={drink.imageUrl}
            price={drink.price}  />
        ))}
      </div>
    </div>
  );
}

export default Drink; 