import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <section className="flex h-screen justify-center items-center">
        <div>
          <h1 className="font-bold underline">
            Welcome to Nextjs 13 Site Boilerplate!
          </h1>
        </div>
      </section>
    </main>
  );
}
