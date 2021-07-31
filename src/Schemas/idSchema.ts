import Joi from "joi";


const idSchema = Joi.number().greater(0).integer();
export default idSchema;