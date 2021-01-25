import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3'>
        {'Step 1: Search for an image of a face on Google Images'}
      </p>
      <p className='f3'>
        {'Step 2: Open the image in a new tab as a full image. (Make sure it is only the image and not a website).'}
      </p>
      <p className='f3'>
        {'Step 3: Copy the image link and paste it below, then click detect. If the link is leads to an image, it should appear below with face recognition.'}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
          <button
            className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
            onClick={onButtonSubmit}
          >Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;