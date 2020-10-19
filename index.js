let css = `
    h1 {
        background-color: blue;
        color: white;
        text-align: grey;
    }
    `;

function combineArrayToString(array) {
    let string = '';
    for (let i = 0; i < array.length; i++) {
        string += array[i];
    }
    return string;
}

function removeSemicolon(array) {
    let split = combineArrayToString(array).split('');
    if (split[split.length - 1] === ';') {
        split.pop();
    }
    return combineArrayToString(split);
}

function parseCSS(css) {
    css = css.split('');
    let cssSpaceRemoved = [];

    for (let i = 0; i < css.length; i++) {
        if (css[i] !== ' ' && css[i] !== '\n') {
            cssSpaceRemoved.push(css[i]);
        }
    }

    let css1 = removeSemicolon(
        combineArrayToString(combineArrayToString(cssSpaceRemoved).split('}'))
    ).split('{');
    let values = css1[1].split(';');
    let cssRules, temp;
    cssRules = [];
    css1.pop();

    for (let j = 0; j < values.length; j++) {
        temp = values[j].split(':');
        cssRules[j] = {};
        cssRules[j].style = temp[0];
        cssRules[j].styleValue = temp[1];
    }

    return { element: css1[0], style: cssRules };
}

console.log(parseCSS(css));
