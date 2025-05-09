import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

// import StockPage from './pages/StockPage/StockPage';
// import CorrelationPage from './pages/CorrelationPage/CorrelationPage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* <Route path="/" element={<StockPage />} /> */}
          {/* <Route path="/correlation" element={<CorrelationPage />} /> */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
