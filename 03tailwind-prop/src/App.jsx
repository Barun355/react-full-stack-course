import Employee from "./components/Employee";

function App() {
  return (
    <div className="bg-red-500 h-screen w-screen flex flex-col justify-center items-center">
      <h1 className="text-xl">Hello World</h1>
      <Employee username="Barun" role="Developer" description="Tech lead in our company." />
      <Employee />
    </div>
  );
}

export default App;
