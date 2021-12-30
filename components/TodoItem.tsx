import { Todo } from "@prisma/client";
import { Button } from "./UI/Button";

export interface TodoItemProps {
  todo: Todo;
  onDelete: (arg: Todo) => void;
}

export const TodoItem = ({ todo, onDelete }: TodoItemProps) => {
  return (
    <div className="p-4 border-neutral-200">
      {todo.title}
      <Button onClick={() => onDelete(todo)}>Delete</Button>
    </div>
  );
};
