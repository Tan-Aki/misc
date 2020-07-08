import React from 'react';

import classes from './Modal.module.scss';

const modal = (props) => (
    <div className={classes.Modal}>
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>Dismiss</button>
    </div>
);

export default modal;