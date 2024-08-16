import { Role } from '@prisma/client';

const allRoles = {
  [Role.USER]: ['getUsers', 'manageUsers','createDeployment','getDeployments','getDeployment','getMe'],
  [Role.SELLER]: ['getUsers', 'manageUsers','createDeployment','getDeployments','getDeployment','getMe']
};

export const roles = Object.keys(allRoles);
export const roleRights = new Map(Object.entries(allRoles));
