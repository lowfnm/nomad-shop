import style from './featured-product.module.scss';

const FeaturedProduct = props => {
  const { title, imageUrl, price } = props;

  return (
    <div className={style.featuredProduct}>
      <div>
        <img src={imageUrl} alt="product" />
      </div>
      <div>
        <h3>{title}</h3>
        <p>$ {price}</p>
        <button className="button is-black nomad-btn">ADD TO CART</button>
      </div>
    </div>
  );
};

export default FeaturedProduct;
