import { useTitle } from '@/hooks/useTitle';

const NotFoundPage = () => {
  useTitle('');
  return (
    <div className="flex h-[100vh] flex-col items-center justify-center">
      <h1 className="text-md mb-1">Page Not Found</h1>
      <p className="text-gray-600">
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFoundPage;
