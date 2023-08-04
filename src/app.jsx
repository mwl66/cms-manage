import React, { useEffect } from 'react';
// import './app.css';
// import './app.less';
import './app.scss';
// import JCImage from '_images/01.jpg'
import JCImage from '_images/01.jpg'

const App = () => {
  console.log('123')
  useEffect(() => {
    let element = document.querySelector('.box2');
    let myImage  = new Image();
    myImage.src = JCImage;
    element.appendChild(myImage);
  })

  return (
    <div className='box'>
      <div className='box1'>box1</div>
      <div className='box2'>box2</div>
    </div>
  )
}

export default App
