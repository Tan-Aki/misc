const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const render = require('./render');

const forbiddenDirs = [ 'node_modules' ];

class Runner {
	constructor() {
		this.testFiles = [];
	}

	async runTests() {
		for (let file of this.testFiles) {
			console.log(chalk.gray(`---- ${file.shortName}`));
			const beforeEaches = [];
			global.render = render;
			global.beforeEach = (fn) => {
				beforeEaches.push(fn);
			};
			global.it = async (desc, fn) => {
				beforeEaches.forEach((func) => func());
				try {
					await fn();
					console.log(chalk.green(`\tOK - ${desc}`));
				} catch (err) {
					const message = err.message.replace(/\n/g, '\n\t\t');
					console.log(chalk.red(`\tX - ${desc}`));
					console.log(chalk.red('\t', err.message));
				}
			};
			try {
				require(file.name);
			} catch (error) {
				console.log('X - Error Loading FIle', file.name);
				console.log(error);
			}
		}
	}

	async collectFiles(targetPath) {
		//// relRecPath = relative Record Path
		//// relRecsPaths = relative Records Paths
		//// abs = absolute
		const relRecsPaths = await fs.promises.readdir(targetPath);

		for (let relRecPath of relRecsPaths) {
			const absRecPath = path.join(targetPath, relRecPath);

			const stats = await fs.promises.lstat(absRecPath);

			if (stats.isFile() && relRecPath.includes('.test.js')) {
				this.testFiles.push({ name: absRecPath, shortName: relRecPath });
			} else if (stats.isDirectory() && !forbiddenDirs.includes(relRecPath)) {
				const relChildsRecsPaths = await fs.promises.readdir(absRecPath);
				relRecsPaths.push(
					...relChildsRecsPaths.map((relChildRecPath) =>
						path.join(relRecPath, relChildRecPath)
					)
				);
			}
		}
		// return files;
	}
}

module.exports = Runner;
