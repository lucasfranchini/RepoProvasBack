import Joi from "joi";
import verifyUrl from "../utils/verifyUrl";

const testSchema = Joi.object({
    name: Joi.string().required(),
    link: Joi.string().required().custom(value=>{
        if(verifyUrl(value)) return value;
        else throw new Error('invalid link')
    }),
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