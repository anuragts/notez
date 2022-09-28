import { NextApiRequest,NextApiResponse } from "next";
import { prisma } from "../../db/client";

// Currently using id as the unique identifier for a note , will use user id later

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.body;
    const note = await prisma.notes.findUnique({
        where: {
            id : Number(id)
        }
    });
    res.statusCode = 200;
    res.json(note);
    return;
}