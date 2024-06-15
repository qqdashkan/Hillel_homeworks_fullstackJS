import './autorisation.css';

import cart from '../../../src/shopping_cart_icon.svg';
import language from '../../../src/language_icon.svg';

import { Button, NewButton } from '../Button';

export function Autorisation() {

    return (
        <div className='autorisation'>
            <Button><img src={cart} alt="cart" /></Button>
            <NewButton>Log In</NewButton>
            <NewButton>Sign Up</NewButton>
            <NewButton><img src={language} alt="language" /></NewButton>
        </div>
    );
}