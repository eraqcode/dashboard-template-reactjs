import { Main } from "./components/main/Main";
import { Navbar } from "./components/navbar/Navbar";
import { Sidebar } from "./components/sidebar/Sidebar";
import { SidebarProvider } from "./context/uiContext";

function App() {
  return (
    <>
      <div className="Container">
        <SidebarProvider>
          <Navbar />        
          <Main />
          <Sidebar />
        </SidebarProvider>
      </div>
    </>
  );
}

export default App;
