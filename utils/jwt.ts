import { sign } from 'jsonwebtoken';

interface dataInterface {
    userName: string,
    password: string
}

const {
    SECRET_KEY
} = process.env;

const createJWT = (data: dataInterface): string => {
    
    return sign(JSON.stringify(data), `${SECRET_KEY}`);
}

export {
    createJWT
}