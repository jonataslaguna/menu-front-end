import styles from './home.module.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.title}>Welcome to the Laguna restaurant</h1>
      <p className={styles.description}>
        Discover our menu and enjoy the best dishes and drinks in town
      </p> 
      <div className={styles.selector}>
        <div className={
          `${styles.imageContainer} ${styles.drinks}`} 
           onClick={() => navigate('/drink')}>
          <img
            className={styles.image}
            src="./images-home-page/drink-home-image.jpg"
            alt="beer image"
          />
           <p className={styles.overlay}>Drinks</p> 
        </div>
        <div className={
          `${styles.imageContainer} ${styles.foods}`}
           onClick={() => navigate('/food')}>
          <img
            className={styles.image}
            src="./images-home-page/food-home-image.jpg"
            alt="pizza image"
          />
            <p className={styles.overlay}>Foods</p> 
        </div>
      </div>
    </div>
  );
}

export default Home;