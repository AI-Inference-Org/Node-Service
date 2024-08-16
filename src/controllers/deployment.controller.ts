import httpStatus from 'http-status';
import pick from '../utils/pick';
import ApiError from '../utils/ApiError';
import catchAsync from '../utils/catchAsync';
import { deploymentService } from '../services';

const createDeployment = catchAsync(async (req, res) => {

    const user: any = req.user;
    const { name, category, status, description, url, price, type } = req.body;
    const deployment = await deploymentService.createDeployment(name, category, status, description, url, price, type, user.id);
    res.status(httpStatus.CREATED).send(deployment);
});

const getDeployments = catchAsync(async (req, res) => {
    const filter = pick(req.query, ['name', 'name', 'type', 'userId']);
    const options = pick(req.query, ['sortBy', 'limit', 'page']);
    const result = await deploymentService.queryDeployments(filter, options);
    res.send(result);
});

const getDeployment = catchAsync(async (req, res) => {
    const deployment = await deploymentService.getDeploymentById(req.params.deploymentId);
    if (!deployment) {
        throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    }
    res.send(deployment);
});


export default {
    createDeployment,
    getDeployments,
    getDeployment,
};
