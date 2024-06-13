import "./styles/Header.scss";
import Logo from "../assets/BeLogo.png";

export default function Header() {
  return (
    <div className='header-container'>
      <img src={Logo} alt='Logo' />
    </div>
  );
}
