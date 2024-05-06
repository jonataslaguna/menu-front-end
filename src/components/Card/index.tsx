import styles from './card.module.css';

type CardProps = {
  name: string;
  imageUrl: string;
  price: number;

};

function Card({name, imageUrl, price}: CardProps) {
  return (
    <div className={ styles.card }>
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>$ <strong>{price}</strong></p>
    </div>
  )
}

export default Card;