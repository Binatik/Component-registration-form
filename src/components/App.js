// =================================================
import React from 'react';
// =================================================

// Component
import '../index.css';
import './registration.css';
import Group from "./form/ComponentForms/Group.js";

function App() {
  return (
      <React.Fragment>
          <div className="registration">
              <div className="wrapper">
                  <Group />
              </div>
          </div>
      </React.Fragment>
  );
}

export default App;
