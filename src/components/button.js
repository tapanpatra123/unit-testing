import React from 'react';

const Button=({className, btnName, handleBtnOnclick })=>{
    return <button data-list="buttonComponent" className={className} onClick={handleBtnOnclick}>
                {btnName}
            </button>
}

export default Button
