const path = require("path");

module.exports = {
    entry: "./src/main.ts",
    output: {
        filename: "Joke.js",
        path: path.resolve(__dirname, "dist"),
    },
    resolve: {
        extensions: [".js", ".ts"],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: "ts-loader",
            },
        ],
    },
};
