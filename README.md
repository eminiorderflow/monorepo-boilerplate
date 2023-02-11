# NextJS 13 Tailwind Turborepo Boilerplate

This is boilerplate.

## What's inside?

This turborepo uses [pnpm](https://pnpm.io) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `application`: a [Next.js](https://nextjs.org/) app
- `site`: another [Next.js](https://nextjs.org/) app
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo
- `prettier`: `.prettierrc`s used throughout the monorepo
- `Tailwind CSS`: `tailwind.config.js and postcss.config.js`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Tailwind](https://tailwindcss.com/docs/guides/nextjs) for CSS
- [Husky](https://typicode.github.io/husky/) for Git Hooks
- [CommitLint](https://commitlint.js.org/) for Commit Lint

### Install

To install all packages, run the following command:

```
cd monorepo-boilerplate
pnpm install
npm run prepare
```

### Build

To build all apps and packages, run the following command:

```
cd monorepo-boilerplate
pnpm run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd monorepo-boilerplate
pnpm run dev
```

### Git Remote Commands

```
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/eminiorderflow/monorepo-boilerplate.git
git push -u origin main or git push -u origin master or git push origin master
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd monorepo-boilerplate
pnpm dlx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
pnpm dlx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
