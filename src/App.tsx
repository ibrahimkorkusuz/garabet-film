import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./Theme.css";
import Home from "./pages/home/home";
import Movie from "./pages/movie/movie";
import Documentary from "./pages/documentary/documentary";
import Services from "./pages/services/services";
import News from "./pages/news/news";
import Crew from "./pages/crew/crew";
import Contact from "./pages/contact/contact";
import Layout from "./components/layoutComponent/layout";


function App() {
  return (
    <div className="main-class">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movie" element={<Movie />} />
            <Route path="documentary" element={<Documentary />} />
            <Route path="services" element={<Services />} />
            <Route path="news" element={<News />} />
            <Route path="crew" element={<Crew />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
