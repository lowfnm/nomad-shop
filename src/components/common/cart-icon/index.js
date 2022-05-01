import style from './cart-icon.module.scss';

const CartIcon = props => {
  const { img, imgAlt, count } = props;

  return (
    <div className={style.cartContainer}>
      <img className={style.cartImg} src={img} alt={imgAlt} width={50} height={50} />
      <span className={style.cartCount}>{count}</span>
    </div>
  );
};

export default CartIcon;
