import React from 'react';
import PropTypes from 'prop-types';
import './Well.css';
export const Well = ({label, primary}) => {
let mode = primary ? 'first' : 'second';
return (<div className={`well ${mode}`} >
    
    {label}
    
    </div>)

}
Well.propTypes = {
    primary: PropTypes.bool,
    /**
     * Button contents
     */
    label: PropTypes.string.isRequired,
    /**
     * Optional click handler
     */
}
