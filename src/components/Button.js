import React from 'react';
import LangaugeContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  render() {
    return (
      <ColorContext.Consumer>
        {(color) =>
          <button className={`ui button ${color}`}>
            <LangaugeContext.Consumer>
              {(value) => value === 'english' ? 'Submit' : 'Voorleggen'}
            </LangaugeContext.Consumer>
          </button>
        }
      </ColorContext.Consumer>
    );
  }
}

export default Button;