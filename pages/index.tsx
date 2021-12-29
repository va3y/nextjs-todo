import type { NextPage } from "next";
import { ReactElement, useState } from "react";
import DefaultLayout from "../components/layouts/defaultLayout";
import { Button } from "../components/UI/Button";
import Input from "../components/UI/Input";

export default function Home() {
  const [addTodoText, setAddTodoText] = useState("");

  return (
    <div>
      <div>
        <form className="max-w-md flex flex-col space-y-4">
          <Input
            type="text"
            id="add-todo"
            name="add-todo"
            label="Add todo"
            placeholder="Add todo"
            value={addTodoText}
            onChange={(e) => setAddTodoText(e.target.value)}
          />
          <Button>Add</Button>
        </form>
      </div>
      index page
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
