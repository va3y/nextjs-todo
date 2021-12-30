import prisma from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import { Todo } from "@prisma/client";
import { QueryErrorResetBoundary } from "react-query";

type TodoItem = {
  title: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Todo | null>) {
  const todoId = Number(req.query.id);

  if (req.method === "DELETE") {
    const result = await prisma.todo.delete({ where: { id: todoId } });
    res.status(200).json(result);
  }
}
