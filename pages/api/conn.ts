import type { NextApiRequest, NextApiResponse } from 'next';
import conn from '../../utils/conn';

type Data = {
    msg: string,
}

const connected = (
    req: NextApiRequest,
    res: NextApiResponse<Data>
) => {

    if (conn()) {
        res.status(200).json({
            msg: 'Connected'
        });
        return;
    }

    res.status(500).json({
        msg: 'Failed to connect'
    });
}

export default connected;