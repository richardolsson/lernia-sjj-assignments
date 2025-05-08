import Todo from "@/components/Todo";

export default function Home() {
  console.log('Home render!');
  return (
    <div className="app-page">
      <Todo />
    </div>
  );
}
