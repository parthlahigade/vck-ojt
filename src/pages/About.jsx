import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="content">
      <div className="page-container">
        <h1 className="animate-fade-in-up">About Vivekanand College</h1>
        <p>
          Vivekanand College stands as a beacon of knowledge and integrity, committed to delivering
          transformative education since its inception in <em>1980</em>. Located in the bustling
          heart of <em>Chembur, Mumbai</em>, our college has consistently strived to uphold the
          highest standards of academic rigor and ethical values.
        </p>

        <p>
          Our vision is to empower students with critical thinking skills, a global perspective, and
          a strong sense of social responsibility. We aim to nurture individuals who are not only
          successful in their careers but also contributing members of society.
        </p>

        <h2>&nbsp;Our Mission</h2>
        <ul>
          <li>To provide high-quality, accessible education across various disciplines.</li>
          <li>To foster research, innovation, and creativity among students and faculty.</li>
          <li>To cultivate a diverse and inclusive learning environment.</li>
          <li>To instill strong ethical values and leadership qualities.</li>
        </ul>

        <h2>&nbsp;Our Values</h2>
        <p>
          Integrity, Excellence, Innovation, Community, and Respect are the pillars upon which
          Vivekanand College is built. We encourage open dialogue, intellectual curiosity, and a
          relentless pursuit of knowledge.
        </p>

        <h2>&nbsp;Our History</h2>
        <p>
          Our journey began with a vision to make quality education available to all, and we
          continue that legacy today. From humble beginnings to becoming one of the most respected
          institutions in the region, our milestones reflect our dedication to excellence and
          community.
        </p>
      </div>
    </div>
  );
};

export default About;
