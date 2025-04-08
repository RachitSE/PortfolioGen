'use client';

import { useState } from 'react';
import { generateIntro } from '../lib/generateIntro'; // adjust path as needed
import { PDFDownloadLink } from '@react-pdf/renderer';
import PortfolioPDF from './PortfolioPDF';

const BuilderInterface = () => {
  const [currentStep, setCurrentStep] = useState('profile');
  const [profilePic, setProfilePic] = useState(null);
  const [profilePreview, setProfilePreview] = useState(null);
  const [fullName, setFullName] = useState('');
  const [bio, setBio] = useState('');
  const [projects, setProjects] = useState([{ title: '', description: '' }]);
  const [skills, setSkills] = useState(['']);
  const [generatedIntro, setGeneratedIntro] = useState('');
  const [loadingIntro, setLoadingIntro] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(file);
      setProfilePreview(URL.createObjectURL(file));
    }
  };

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...projects];
    updatedProjects[index][field] = value;
    setProjects(updatedProjects);
  };

  const addProject = () => {
    setProjects([...projects, { title: '', description: '' }]);
  };

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    setSkills(updatedSkills);
  };

  const addSkill = () => {
    setSkills([...skills, '']);
  };

  const handleGenerateIntro = async () => {
    setLoadingIntro(true);
    const intro = await generateIntro(fullName, projects, skills);
    setBio(intro);
    setGeneratedIntro(intro);
    setLoadingIntro(false);
  };

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-black text-white p-6 md:p-12">
      <div className="mb-6 flex justify-end max-w-7xl mx-auto">
  <a
    href="/"
    className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-all"
  >
    🏠 Return to Home
  </a>
</div>

      <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
        {/* Sidebar Steps */}
        <div className="w-full md:w-1/4 bg-gray-950 rounded-2xl p-6 shadow-lg border border-pink-500/20">
          <h2 className="text-xl font-bold mb-6 text-pink-400">Builder Steps</h2>
          {['profile', 'projects', 'skills', 'preview'].map((step) => (
            <button
              key={step}
              className={`w-full text-left px-4 py-2 mb-2 rounded-lg transition-all ${
                currentStep === step
                  ? 'bg-pink-600 text-white'
                  : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
              }`}
              onClick={() => setCurrentStep(step)}
            >
              {step.charAt(0).toUpperCase() + step.slice(1)}
            </button>
          ))}
        </div>

        {/* Right Pane */}
        <div className="w-full md:w-3/4 bg-gray-900 rounded-2xl p-8 shadow-2xl border border-pink-500/10">
          {/* Profile Step */}
          {currentStep === 'profile' && (
            <div>
              <h3 className="text-2xl font-bold mb-4">👤 Profile Information</h3>
              <form className="space-y-4">
                <div>
                  <label className="block mb-2 text-sm font-semibold">Upload Profile Picture</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="w-full px-4 py-2 rounded-lg bg-black border border-pink-500/30 text-white"
                  />
                  {profilePreview && (
                    <img
                      src={profilePreview}
                      alt="Profile Preview"
                      className="mt-4 w-24 h-24 object-cover rounded-full border-2 border-pink-500"
                    />
                  )}
                </div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-black border border-pink-500/30 text-white"
                />
                <textarea
                  placeholder="Write your bio... (Include your qualifications as well)"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-black border border-pink-500/30 text-white"
                  rows={4}
                />
                <button
                  type="button"
                  onClick={handleGenerateIntro}
                  disabled={loadingIntro}
                  className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
                >
                  {loadingIntro ? 'Generating...' : '✨ Generate Intro with AI'}
                </button>
              </form>
            </div>
          )}

          {/* Projects Step */}
          {currentStep === 'projects' && (
            <div>
              <h3 className="text-2xl font-bold mb-4">💼 Projects</h3>
              {projects.map((project, index) => (
                <div key={index} className="mb-6 space-y-2">
                  <input
                    type="text"
                    value={project.title}
                    onChange={(e) => handleProjectChange(index, 'title', e.target.value)}
                    placeholder={`Project Title ${index + 1}`}
                    className="w-full px-4 py-2 rounded-lg bg-black border border-pink-500/30 text-white"
                  />
                  <textarea
                    value={project.description}
                    onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
                    placeholder="Project Description"
                    rows={3}
                    className="w-full px-4 py-2 rounded-lg bg-black border border-pink-500/30 text-white"
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={addProject}
                className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
              >
                ➕ Add Another Project
              </button>
            </div>
          )}

          {/* Skills Step */}
          {currentStep === 'skills' && (
            <div>
              <h3 className="text-2xl font-bold mb-4">⚙️ Skills</h3>
              {skills.map((skill, index) => (
                <input
                  key={index}
                  type="text"
                  value={skill}
                  onChange={(e) => handleSkillChange(index, e.target.value)}
                  placeholder={`Skill ${index + 1}`}
                  className="w-full mb-3 px-4 py-2 rounded-lg bg-black border border-pink-500/30 text-white"
                />
              ))}
              <button
                type="button"
                onClick={addSkill}
                className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
              >
                ➕ Add Skill
              </button>
            </div>
          )}

          {/* Preview Step */}
          {currentStep === 'preview' && (
            <div>
              <h3 className="text-2xl font-bold mb-4">🌟 Portfolio Preview</h3>
              <div className="bg-gray-950 border border-pink-500/20 p-6 rounded-xl space-y-4">
                {profilePreview && (
                  <img
                    src={profilePreview}
                    alt="Preview Profile"
                    className="w-20 h-20 rounded-full border border-pink-500 mb-4"
                  />
                )}
                <h2 className="text-xl font-bold text-pink-400">{fullName}</h2>
                <p className="text-gray-300 whitespace-pre-line">{bio}</p>

                <div>
                  <h4 className="text-lg font-semibold mt-4 text-pink-300">Projects</h4>
                  <ul className="list-disc list-inside text-gray-300">
                    {projects.map((p, i) => (
                      <li key={i}><strong>{p.title}:</strong> {p.description}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mt-4 text-pink-300">Skills</h4>
                  <p className="text-gray-300">{skills.filter(s => s).join(', ')}</p>
                </div>

                <PDFDownloadLink
                  document={
                    <PortfolioPDF
                      fullName={fullName}
                      bio={bio}
                      projects={projects}
                      skills={skills}
                      profilePic={profilePic}
                    />
                  }
                  fileName={`${fullName}_Portfolio.pdf`}
                >
                  {({ loading }) =>
                    loading ? (
                      <span className="px-4 py-2 bg-gray-600 text-white rounded-lg">Loading PDF...</span>
                    ) : (
                      <button className="mt-6 px-4 py-2 bg-gradient-to-r from-pink-600 to-pink-400 text-white rounded-lg hover:scale-105 transition">
                        ⬇️ Download Portfolio PDF
                      </button>
                    )
                  }
                </PDFDownloadLink>

                {generatedIntro && (
                  <div className="mt-6 p-4 rounded-xl bg-black border border-pink-500/30 text-pink-300 whitespace-pre-line shadow-lg">
                    {generatedIntro}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BuilderInterface;
