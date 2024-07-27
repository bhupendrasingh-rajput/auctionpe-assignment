import React, { useRef, useState } from 'react';
import { logAction } from '../../apis/actionApi';

const Actions = () => {
    const sessionId = localStorage.getItem('sessionId');
    const token = localStorage.getItem('token');

    const incrementRef = useRef(0);
    const decrementRef = useRef(1000);
    const toggleRef = useRef(true);
    const inputRef = useRef('');
    const inputTimer = useRef(null);

    const [inputValue, setInputValue] = useState('');

    const handleActionLog = async (actionType) => {
        const actionData = {
            session_id: sessionId,
            timestamp: new Date(),
            action_type: actionType
        };
        await logAction(token, actionData);
    };

    const handleIncrement = () => {
        incrementRef.current += 1;
        handleActionLog('Increment Button');
        forceUpdate();
    };

    const handleDecrement = () => {
        decrementRef.current -= 1;
        handleActionLog('Decrement Button');
        forceUpdate();
    };

    const handleToggle = () => {
        toggleRef.current = !toggleRef.current;
        handleActionLog('Toggle Button');
        forceUpdate();
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        inputRef.current = value;

        if (inputTimer.current) {
            clearTimeout(inputTimer.current);
        }

        inputTimer.current = setTimeout(() => {
            handleActionLog('Text Input');
        }, 500);
    };

    const forceUpdate = React.useReducer(() => ({}), {})[1];

    return (
        <div className='actions'>
            <button onClick={handleIncrement}>Increment: {incrementRef.current}</button>
            <button onClick={handleDecrement}>Decrement: {decrementRef.current}</button>
            <label>
                {toggleRef.current ? 'Enabled' : 'Disabled'}
                <input
                    type="checkbox"
                    checked={toggleRef.current}
                    onChange={handleToggle}
                />
            </label>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder='Enter Text Here...'
            />
            <button onClick={() => handleActionLog('Simple Button')}>
                Click the Button
            </button>
        </div>
    );
};

export default Actions;
