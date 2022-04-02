import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import ChatIcon from '@mui/icons-material/Chat';
import logo from './assets/tinder.svg';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>
      <img 
        className="header__logo"
        src={logo}
        alt="tinder-logo"
      />
      <IconButton>
        <ChatIcon fontSize="large" className="header__icon" />
      </IconButton>
      
    </div>
  );
}

export default Header;
