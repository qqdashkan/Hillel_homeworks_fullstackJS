import './modal.css';

import close from '../../../src/close_icon.svg';

export function Modal() {

    return (
        <section className='modal'>
            <ul className='modal-list'>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad dignissimos cum molestiae non!</li>
                <li>Ends 12.06.2024</li>
            </ul>
            <img src={close} className='close-icon' alt="close" />
        </section>
    );
}