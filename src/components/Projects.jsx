import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'RAG PIPELINE',
      description: 'This project builds a simple semantic search engine using a Retrieval-Augmented Generation (RAG) approach. It encodes sentences from an AI article using all-MiniLM-L6-v2 (Sentence Transformers) and stores them as embeddings in ChromaDB. Users can perform intelligent queries to retrieve the most semantically relevant sentences based on cosine similarity—laying the groundwork for building smart Q&A systems.',
      link: 'https://colab.research.google.com/drive/1BrTkv7RvRDAcyWdlGFvG2peCw6-yi2PY?usp=sharing',
    },
    {
      title: 'Multilingual WhatsApp Chatbot with PDF-Based Contextual Q&A',
      description: 'This project is a powerful and intelligent WhatsApp chatbot that can answer user queries based on uploaded PDF documents. It integrates various advanced technologies including LangChain, HuggingFace Transformers, Firebase, ChromaDB, and Facebook’s WhatsApp Business API. It supports multilingual communication, enabling translation of queries and responses across different languages.',
      link: 'https://github.com/Ashutoshbhagat140275/MyvooProject1',
    },
    {
      title: 'Smart Flight Search and User Authentication System',
      description: 'This project is a full-stack Flight Search and Booking System designed using Express.js for the backend and React.js for the frontend. It allows users to search flights based on origin, destination, and travel date, and includes basic user authentication functionality (sign-up, login, and logout) using MongoDB for persistent data storage.',
      link: 'https://github.com/Ashutoshbhagat140275/assginment',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">My Projects</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;