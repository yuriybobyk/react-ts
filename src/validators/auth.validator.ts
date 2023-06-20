import Joi from "joi";

export const authValidator = Joi.object({
    username:Joi.string().regex(/^[a-zA-Z]\w{1,19}$/).messages({
        'string.patter.base':'Username must start woth letter, and consist with letter, numbers or _. Length min 2 max 20'
    }).required(),
    password: Joi.string().regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\s])\S{8,20}$/).messages({
        'string.pattern.base':'Password must have letters, numbers, non-alphanumeric, 1 uppercase, 1 lowercase. Length min8 max 20'
    })

})
