import logo from '../../../src/logo.svg';
import cart from '../../../src/shopping_cart_icon.svg';
import language from '../../../src/language_icon.svg';

import './header.css';

import { Button, Button2 } from '../Button';
import { Search } from '../Search';


export function Header() {

    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Button>Categories</Button>
            <Search />
            <Button>Demy Business</Button>
            <Button><img src={cart} alt="cart" /></Button>
            <Button2>Log In</Button2>
            <Button2>Sign Up</Button2>
            <Button2><img src={language} alt="language" /></Button2>
        </header>   
    );
}
