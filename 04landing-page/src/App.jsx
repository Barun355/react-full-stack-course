import User from "./components/User";

function App() {
  return (
    <div className="h-screen w-screen bg-blue-950 text-white p-4 flex">
      <div className="border w-1/2">
        <div>
          <h1 className="text-red-400">
            We're always looking for awesome people to join
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            incidunt repellendus optio excepturi commodi! Praesentium explicabo
            amet accusantium quam nam.
          </p>
        </div>
        <div>
          <img src="/mockup.png" alt="" />
        </div>
      </div>
      <div className="border w-1/2">
        <User
          useRole="Full Stack Developer"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolore sapiente, nobis aliquid fuga eligendi delectus."
          price="$75,000 USD"
          place="San Francisco, CA"
        />
        <User
          useRole="Full Stack Developer"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolore sapiente, nobis aliquid fuga eligendi delectus."
          price="$75,000 USD"
          place="San Francisco, CA"
        />
        <User
          useRole="Full Stack Developer"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolore sapiente, nobis aliquid fuga eligendi delectus."
          price="$75,000 USD"
          place="San Francisco, CA"
        />
        <button>View all opening</button>
      </div>
    </div>
  );
}

export default App;
