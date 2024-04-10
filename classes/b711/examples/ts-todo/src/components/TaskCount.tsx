import { FC } from "react";

// Plain JS:
// function TaskCount({ numComplete }) {

// Typescript alt 1:
// function TaskCount({ numComplete }: { numComplete: number }): ReactElement {

// Typescript alt 2: Function type
// const TaskCount: (props: { numComplete: number }) => ReactElement = ({ numComplete }) => {

// Typescript alt 3: Separate type
// type TaskCountComponent = (props: { numComplete: number }) => ReactElement;
// const TaskCount: TaskCountComponent = ({ numComplete }) => {

// Typescript alt 4: Generic Component type
// type Component<P> = (props: P) => ReactElement;
// const TaskCount: Component<{ numComplete: number }> = ({ numComplete }) => {

const TaskCount: FC<{ numComplete: number }> = ({ numComplete }) => {
  return (
    <p className="todoCounter">{`${numComplete} completed`}</p>
  );
}

export default TaskCount;