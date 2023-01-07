import { NextApiRequest, NextApiResponse } from "next";
import isEmpty from "validator/lib/isEmpty";
import { serialize } from 'cookie';
import { compare } from 'bcrypt';

import { secureString } from "../../../ts/tools";
import { createJWT } from "../../../utils/jwt";
import { TLEMCEN_ADMIN_COOKIE } from "../../../constants";

type checkAdminTypeResponse = {
    msg: string | null
}

const checkAdmin = (
    req: NextApiRequest,
    res: NextApiResponse<checkAdminTypeResponse>
    ) => {

    try {
        
        if (req.method !== "POST") {
            throw new Error("bad request");
        }

        let {
            userName,
            password
        } : {
            userName: string,
            password: string,
        } = req.body;

        const {
            ADMIN_NAME,
            ADMIN_PASSWORD
        } = process.env;


        userName = secureString(userName);
        password = secureString(password);

        if (isEmpty(userName) || isEmpty(password)) {
            throw new Error("Make sure to enter a correct information");
        }
        
        if (userName === ADMIN_NAME && password === ADMIN_PASSWORD) {
            res.setHeader(
                "Set-Cookie",
                serialize(TLEMCEN_ADMIN_COOKIE, createJWT({
                    userName,
                    password
                }), {
                    maxAge: (60*60*24*30)
                })
            );
            return res.status(200).send({
                msg: null,
            });
        }
        throw new Error("Check your password or username");
    }
    catch (e: any) {
        return res.status(400).send({
            msg: e.message,
        });
    }
}

export default checkAdmin;