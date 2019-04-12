

// module.exports = {
//     create: (req, res) => {
//         const dbInstance = req.app.get('db');
//         const { image_url, product_name, price } = req.body;

//         dbInstance.create_product([image_url, product_name, price])
//             .then(() => res.sendStatus(200))
//             .catch(err => {
//                 res.status(500).send({ errorMessage: "ERROR" });
//                 console.log(err)
//             });
//     }
// };
