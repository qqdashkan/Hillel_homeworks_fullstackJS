import logo from '../../../src/logo.svg';

import './header.css';

import { Button } from '../Button';
import { Search } from '../Search';
import { Autorisation } from '../Autorisation';



export function Header() {

    return (
        <header className="app-header">
            <div className='header-line'>
                <img src={logo} className="App-logo" alt="logo" />
                <Button>Categories</Button>
                <Search />
                <Button>Demy Business</Button>
                <Autorisation />
            </div>
        </header>   
    );
}
