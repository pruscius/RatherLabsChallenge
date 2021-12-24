const { Router } = require('express');
const router = Router();
const fs = require('fs');

// router.post('/trivia/:id', (req, res) => {
//     const { id } = req.params;
//     const body = req.body;

//     if (body.category !== 'historia' && body.category !== 'ciencia' && body.category !== 'deportes' &&
//         body.category !== 'arte' && body.category !== 'entretenimiento' && body.category !== 'geografia') {
//         return res.send('Categoría inválida.')
//     }

//     if (body && id) {
//         fs.writeFileSync(`./src/trivia_files/${body.category}/trivia${id}.json`, JSON.stringify(body), err => {
//             if (err) throw err;
//             console.log('Trivia file created.');
//         })
//         res.send('Trivia file created.');
//     } else {
//         res.status(404);
//     }
// });

router.get('/trivia/:id', (req, res) => {
    const { id } = req.params;
    const { category } = req.query;

    if (category !== 'historia' && category !== 'ciencia' && category !== 'deportes' && category !== 'arte'
        && category !== 'entretenimiento' && category !== 'geografia') {
        return res.send('Categoría inválida.')
    }

    if (id) {
        const trivia = require(`../trivia_files/${category}/trivia${id}.json`);
        if (trivia) {
            res.send(trivia);
        } else {
            res.status(404).send('Trivia not found.')
        }
    } else {
        res.status(400).send('Invalid ID param.');
    }
});

// router.delete('/trivia/:id', (req, res) => {
//     const { id } = req.params;
//     const { category } = req.query;

//     if (category !== 'historia' && category !== 'ciencia' && category !== 'deportes' && category !== 'arte'
//         && category !== 'entretenimiento' && category !== 'geografia') {
//         return res.send('Categoría inváida.');
//     }

//     if (id) {
//         fs.unlink(`./src/trivia_files/${category}/trivia${id}.json`, err => {
//             if (!err) {
//                 return res.send('Trivia eliminada.');
//             } else {
//                 res.status(404).send('Trivia not found.');
//             }
//         });
//     } else {
//         res.status(400).send('Invalid ID param.');
//     }
// });

module.exports = router