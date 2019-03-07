import { User } from './User';

export interface Role{
    roleId: number;
    roleName: string;
    users : User
}