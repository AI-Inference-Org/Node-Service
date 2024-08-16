import { Type } from '@prisma/client';
import Joi from 'joi';

const createDeployment = {
    body: Joi.object().keys({
        name: Joi.string().optional(),
        category: Joi.string().required(),
        status: Joi.string().empty(),
        description: Joi.string().required(),
        url: Joi.string().required(),
        price: Joi.number().required(),
        type: Joi.string().required().valid(Type.API, Type.BINARY, Type.PLUGIN, Type.AI_APPLICATION)
    })
};


const getDeployments = {
    query: Joi.object().keys({
        name: Joi.string(),
        category: Joi.string(),
        type: Joi.string(),
        userId: Joi.number(),
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
