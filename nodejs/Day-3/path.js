const path = require('path');
//some methods of the path module
//1.parse() - parses a path string into an object with properties like root, dir, base, ext, and name
const parsedata = path.parse('/content/subfolder/test.txt');
console.log(parsedata);
//1.join() - joins all arguments together and normalizes the resulting path
const filepath = path.join('content', 'subfolder', 'test.txt');
console.log(filepath); // Output: /content/subfolder/test.txt
//2. resolve() - resolves a sequence of paths or path segments into an absolute path
const absolutePath = path.resolve('content', 'subfolder', 'test.txt');
console.log(absolutePath); // Output: /absolute/path/to/content/subfolder/test.txt (depends on your current working directory)
//3. extname() - returns the extension of the path
const ext = path.extname('index.html');
console.log(ext); // Output: .html
//4.basename() - returns the last portion of a path
const basename = path.basename('/content/subfolder/test.txt');
console.log(basename); // Output: test.txt
//5.dirname() - returns the directory name of a path
const dirname = path.dirname('/content/subfolder/test.txt');
console.log(dirname); // Output: /content/subfolder
//6.sep - returns the platform-specific path segment separator
const sep = path.sep;
console.log(sep); // Output: / (on Unix-like systems) or \ (on Windows)