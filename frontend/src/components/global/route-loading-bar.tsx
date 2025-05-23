import { useRef } from 'react';
import LoadingBar from 'react-top-loading-bar';

const LoadingBarComponent = () => {
  const loadingBarRef = useRef<InstanceType<typeof LoadingBar> | null>(null);

  const startLoading = () => {
    loadingBarRef.current?.continuousStart();
  };

  const stopLoading = () => {
    loadingBarRef.current?.complete();
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
