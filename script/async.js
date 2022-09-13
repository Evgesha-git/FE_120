// console.log('Data waiting...');

// // setTimeout(() => {
// //     console.log('Datasend...');
// //     let dataServer = {
// //         site: 'google.com',
// //         status: '200'
// //     };
// //     setTimeout(() => {
// //         console.log('Data client...');
// //         dataServer.modifile = true;
// //         console.log(dataServer);
// //         setTimeout(() => {
// //             dataServer.sent = true;
// //             console.log(dataServer)
// //         }, 2000);
// //     }, 2000);
// // }, 2000);

// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Data sent...');
//         const dataServer = {
//             site: 'google.com',
//             status: '400',
//         }

//         if (dataServer.status !== '200'){
//             reject(`Error ${dataServer.status}`);
//         }else{
//             resolve(dataServer);
//         }
//     }, 2000);
// });

// p.then(data => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Data client...');
//             data.modifite = true;
//             resolve(data);
//         }, 4000);
//     });
// })
//     .then(rez => console.log(rez))
//     .catch(error => console.log(error))
//     .finally(() => {
//         console.log('Finaly')
//     });

function f1(ms){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`That ${ms / 1000}s`);
        }, ms)
    });
}

// let f2 = fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(resp => resp.json());

// let f3 = fetch('https://jsonplaceholder.typicode.com/users')
//     .then(resp => resp.json());

// Promise.all([f2, f3])
//     .then(rez => console.log(rez));

// Promise.race([f2, f3])
//     .then(rez => console.log(rez));

export { f1 }