# DiscoCSS.js

A new way to parse CSS. It parses given css and can apply it.

### Warning: It does not overwrite css, it justs add to it.

## How to use

First import package.

```javascript
let css = `
h1 {
    background-color: grey;
    color: white;
}
`;
parseCSS(css);

/* Output:
{ element: 'h1', 
  style:  
   [ { style: 'background-color', styleValue: 'blue' }, 
     { style: 'color', styleValue: 'white' }, 
     { style: 'text-align', styleValue: 'grey' } ] } 
*/
```

~~Using which you can use to apply the css in your way or use the built in function:~~ _Not Done Yet_

```javascript
let css = `
h1 {
    font-color: green;
    background-color: white;
}
`;
applyCSS(css);
```

## Limitations

-   Only one element per css string eg. You can't style `h1` and `h2` in the same string.
-   Currently no `!important`

## Todo

-   [ ] Write `applyCSS()` function
-   [ ] Write Tests
