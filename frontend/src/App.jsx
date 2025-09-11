// src/App.jsx
import Header from "./layout/Header.jsx";
import Footer from "./layout/Footer.jsx";
import PageContent from "./layout/PageContent.jsx";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PageContent />
      <Footer />
    </div>
  );
}
