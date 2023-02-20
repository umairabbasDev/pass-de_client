import Background from "./components/layout/Background";
import FetchForm from "./components/FetchForm";
function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-400 to-blue-500 relative">
      <p style={{
        backgroundImage: 'linear-gradient(to right, #6B46C1, #4F46E5), linear-gradient(to right, white 50%, transparent 50%)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }} className="text-6xl font-bold absolute top-14 left-1/2 transform -translate-x-1/2 text-white opacity-40 z-10">Pass De</p>
      <div className="row-span-3 row-start-2 row-end-4 w-screen flex justify-center items-center z-0">
        <Background>
          <FetchForm />
        </Background>
      </div>
    </div>
  );
}

export default App;
