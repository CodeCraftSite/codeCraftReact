import "./App.css";
import Header from "./components/Header";
import IndexPage from "./pages/Index/IndexPage";

function App() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-7xl py-10">
        <IndexPage />
      </div>
    </>
  );
}

export default App;
