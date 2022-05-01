import style from './footer.module.scss';

const Footer = () => {
  const year = new Date().getFullYear();
  return <div className={style.footer}>{year} © STORE</div>;
};

export default Footer;
