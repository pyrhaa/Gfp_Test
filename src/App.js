import React, { useState } from 'react';
import TextSampleForm from './components/TextSampleForm';
import FontSizeSlider from './components/FontSizeSlider';
import SelectFonts from './components/SelectFonts';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  const [size, setSize] = useState(20);
  const [text, setText] = useState(
    'Portez ce vieux whisky au juge blond qui fume !? 0123456789'
  );
  const [selection, setSelection] = useState('Les plus récentes');
  return (
    <>
      <Header />
      <div className='container min-vh-100'>
        <div className='row my-5'>
          <div className='col-lg-3'>
            <div style={{ position: 'sticky', top: 0 }}>
              <SelectFonts setSelection={setSelection} />
              <TextSampleForm text={text} setText={setText} />
              <FontSizeSlider size={size} setSize={setSize} />
            </div>
          </div>
          <div className='col-lg-9'>
            <Content text={text} size={size} title={selection} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
