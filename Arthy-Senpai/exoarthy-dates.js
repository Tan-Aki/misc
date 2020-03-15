// tiens je dois faire ca today, une fonction qui
//  -  recoit un object filters qui contient deux date { from, to }
//  - retourn un array avec une date pour chaque jour complet compris dans cette list
// les date qui sont retourne sont toujours a 00:00:00
// genre:

// let now = new Date()
// let filters = {from: now, to: now};
// let days = getDays(filters); // [ today-00:00:00 ]


// --- 

// let threeDaysAgo = new Date()
// threeDaysAgo = threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
// let now = new Date()
// let filters = {from: threeDaysAgo, to: now};
// let days = getDays(filters); 
// // [ 
// //    17-dec-00:00:00,
// //    18-dec-00:00:00,
// //    19-dec-00:00:00,
// //  ]



// let filters = {from: new Date(), to: new Date()};
// let days = getDays(filters); 


// Et genre ya 7 jours jusqua ya 3 jours:

// let sevenDaysAgo = new Date();
// sevenDaysAgo = new Date(sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7));

// let threeDaysAgo = new Date();
// threeDaysAgo = new Date(threeDaysAgo.setDate(threeDaysAgo.getDate() - 3));

// let days = getDays({from: sevenDaysAgo, to: threeDaysAgo});