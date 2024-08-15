import { Type, Deployment } from '@prisma/client';
import prisma from '../client';

/**
 * Create a user
 * @param {Object} deploymentBody
 * @returns {Promise<User>}
 */
const createDeployment = async (
    name: string,
    category: string,
    status: string,
    description: string,
    url: string,
    price: number,
    type: Type = Type.APPLICATION,
): Promise<Deployment> => {
    return prisma.deployment.create({
        data: {
            name,
            category,
            status,
            description,
            url,
            price,
            type
        }
    });
};

/**
 * Query for users
 * @param {Object} filter - Prisma filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryDeployments = async <Key extends keyof Deployment>(
    filter: object,
    options: {
        limit?: number;
        page?: number;
        sortBy?: string;
        sortType?: 'asc' | 'desc';
    },
    keys: Key[] = [
        'id',
        'name',
        'category',
        'status',
        'description',
        'url',
        'price',
        'type'
    ] as Key[]
): Promise<Pick<Deployment, Key>[]> => {
    const page = options.page ?? 1;
    const limit = options.limit ?? 10;
    const sortBy = options.sortBy;
    const sortType = options.sortType ?? 'desc';
    const deployments = await prisma.user.findMany({
        where: filter,
        select: keys.reduce((obj, k) => ({ ...obj, [k]: true }), {}),
        skip: page * limit,
        take: limit,
        orderBy: sortBy ? { [sortBy]: sortType } : undefined
    });
    return deployments as Pick<Deployment, Key>[];
};

/**
 * Get user by id
 * @param {ObjectId} id
 * @param {Array<Key>} keys
 * @returns {Promise<Pick<Deployment, Key> | null>}
 */
const getDeploymentById = async <Key extends keyof Deployment>(
    id: number,
    keys: Key[] = [
        'id',
        'name',
        'category',
        'status',
        'description',
        'url',
        'price',
        'type'
    ] as Key[]
): Promise<Pick<Deployment, Key> | null> => {
    return prisma.deployment.findUnique({
        where: { id },
        select: keys.reduce((obj, k) => ({ ...obj, [k]: true }), {})
    }) as Promise<Pick<Deployment, Key> | null>;
};

export default {
    createDeployment,
    queryDeployments,
    getDeploymentById,
};
