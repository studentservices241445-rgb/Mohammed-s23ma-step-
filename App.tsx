
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Courses from './components/Courses';
import Resources from './components/Resources';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';
import Chatbot from './components/Chatbot';
import PrivacyPolicy from './components/PrivacyPolicy';
import type { Plan } from './types';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [currentView, setCurrentView] = useState<'home' | 'privacy'>('home');

  const openModal = (plan?: Plan) => {
    setSelectedPlan(plan || null);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedPlan(null), 300); // Clear selection after animation
  };

  if (currentView === 'privacy') {
    return <PrivacyPolicy onBack={() => setCurrentView('home')} />;
  }

  return (
    <div className="bg-slate-50 text-slate-800 font-sans selection:bg-teal-200 selection:text-teal-900">
      <Header onRegisterClick={() => openModal()} />
      <main>
        <Hero onRegisterClick={() => openModal()} />
        <Features />
        <Courses onRegisterClick={(course) => openModal(course)} />
        <Resources onRegisterClick={(resource) => openModal(resource)} />
        <Testimonials />
        <FAQ />
      </main>
      <Footer onPrivacyClick={() => setCurrentView('privacy')} />
      <Chatbot />
      {isModalOpen && <RegistrationModal onClose={closeModal} selectedPlan={selectedPlan} />}
    </div>
  );
};

export default App;
