#!/usr/bin/env node

const fs = require('fs');
const util = require('util');
const chalk = require('chalk');
const path = require('path');

///////// Method #1 to wrap a function inside a promise //////////
const lstat = (fileName) => {
	return new Promise((resolve, reject) => {
		fs.lstat(fileName, (err, stats) => {
			if (err) {
				reject(err);
			}
			resolve(stats);
		});
	});
};

// Method #2
// const lstat = util.promisify(fs.lstat);

// Method #3
// const { lstat } = fs.promises;

const targetDir = process.argv[2] || process.cwd();

/////// using promise wrapped lstat function  with promise.all pour optimiser le code et faire rouler les callbacks lstat en parralleles
fs.readdir(targetDir, async (err, fileNames) => {
	if (err) {
		console.log(err);
	}

	const statPromises = fileNames.map((fileName) => {
		return lstat(path.join(targetDir, fileName));
	});

	const allStats = await Promise.all(statPromises);

	for (let stats of allStats) {
		const index = allStats.indexOf(stats);
		if (stats.isFile()) console.log(fileNames[index]);
		else console.log(chalk.bold(fileNames[index]));
	}
});

//////// using promise wrapped lstat function  with async await statements

// fs.readdir(process.cwd(), async (err, fileNames) => {
// 	if (err) {
// 		console.log(err);
// 	}

// 	for (let fileName of fileNames) {
// 		try {
// 			const stats = await lstat(fileName);
// 			console.log(fileName, stats.isFile());
// 		} catch (err) {
// 			console.log(err);
// 		}
// 	}
// });

////// using our promise wrapped lstat function with then and catch statements////

// fs.readdir(process.cwd(), async (err, fileNames) => {
// 	if (err) {
// 		console.log(err);
// 	}

// 	for (let fileName of fileNames) {
// 		lstat(fileName)
// 			.then((stats) => {
// 				console.log(fileName, stats.isFile());
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 			});
// 	}
// });

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//

// for archives

//
//
//

///////////  asynchronous code with callbacks and arrays ////////////

// fs.readdir(process.cwd(), (err, fileNames) => {
// 	if (err) {
// 		console.log(err);
// 	}

// 	const allStats = Array(fileNames.length).fill(null);

// 	for (let fileName of fileNames) {
// 		const index = fileNames.indexOf(fileName);
// 		fs.lstat(fileName, (err, stats) => {
// 			if (err) {
// 				console.log(err);
// 			}

// 			allStats[index] = stats;

// 			const ready = allStats.every((stats) => {
// 				return stats;
// 			});

// 			if (ready) {
// 				allStats.forEach((stats, index) => {
// 					console.log(fileNames[index], stats.isFile());
// 				});
// 			}
// 		});
// 	}
// });

//////// unsynchronised version with foreach  ////////////

// fs.readdir(process.cwd(), (err, fileNames) => {
// 	if (err) {
// 		console.log(err);
// 	}

// bad code
// fileNames.forEach((element) => {
// 	fs.lstat(element, (err, stats) => {
// 		if (err) {
// 			console.log(err);
// 		}

// 		console.log(element, stats.isFile());
// 	});
// });

// });
