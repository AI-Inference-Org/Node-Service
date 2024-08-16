import { Role } from '@prisma/client';

const allRoles = {
  [Role.USER]: ['getUsers', 'manageUsers','createDeployment','getDeployments','getDeployment'],
  [Role.SELLER]: ['getUsers', 'manageUsers','createDeployment','getDeployments','getDeployment']
};

export const roles = Object.keys(allRoles);
export const roleRights = new Map(Object.entries(allRoles));
