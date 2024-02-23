import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import MainComponent from "./components/MainComponent";
import ListMitarbeiterComponent from "./components/ListMitarbeiterComponent";
import AddMitarbeiterComponent from "./components/AddMitarbeiterComponent";
import ListTeilnehmerComponent from "./components/ListTeilnehmerComponent";
import AddTeilnehmerComponent from "./components/AddTeilnehmerComponent";
import ListDozentComponent from "./components/ListDozentComponent";
import KursDetailsComponents from "./components/KursDetailsComponents";
import AddDozentenComponent from "./components/AddDozentComponent";

import ListKursComponent from "./components/ListKursComponents";
import AddKursComponent from "./components/AddKursComponents";
import LoginComponent from "./components/LoginComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       
        <HeaderComponent />
        <div className="container main">
          <Routes>
            <Route path="/" element={<MainComponent />} />
            <Route path="/login" element={<LoginComponent />}></Route>
            <Route path="/mitarbeiter" element={<ListMitarbeiterComponent />} />
            <Route path="/teilnehmer" element={<ListTeilnehmerComponent />} />
            <Route path="/kurse" element={<ListKursComponent />} />
            <Route path="/dozenten" element={<ListDozentComponent />} />
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
            <Route path="/add-dozent" element={<AddDozentenComponent />} />
            <Route path="/add-dozent/:id" element={<AddDozentenComponent />} />
            <Route path="/add-kurs" element={<AddKursComponent />} />
            <Route path="/add-kurs/:id" element={<AddKursComponent />} />
            <Route path="/kurs_details/:id" element={<KursDetailsComponents/>} />
          </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
