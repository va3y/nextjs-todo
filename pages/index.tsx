import type { NextPage } from "next";
import { ReactElement, useState } from "react";
import { DefaultLayout } from "../components/layouts/DefaultLayout";
import { TodoItem } from "../components/TodoItem";
import { Button } from "../components/UI/Button";
import Input from "../components/UI/Input";

export const Home = () => {
  const [addTodoText, setAddTodoText] = useState("");
  const todos = [
    { id: 1, title: "todo 1" },
    { id: 2, title: "todo 2" },
    { id: 3, title: "todo 3" },
  ];

  return (
    <div>
      <form className="max-w-md flex flex-col space-y-4">
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
      {todos.map((todo, i) => (
        <TodoItem title={todo.title} key={todo.id} onDelete={() => ({})} />
      ))}
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Home;
