import { NextApiRequest,NextApiResponse } from "next";
import { prisma } from "../../db/client";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const notes = await prisma.notes.findMany();
    res.statusCode = 200;
    res.json(notes);
    return;
}