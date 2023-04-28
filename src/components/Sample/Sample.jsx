import React from 'react';


export const Sample = () => {


  React.useEffect(() => {
    console.log('useEffect: Sample component render');
    // API 
  }, []);


  // Component destroy 
  React.useEffect(() => {

    return () => {
      // API
      console.log('useEffect: return statement');
    }

  }, []);


  console.log('Sample component render');

  return <h1>Sample Component</h1>
}
