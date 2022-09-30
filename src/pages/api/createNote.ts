import { NextApiRequest,NextApiResponse } from "next";
import { prisma } from "../../db/client";

// Add user id later

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { title, body } = req.body;
    const note = await prisma.notes.create({
        data: {
            title,
            body
        }
    });
    res.statusCode = 200;
    res.json([note]);
    return;
}