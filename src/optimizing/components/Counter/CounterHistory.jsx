import React, {useState} from 'react';

import {log} from '../../log.js';

const HistoryItem = ({count}) => {
    log('<HistoryItem /> rendered', 3);

    const [selected, setSelected] = useState(false);

    const clickHandler = () => {
        setSelected((prevSelected) => !prevSelected);
    };

    return (
        <li
            onClick={clickHandler}
            className={selected ? 'selected' : undefined}>
            {count}
        </li>
    );
};

const CounterHistory = ({history}) => {
    log('<CounterHistory /> rendered', 2);

    return (
        // <ol>
        //   {history.map((count, index) => (
        //     <HistoryItem
        //       key={index} // key의 값이 동적이라 랜더링 문제가 발생한다.
        //       count={count}
        //     />
        //   ))}
        // </ol>
        <ol>
            {history.map(({ id, value }) => (
                <HistoryItem
                    key={id}
                    count={value}
                />
            ))}
        </ol>
    );
};
export default CounterHistory;
