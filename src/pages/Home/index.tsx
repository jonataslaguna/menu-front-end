import styles from './home.module.css';

function Home() {
  return (
    <div className={styles.homeContainer}>
      {/* <h1 className={styles.title}>Welcome to Laguna restaurant</h1>
      <p className={styles.description}>
        Discover our menu and enjoy the best dishes and drinks in town
      </p> */}
      <div className={styles.selector}>
        <div className={`${styles.imageContainer} ${styles.drinks}`}>
          <img
            className={styles.image}
            src="./images-home-page/drink-home-image.jpg"
            alt="beer image"
          />
           <p className={styles.overlay}>Drinks</p> 
        </div>
        <div className={`${styles.imageContainer} ${styles.foods}`}>
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