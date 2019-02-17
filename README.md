# use-query

支持同步或异步方法的 `useEffect`（`useEffect` with Asyn & Sync）

## Install

`npm install use-query` or `yarn add use-query`

## Example:

### Default

```js
import usePromiseEffect from 'use-query';

usePromiseEffect(async () => {
    await fetch('...');
    ...
    return ()=>{
        // do cancel
    };
});
```
