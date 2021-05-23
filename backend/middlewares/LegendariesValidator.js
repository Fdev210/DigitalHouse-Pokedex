// function validator (req, res, next) {
//     const { description } = req.body;

//     if(!description) {
//         return res.status(400).json({error: "descripition is required"})
//     }

//     next()
// }

// module.exports = validator;

// const { body } = require('express-validator')

// const validationList = [
//     body('name', 'Name is required').notEmpty(),
//     body('type', 'Type is required').notEmpty(),
//     body('description', 'Description invalid, it must be greater or igual than 10').isLength({min: 10})

// ];

// module.exports = validationList;

const yup = require('yup');

function validator (req, res, next) {

    yup.setLocale({
        mixed: {
            default: 'Não é válido',
          }
    });

     const schema = yup.object().shape({
        name: yup.string().required("Legendary name is required"),
        type: yup.string().required("Legendary type is required"),
        description: yup.string().required("Legendary description is required").min(10),
        healthPoints: yup.number().required("Legendary healthPoints is required"),
        specialAttack: yup.number().required("Legendary specialAttack is required"),
        defense: yup.number().required("Legendary defense is required"),
        attack: yup.number().required("Legendary attack is required"),
        experience: yup.number().required("Legendary experience is required"),
        specialDefense: yup.number().required("Legendary specialDefense is required")
    });
    
    try {
        schema.validateSync(req.body, { abortEarly: false })
      } catch (err) {
        return res.status(400).json(err.errors)
      }

    next()

}

module.exports = validator;


