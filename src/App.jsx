import "./App.css";
import CarouselProject from "./components/CarouselProject";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-7xl py-10">
        <CarouselProject />
      </div>
    </>
  );
}

export default App;
