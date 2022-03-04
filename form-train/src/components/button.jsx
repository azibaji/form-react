import React from 'react';
const Button = ({label}) => {
    return ( 
        <div className="col-12">
            <button type="submit" className="btn btn-primary">{label}</button>
        </div>
   );
}
Button.defaultProps = {
    label : 'Sign in'
}
 
export default Button;