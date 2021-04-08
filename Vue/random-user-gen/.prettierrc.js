/*
 * Install Prettier
 * https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
 */

module.exports = {
    semi: false,
    overrides: [
        {
            files: ['*.js', '*.json', '*.css'],
            options: {
                printWidth: 150,
                trailingComma: 'es5',
                tabWidth: 4,
                semi: true,
                singleQuote: true,
                endOfLine: 'auto',
            },
        },

        {
            files: ['*.html', '*.ejs'],
            options: {
                printWidth: 150,
                tabWidth: 4,
                htmlWhitespaceSensitivity: 'ignore',
                proseWrap: 'never',
            },
        },
    ],
};
