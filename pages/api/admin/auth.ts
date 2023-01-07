import { NextApiRequest, NextApiResponse } from "next";
import { verify } from "jsonwebtoken";

const {
    SECRET_KEY
} = process.env;

const {
    ADMIN_NAME,
    ADMIN_PASSWORD
} = process.env;

const verifyJWT = (
    req: NextApiRequest, 
    res: NextApiResponse
) => {

    let data: any;

    try {
        const token: string = req.headers['authorization']?.split(' ')[1]!;

        data = verify(token, `${SECRET_KEY}`);
        data = JSON.parse(data);

        if (data.userName === ADMIN_NAME && data.password === ADMIN_PASSWORD) {
            return res.status(200).send({});
        }
    }
    catch (e) {
        console.log(e);
        return null
    }
}

export {
    verifyJWT
}