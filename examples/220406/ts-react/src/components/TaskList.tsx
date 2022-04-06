// Synonyms:
//function TaskList(): JSX.Element | null {
//const TaskList: () => JSX.Element | null = () => {
//const TaskList: React.FunctionComponent = () => {
const TaskList: React.FC = () => {
  return (
    <ul>
      <li>Learn HTML</li>
      <li>Learn CSS</li>
      <li>Learn JS</li>
      <li>Learn React</li>
      <li>Learn Typescript</li>
    </ul>
  );
};

export default TaskList;
