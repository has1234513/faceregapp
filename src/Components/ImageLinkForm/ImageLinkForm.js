import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='f3'>
                {'paste an image URL of a face below and see how the api detects the faces'}
            </p>
            <div className='center'>
                <div className="form center pa4 br3 shadow-10">
                    <input  className='f4 pa2 w-70% center' type='tex' onChange={onInputChange}/>
                    <button className='w-30% grow f4 link ph3 pv2 dib white bg-dark-green' onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;