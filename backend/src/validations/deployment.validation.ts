import { Type } from '@prisma/client';
import Joi from 'joi';

const createDeployment = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        category: Joi.string().required(),
        status: Joi.string().required(),
        description: Joi.string().required(),
        url: Joi.string().required(),
        price: Joi.number().required(),
        type: Joi.string().required().valid(Type.APPLICATION, Type.BINARY, Type.PLUGIN)
    })
};


const getDeployments = {
    query: Joi.object().keys({
        name: Joi.string(),
        category: Joi.string(),
        type: Joi.string(),
        sortBy: Joi.string(),
        limit: Joi.number().integer(),
        page: Joi.number().integer()
    })
};

const getDeployment = {
    params: Joi.object().keys({
        deploymentId: Joi.number().integer()
    })
};


export default {
    createDeployment,
    getDeployments,
    getDeployment,
};
