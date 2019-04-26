import React from 'react';

class LanguageSelector extends React.Component {
  render() {
    return (
      <div>
        Select a langugage:
        <i className="flag us" onClick={() => this.props.onLangChange('english')} />
        <i className="flag nl" onClick={() => this.props.onLangChange('dutch')} />
      </div>
    );
  }
}

export default LanguageSelector;