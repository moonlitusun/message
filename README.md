# Introduction

message popup tool

# Install

npm

```shell
npm install @react-comp/message
```

yarn

```shell
yarn add @react-comp/message
```

# Demo

[demo](https://react-comps.github.io/message/)

# Usage

```jsx
import message from '@react-comps/message';
import '@react-comps/message/dist/message.css';

// ...
const config = {
  // position
  place: 'top', // top | center | bottom
  distance: '50px', // 50px | 30% (When `place = center` don't can ignore)

  /**
   * css Text
   */
  cssText: 'background: rbga(0, 0, 0); color: red', // inline style
};

hasbtn.onclick = function () {
  message.show('bad request！', 5000, config);
}

configbtn.onclick = function() {
  message.updateConfiguration(config);
}

nobtn.onclick = function () {
  message.show('bad request!');
}
```

# API

## show

```js
message.show(
  content: string | number = '',
  duration: number = 2000,
  configuration: object = {
    place: 'center',
    distance: '50%',
  }
  );
```

## updateConfiguration

update global configuration

```js
const config = {
  // position
  place: 'top', // top | center | bottom
  distance: '50px', // 50px | 30% (When `place = center` don't can ignore)

  /**
   * css Text
   */
  cssText: 'background: rbga(0, 0, 0); color: red', // inline style
};

message.updateConfiguration(config);
```