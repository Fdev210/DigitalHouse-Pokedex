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

const yup = require('yup')

function validator (req, res, next) {

    yup.setLocale({
        mixed: {
            default: 'field_invalid',
        },
    
        number: {
            min: ({ min }) => ({ key: "field_too_short", values: { min }})
        }
    })

    const schema = yup.object().shape({
        name: yup.string().required(),
        type: yup.string().required(),
        description: yup.string().required().min(10),
        healthPoints: yup.string().required(),
        specialAttack: yup.string().required(),
        defense: yup.string().required(),
        attack: yup.string().required(),
        experience: yup.string().required(),
        specialDefense: yup.string().required()
    })

    // if(!schema.isValidSync(req.body)) {
        
    //     const messageError = new yup.ValidationError(req.body)
    //     return res.status(400).json(messageError)
    // }
        

   const messageError = schema.validateSync(req.body, {abortEarly: false})
   return res.status(400).json(messageError)

    next()

}

module.exports = validator;


