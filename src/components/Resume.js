import React from 'react';
import './Resume.css';

const Resume = () => {
  const personalInfo = {
    name: 'Jiya Jiveesha',
    email: 'jiya2v@gmail.com',
    phone: '9335847552',
  };

  const education = [
    {
      degree: 'High school',
      school: 'G.N.National Public School',
      year: '2003-2018',
    },
    {
      degree: 'Intermediate',
      school: 'Renaissance Academy',
      year: '2019-2020',
    },
    {
      degree: 'B-tech in Computer Science and Engineering',
      school: 'VIT Chennai',
      year: '2021- Present',
    },
  ];

  const experience = [
    {
      title: 'Intern',
      company: 'ABC Techz',
      year: '2022-2023',
      description: 'Worked on web application development using React and Node.js.',
    },
    {
      title: 'Intern',
      company: 'Deepmatrix',
      year: 'Summer 2023',
      description: 'Assisted in testing and quality assurance for software products.',
    },
  ];

  const skills = ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS'];

  return (
    <div className="resume">
      <div className="personal-info">
        <h1>{personalInfo.name}</h1>
        <p>Email: {personalInfo.email}</p>
        <p>Phone: {personalInfo.phone}</p>
      </div>

      <div className="section">
        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index}>
            <p>{edu.degree}</p>
            <p>{edu.school}</p>
            <p>{edu.year}</p>
            <br></br>
          </div>
        ))}
      </div>

      <div className="section">
        <br></br>
        <h2>Experience</h2>
        {experience.map((exp, index) => (
          <div key={index}>
            <h3>{exp.title}</h3>
            <p>{exp.company}</p>
            <p>{exp.year}</p>
            <p>{exp.description}</p>
            <br></br>
          </div>
        ))}
      </div>

      <div className="section">
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resume;





