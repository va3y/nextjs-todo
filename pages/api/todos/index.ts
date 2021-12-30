import prisma from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import { Todo } from "@prisma/client";
import { getSession } from "next-auth/react";

type TodoItem = {
  title: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });
  if (!session) return res.status(401).send({ message: "Unauthorized" });

  const { title } = req.body;
  if (req.method === "GET") {
    const userTodos = await prisma.todo.findMany({ where: { userId: session.user.id } });
    return res.status(200).json(userTodos);
  }
  if (req.method === "POST") {
    const result = prisma.todo.create({
      data: {
        title,
        done: false,
        user: { connect: { id: session.user.id || undefined } },
      },
    });
    res.status(200).json(result);
  }
}
