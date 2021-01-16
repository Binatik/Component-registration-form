// =================================================
import React from 'react';
// =================================================
//registration
// Component
import '../index.css';
import './global.css';
import Registration from "./registration/Registration";

function App() {
  return (
      <React.Fragment>
          <div className="global">
              <div className="wrapper">
                  <Registration />
              </div>
          </div>
      </React.Fragment>
  );
}

export default App;
