import { Link } from 'react-router-dom';
import { useTitle } from '@/hooks/useTitle';
import { useThemeStore } from '@/store/themeStore';

import { UserAuthForm } from '@/components/auth/user-auth-form';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

const AuthenticationPage = () => {
  const { toggleDarkMode } = useThemeStore();
  useTitle('Auth');
  return (
    <div className="h-[100vh] overflow-hidden">
      <Button
        variant="outline"
        size="icon"
        onClick={toggleDarkMode}
        className="fixed top-5 right-5 z-50 cursor-pointer md:top-10 md:right-10"
      >
        <Sun className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        <Moon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      </Button>
      <div className="relative container h-[100vh] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="bg-muted relative hidden h-full flex-col p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900" />
          <Link
            to={'/'}
            className="relative z-20 flex cursor-pointer items-center text-lg font-semibold tracking-wider uppercase hover:underline"
          >
            Atvorn
          </Link>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                “Atvorn has completely transformed the way our team manages
                projects — everything's streamlined, efficient, and actually
                enjoyable to use.”
              </p>
              <footer className="text-sm">~ Narendra Modi</footer>
            </blockquote>
          </div>
        </div>
        <div className="flex h-[100vh] items-center justify-center p-8 lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Continue to Atvorn
              </h1>
              <p className="text-muted-foreground text-sm">
                Continue your atvorn account. No fluff, Just function
              </p>
            </div>
            <UserAuthForm />
            <p className="text-muted-foreground px-8 text-center text-sm">
              By clicking continue, you agree to our <br />
              <Link
                to="/terms"
                className="hover:text-primary underline underline-offset-4"
              >
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link
                to="/privacy"
                className="hover:text-primary underline underline-offset-4"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationPage;
