// src/components/LoadingBar.tsx
import React, { useRef } from 'react';
import LoadingBar from 'react-top-loading-bar';

const LoadingBarComponent = () => {
  const loadingBarRef = useRef<any>(null); // Ref to control the loading bar

  const startLoading = () => {
    if (loadingBarRef.current) {
      loadingBarRef.current.continuousStart(); // Start the loading bar
    }
  };

  const stopLoading = () => {
    if (loadingBarRef.current) {
      loadingBarRef.current.complete(); // Stop the loading bar
    }
  };

  return (
    <div>
      <LoadingBar color="#f11946" ref={loadingBarRef} />
      <button onClick={startLoading}>Start Loading</button>
      <button onClick={stopLoading}>Stop Loading</button>
    </div>
  );
};

export default LoadingBarComponent;
