# Next.js + Jest

This example shows how to configure Jest to work with Next.js.

This includes Next.js' built-in support for Global CSS, CSS Modules and TypeScript. This example also shows how to use Jest with the App Router and React Server Components.

> **Note:** Since tests can be co-located alongside other files inside the App Router, we have placed those tests in `app/` to demonstrate this behavior (which is different than `pages/`). You can still place all tests in `__tests__` if you prefer.

## Node.js Requirements

This project requires **Node.js 20.0.0 or higher** to run properly.

- **Current recommended version**: Node.js 20.x or 22.x
- **Minimum version**: Node.js 20.0.0

### Troubleshooting Node.js Version

If you see an error like:

```
You are using Node.js 16.20.2. For Next.js, Node.js version "^18.18.0 || ^19.8.0 || >= 20.0.0" is required.
```

Make sure you're using Node.js 20.0.0 or higher. Update your CI/CD environment to use the correct Node.js version.

### CI/CD Configuration

This project includes:
- `.github/workflows/ci.yml` - GitHub Actions workflow for CI/CD
- `.nvmrc` - Node.js version specification
- `package.json` - Engines field specifies Node.js requirements
- `vercel.json` - Vercel deployment configuration

## Deploy your own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-jest&project-name=with-jest&repository-name=with-jest)

## How to Use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example with-jest with-jest-app
```

```bash
yarn create next-app --example with-jest with-jest-app
```

```bash
pnpm create next-app --example with-jest with-jest-app
```

## Running Tests

```bash
npm test
```

```bash
yarn test
```

```bash
pnpm test
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
# next-jest-cicd
