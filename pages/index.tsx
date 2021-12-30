import type { NextPage } from "next";
import { ReactElement, useState } from "react";
import { DefaultLayout } from "../components/layouts/DefaultLayout";
import { TodoItem } from "../components/TodoItem";
import { Button } from "../components/UI/Button";
import Input from "../components/UI/Input";

import { Todo } from "@prisma/client";
import { useTodos } from "@/hooks/useTodos";
import { useMutation, useQueryClient } from "react-query";
import axios from "@/lib/axios";

export const Home = () => {
  const queryClient = useQueryClient();

  const [addTodoText, setAddTodoText] = useState("");

  const todosQuery = useTodos();

  const addTodoMutation = useMutation(
    (newTodo: string) => {
      return axios.post("/todos", { title: newTodo });
    },
    {
      onMutate: async (newTodo: string) => {
        setAddTodoText("");
        await queryClient.cancelQueries("todos");
        const previousTodos = queryClient.getQueryData<Todo[]>("all-todos");
        if (previousTodos) {
          queryClient.setQueryData<Todo[]>("all-todos", [
            ...previousTodos,
            { id: Math.random(), title: newTodo, done: false, userId: "" },
          ]);
        }
        return { previousTodos };
      },
      onError: (err, variables, context) => {
        if (context?.previousTodos) {
          queryClient.setQueryData<Todo[]>("todos", context.previousTodos);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );

  const deleteTodoMutation = useMutation(
    (todoId: number) => {
      return axios.delete(`/todos/${todoId}`);
    },
    {
      onMutate: async (todoId: number) => {
        setAddTodoText("");
        await queryClient.cancelQueries("todos");
        const previousTodos = queryClient.getQueryData<Todo[]>("all-todos");
        if (previousTodos) {
          queryClient.setQueryData<Todo[]>(
            "all-todos",
            previousTodos.filter((todo) => todo.id !== todoId)
          );
        }
        return { previousTodos };
      },
      onError: (err, variables, context) => {
        if (context?.previousTodos) {
          queryClient.setQueryData<Todo[]>("todos", context.previousTodos);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodoMutation.mutate(addTodoText);
        }}
        className="max-w-md flex flex-col space-y-4 mx-auto my-8"
      >
        <Input
          id="add-todo"
          name="add-todo"
          label="Add todo"
          placeholder="Add todo"
          value={addTodoText}
          onChange={(e) => setAddTodoText(e.target.value)}
        />
        <Button>Add</Button>
      </form>
      {todosQuery.isSuccess &&
        todosQuery.data?.map((todo, i) => (
          <TodoItem todo={todo} key={todo.id} onDelete={(todo) => deleteTodoMutation.mutate(todo.id)} />
        ))}
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Home;
