//import React from 'react';
import PropTypes from 'prop-types';

const OuterContainer = ({ children }) => {
  return (
    <div style={{ width:'80%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin:'auto'}}>
      {children}
    </div>
  );
};

const InnerContainer = ({ children, additionalStyles }) => {
  return (
    <div style={{ ...additionalStyles }}>
      {children}
    </div>
  );
};

// Define PropTypes for children
OuterContainer.propTypes = {
    children: PropTypes.node.isRequired
  };
  
  InnerContainer.propTypes = {
    children: PropTypes.node.isRequired,
    additionalStyles: PropTypes.object
  };

const ChildComponent = () => {
  return (
    <OuterContainer>
      <h1> blah blah blah</h1>
      <InnerContainer additionalStyles={{ width:'100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start' }}>
        <h1> Hello</h1>
      </InnerContainer>
    </OuterContainer>
  );
};

export default ChildComponent;