import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Map from "./components/Map";

function App() {
  return (
    <div className="flex h-screen">
      <div className="w-1/5">
        <SideBar />
      </div>
      <div className="w-4/5">
        <div className="mb-4">
          <NavBar />
        </div>
        <div className="h-full">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default App;
