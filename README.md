# Microservice with Micro, Typescript, Jest and Prettier boilerplate

[![CircleCI](https://circleci.com/gh/nerdsofalltrades/micro-typescript-jest-prettier-boilerplate.svg?style=svg)](https://circleci.com/gh/nerdsofalltrades/micro-typescript-jest-prettier-boilerplate) [![Greenkeeper badge](https://badges.greenkeeper.io/nerdsofalltrades/micro-typescript-jest-prettier-boilerplate.svg)](https://greenkeeper.io/)

A boilerplate for building microservices with Micro, Typescript and Jest.

## Installation

```
$ npm install
```

## Development

Start a watching development server with hot-relaoding, running at [localhost](http://localhost:3000).

```
$ npm run dev
```

## Testing

Start unit tests and linting.

```
$ npm test
```

## Production

Build for production.

```
$ npm run build
```

Start, running at [localhost](http://localhost:3000).

```
$ npm start
```

## Docker

After building for production build the docker container.

```
$ npm run docker:build
```

Start the docker container. Test it at [localhost](http://localhost:7878).

```
$ npm run docker:run
```

## Deployment

Deploy whereever you like, i.e. with [now](https://zeit.co/now).

```
$ now
```
