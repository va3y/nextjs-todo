import { Button } from "./UI/Button";

export interface TodoItemProps {
  title: string;
  onDelete: () => void;
}

export const TodoItem = ({ title, onDelete }: TodoItemProps) => {
  return (
    <div className="p-4 border-neutral-200">
      {title}
      <Button>Delete</Button>
    </div>
  );
};
