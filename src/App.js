import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import MainComponent from "./components/MainComponent";
import ListMitarbeiterComponent from "./components/ListMitarbeiterComponent";
import AddMitarbeiterComponent from "./components/AddMitarbeiterComponent";
import ListTeilnehmerComponent from "./components/ListTeilnehmerComponent";
import AddTeilnehmerComponent from "./components/AddTeilnehmerComponent";
import ListKursComponent from "./components/ListKursComponents";
import AddKursComponent from "./components/AddKursComponents";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" element={<MainComponent />} />
            <Route path="/mitarbeiter" element={<ListMitarbeiterComponent />} />
            <Route path="/teilnehmer" element={<ListTeilnehmerComponent />} />
            <Route path="/kurse" element={<ListKursComponent />} />
            <Route
              path="/add-mitarbeiter"
              element={<AddMitarbeiterComponent />}
            />
            <Route
              path="/add-mitarbeiter/:id"
              element={<AddMitarbeiterComponent />}
            />
            <Route
              path="/add-teilnehmer"
              element={<AddTeilnehmerComponent />}
            />
            <Route
              path="/add-teilnehmer/:id"
              element={<AddTeilnehmerComponent />}
            />
            <Route path="/add-kurs" element={<AddKursComponent />} />
            <Route path="/add-kurs/:id" element={<AddKursComponent />} />
          </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
