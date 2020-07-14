import React from 'react'
import { FiCheckCircle } from 'react-icons/fi';

import './styles.css';

const Success = () => {
    return (
        <div id="message-on-submit">
            <div id="content">
                <FiCheckCircle id="icon" />
                <h1 id="message">Cadastro concluído!</h1>
            </div>
        </div>
    )
}

export default Success;
