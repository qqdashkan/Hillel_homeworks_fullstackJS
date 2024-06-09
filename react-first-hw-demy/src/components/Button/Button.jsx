import './button.css';

export function Button(props) {

    return (
        <button className='simple-btn'>{props.children}</button>
    );
}