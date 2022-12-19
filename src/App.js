import "./App.css";
import MyCarousel from "./components/Carousel/MyCarousel";

import MyFooter from "./components/MyFooter/MyFooter";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Culture from "./components/Culture/Culture";
import Culture2 from "./components/Culture/Culture2";
import Blog from './components/Blog/Blog';
import CardProfile from "./components/Profile/CardProfile";
import Vision from "./components/Blog/Vision";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <MyGallery /> */}
      <MyCarousel />
      <Culture2/>
      <Vision/>
      <Culture />
      <Blog/>
      <CardProfile/>

      <About />
      <MyFooter />
    </div>
  );
}

export default App;
