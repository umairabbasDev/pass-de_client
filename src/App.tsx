import Background from "./components/layout/Background";
import FetchForm from "./components/FetchForm";
function App() {
  return (
    <div className="h-screen w-screen grid grid-cols-1   grid-rows-4 justify-items-center   place-content-center bg-emerald-50 dark:bg-emerald-900 bg-center bg-no-repeat bg-hero-blob">
      <div className=" row-end-1 ">
        <h3 className="font-black text-9xl">Password Tester</h3>
      </div>
      <div className=" row-span-3 row-start-2 row-end-4 w-screen  flex justify-center items-center">
        <Background>
          <FetchForm />
        </Background>
      </div>
    </div>
  );
}

export default App;
