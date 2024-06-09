import './filled_btn.css';

export function Button2(props) {

    return (
        <button className='border-button'>{props.children}</button>
    );
}