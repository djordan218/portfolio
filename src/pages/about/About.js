import AboutMe from '../../components/AboutMe';
import PageHeader from '../../components/PageHeader';

const About = ({ name, location, brand, brand2, email, availability }) => {
  return (
    <section className="about">
      <PageHeader title="About Me" description="Just a little bit" />
      <AboutMe
        name={name}
        location={location}
        brand={brand}
        brand2={brand2}
        email={email}
        availability={availability}
      />
    </section>
  );
};

export default About;
