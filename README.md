# Plusgrade / Points.com Dev Test

[![wakatime](https://wakatime.com/badge/user/cee0e641-3254-41c3-a42e-8f3adfdfbc22/project/2cba2c59-9032-424c-9048-a0f687e17e79.svg)](https://wakatime.com/badge/user/cee0e641-3254-41c3-a42e-8f3adfdfbc22/project/2cba2c59-9032-424c-9048-a0f687e17e79) ![GitHub release (latest by date)](https://img.shields.io/github/v/release/marceloglacial/plugrade-dev-test)

Develop by [Marcelo Freitas](https://github.com/marceloglacial) using:

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Next JS](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Testing Libraty](https://testing-library.com/)

## Pre-requisites

- [Docker](https://www.docker.com/)
- [NodeJS](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

## Running the Local API

```bash
docker pull ptsdocker16/interview-test-server
docker run --init -p 5001:5001 -it ptsdocker16/interview-test-server
```

Navigate to [http://localhost:5001](http://localhost:5001). You should be greeted with this set of instructions, and access to the different available endpoints. The following are the relevant endpoints:

- [/tax-calculator/](http://localhost:5001/tax-calculator/) - endpoint to develop against
- [/tax-calculator/tax-year/2022](/tax-calculator/tax-year/2022) - endpoint you'll be assessed against

More information: [https://github.com/Points/interview-test-server](https://github.com/Points/interview-test-server)

## Setup ENV files

Rename `.env.example` to `.env.local`

## Running the Frontend Aplication

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building the Frontend Aplication

```bash
yarn build
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
