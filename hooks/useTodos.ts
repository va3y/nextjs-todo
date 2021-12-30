import axios from "@/lib/axios";
import { Todo } from "@prisma/client";
import { AxiosResponse } from "axios";
import { useQuery } from "react-query";

export const useTodos = () => {
  return useQuery<Todo[]>("all-todos", async () => {
    return (await axios.get("/todos")).data;
  });
};
