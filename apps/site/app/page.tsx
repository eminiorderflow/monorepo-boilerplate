import { Inter } from '@next/font/google';
import { Button } from 'ui';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <section className="flex h-screen justify-center items-center">
        <div>
          <h1 className="font-bold underline">
            Welcome to Nextjs 13 Site Boilerplate!
          </h1>
          <div className="flex justify-center py-5">
            <Button label="Go to Application" />
          </div>
        </div>
      </section>
    </main>
  );
}
