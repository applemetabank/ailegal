import React from 'react';
import Header from './components/Header';
import ContractUpload from './components/ContractUpload';
import ContractAnalysis from './components/ContractAnalysis';
import QuestionInput from './components/QuestionInput';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">AI-Powered Legal Contract Analysis</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <ContractUpload />
            <QuestionInput />
          </div>
          <ContractAnalysis />
        </div>
      </main>
    </div>
  );
}

export default App;