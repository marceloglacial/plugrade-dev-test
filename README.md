# Plusgrade / Points.com Dev Test

Develop by [Marcelo Freitas](https://github.com/marceloglacial) using:

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

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
