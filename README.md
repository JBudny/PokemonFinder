# PokemonFinder

<img align="right" src="./src/assets/pokemon_finder_demo.gif" height="600"/>

### Mobile app that lets you search for pokemon by name or id.

The main purpose of this app is to research the use of [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) with [Mock Service Worker](https://mswjs.io/) for the REST API mocking purposes in tests.

Note that since [React Native](https://reactnative.dev/) does not execute in a browser environment, you cannot run a Service Worker alongside your application. You can use MSW with React Native only for NodeJS integration.

## Prerequisites
- [yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)
- [node.js](https://nodejs.org/) >=16.x
- [React Native CLI](https://reactnative.dev/docs/environment-setup) environment

## Created with the help of the awesome 
- [React Native CLI](https://reactnative.dev/docs/environment-setup) environment
- [PokeAPI](https://pokeapi.co/) the Pokémon API
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) fetching and caching tool
- [Mock Service Worker](https://mswjs.io/) API mocking of the next generation
- [Jest](https://jestjs.io/) and [React Native Testing Library](https://callstack.github.io/react-native-testing-library/) unit test assertions
- [Typescript](https://www.typescriptlang.org/) static type checker

## How to run

These instructions will get you a copy of the project up and running on your local machine.

1. Clone this repo into your local machine
      - with https  
   `git clone https://github.com/JBudny/PokemonFinder.git`
      - with ssh  
   `git clone git@github.com:JBudny/PokemonFinder.git`
      - or with GitHub CLI  
   `gh repo clone JBudny/PokemonFinder`
3. Install dependencies with npm or yarn
      - npm  
   `npm install`
      - yarn  
   `yarn install`
5. Create `.env` file under the root directory of the project ([see example](#env-file-example))
6. Start or plug your virtual or physical device
7. Start React Native  
   `yarn start`
6. Start app  
   `yarn android`

### .env file example:

```
POKEMON_API_BASE_URL=https://pokeapi.co/api/v2
```
