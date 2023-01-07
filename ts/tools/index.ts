function addSlashes(string: string): string {
    string = string.toString();

    return string.replace(/\\/g, '\\\\').
    replace(/\u0008/g, '\\b').
    replace(/\t/g, '\\t').
    replace(/\n/g, '\\n').
    replace(/\f/g, '\\f').
    replace(/\r/g, '\\r').
    replace(/'/g, '\\\'').
    replace(/"/g, '\\"');
}


function removeHTMLTags(string: string): string {
    string = string.toString();
    
    // Regular expression to identify HTML tags in 
    // the input string. Replacing the identified 
    // HTML tag with a null string.
    return string.replace( /(<([^>]+)>)/ig, '');
}

function secureString(string: string): string {

    string = string.trim();
    string = addSlashes(string);
    string = removeHTMLTags(string);
    string = string.trim();

    return string;
}

const isNum: RegExp = /^\d+$/;

export {
    secureString,

    isNum,
}