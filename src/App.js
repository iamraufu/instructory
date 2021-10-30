import './App.css';
import Courses from './Components/Courses/Courses';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Search from './Components/Search/Search';


function App() {
  return (
    <div>
      <Hero />
      <Search />
      <Courses title="INSTRUCTOR'S COMPETITION"></Courses>
      <Courses title="NEWLY LAUNCHED COURSES"></Courses>
      <Footer />
    </div>
  );
}

export default App;
