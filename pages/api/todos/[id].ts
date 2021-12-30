import prisma from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import { Todo } from "@prisma/client";

type TodoItem = {
  title: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Todo | null>) {
    const todoId = Number(req.query.id)
    const todo = await prisma.todo.findFirst({where: {id: todoId}});
    res.status(200).json(todo);
}
