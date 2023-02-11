import { Button } from 'ui';

export default function Home() {
  return (
    <main>
      <section className="flex h-screen justify-center items-center">
        <div>
          <h1 className="font-bold underline">
            Welcome to Nextjs 13 Application Boilerplate!
          </h1>
          <Button />
        </div>
      </section>
    </main>
  );
}
