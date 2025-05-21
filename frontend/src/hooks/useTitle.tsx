import { useEffect } from 'react';

export const useTitle = (title: string) => {
  useEffect(() => {
    console.log('Setting page title:', title);
    document.title = title ? title + ' - Atvorn' : 'Atvorn';
  }, [title]);
};
