import Joi from "joi";

const testSchema = Joi.object({
    name: Joi.string().required(),
    link: Joi.string().required(),
    subject: Joi.object({
        name: Joi.string().required().required(),
        id: Joi.number().positive()
    }),
    category: Joi.object({
        name: Joi.string().required().required(),
        id: Joi.number().positive()
    }),
    professor: Joi.object({
        name: Joi.string().required().required(),
        id: Joi.number().positive()
    })
})

export default testSchema;