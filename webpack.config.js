
const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
 
};


// const path = require('path');

// module.exports = {
//     context: path.resolve(__dirname, 'src'),
//     entry: './index.js',
//     output: {
//         filename: 'js/main.js',
//         path: path.resolve(__dirname, 'dist')
//     },
//     devServer: {
//         hot: true,
//         static: {
//             directory: './dist',
//             watch: true
//         }
//     }
// };

// "start": "webpack serve --mode=development --open"