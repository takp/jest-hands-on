# jest-hands-on

- [Jest](https://facebook.github.io/jest/)

## Run

Use [create-react-app](https://github.com/facebookincubator/create-react-app)

```
$ yarn global add create-react-app
$ create-react-app jest_hands_on
```

Redux

```bash
$ yarn add redux
$ yarn add redux-thunk
$ yarn add redux-mock-store --dev
```

Run tests

```bash
$ yarn test
```

=>
 
```
PASS  src/App.test.js
 PASS  src/sample/test/render.test.js
 PASS  src/__tests__/sample.js
  ● Console

    console.log src/__tests__/sample.js:5
      beforeAll
    console.log src/__tests__/sample.js:8
      beforeEach
    console.log src/__tests__/sample.js:8
      beforeEach

 PASS  src/sample/test/mockSample.test.js

Test Suites: 4 passed, 4 total
Tests:       5 passed, 5 total
Snapshots:   1 passed, 1 total
Time:        4.222s
Ran all test suites.
```

## Ref

- [RailsプログラマのためのReact + Redux TDD Jest編 rito](https://chimame.github.io/slides/React_and_Redux_RailsProgrammer/slides/#/)
- [Jest](https://facebook.github.io/jest/)
- [Github - Jest](https://github.com/facebook/jest)
