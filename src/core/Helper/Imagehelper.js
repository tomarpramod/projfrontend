import React from 'react'

const Imagehelper = ({ product }) => {
    const imageurl = product 
    ? product.image
    : `https://drive.google.com/drive/my-drive`
  return (
    <div className='rounded border border-success p-2'>
    <img
     src={imageurl}
    style={{maxHeight: "100%", maxWidth: "100%"}}
    className='mb-3 rounded'
    alt=''
    />
    </div>
  );
};


export default Imagehelper