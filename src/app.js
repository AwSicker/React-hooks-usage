import React, {useState} from 'react';
import {PlanetName} from "./planet-name";

const App = () => {
      const [value, setValue] = useState(1);
      const [visible, setVisible] = useState(true);
      if(visible){
          return (
              <div>
                  <button onClick={() => setValue((value) => value + 1)}>+</button>
                  <button onClick={() => setVisible(false)}>hide</button>
                  <PlanetName id={value} />
              </div>
          )
      }
      else {
          return (
              <div>
                 <button onClick={() => setVisible(true)}>show</button>
              </div>
          )
      }
}

export {App}
