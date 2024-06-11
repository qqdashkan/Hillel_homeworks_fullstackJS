import './filled_btn.css';

export function NewButton(props) {

    return (
        <button className='border-button'>{props.children}</button>
    );
}