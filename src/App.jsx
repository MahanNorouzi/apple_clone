import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Hero16 from "./components/Hero16";
import OtherProductes from "./components/OtherProductes";
import IPhonepage from "./components/Iphonepage";
import { AppleID } from "./components/Appleid";
import Pagenot from "./components/Pagenot";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/MacAirs" element={<OtherProductes />} />
        <Route path="/iPhone_15" element={<IPhonepage />} />
        <Route path="/16" element={<Hero16 />} />
        <Route path="/AppleID" element={<AppleID />} />
        <Route path="/Notfinished" element={<Pagenot />} />
        <Route path="*" element={<Pagenot />} />
      </Routes>
    </>
  );
};

export default App;
