
import "./App.css";
import ContactForm from "./Components/ContectForm/ContectForm";
import ContectHeader from "./Components/ContectHeader/ContectHeader";
import Nevigation from "./Components/Navigation/Nevigation";
function App() {
  return (
    <div>
      <Nevigation />
      <main className="main_container">

        <ContectHeader />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
