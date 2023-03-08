import Header from './components/Header';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  const personalDetails = {
    name: 'Daniel Jordan',
    location: 'Tulsa, Oklahoma',
    tagline: 'Web Developer | Software Engineer',
    email: 'djordan218@gmail.com',
    availability: 'Open to work!',
    brand:
      "I may be new to the tech field, but my love for programming and problem-solving goes back years. I'm a creative thinker, a problem-solver, self-driven, and refuse to believe I can't figure something out. I have the desire to make anything I'm associated with better and greater. I always have the end user in mind and refuse to settle for anything less than great. I finished Springboard's Software Engineering Career Track in early 2023 and am looking to get my first job as a Web Developer/Software Engineer. ",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
