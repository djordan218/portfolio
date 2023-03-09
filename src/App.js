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
      'I may be new to the tech field, but my love for programming and problem-solving goes back years. I`m a creative thinker, a problem-solver, self-driven, and refuse to believe I can`t figure something out. I have the desire to make anything I`m associated with better and greater. I always have the end user in mind and refuse to settle for anything less than great. I finished Springboard`s Software Engineering Career Track in early 2023 and am looking to get my first job as a Web Developer/Software Engineer.',
    brand2:
      'I have been in the Army Reserves for over 14 years and serve as a senior leader and SFC in the 395th Army Band. I have used my love of coding and created a mobile app to use within the unit for tasks, communication, and easier access to important information. I have worked as a Physical Therapist Assistant for 7 years, using creative problem-solving to improve lives and address difficult situations head on. I run my own business as a musician for ten years that requires serious self-drive and professionalism while contacting and communicating quickly and effectively with a diverse groups of people across the greater Oklahoma area. I have always had the desire to be associated with success and an innovative reputation and I plan on continuing that with web development.',
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
