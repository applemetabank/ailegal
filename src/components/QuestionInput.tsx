import React, { useState } from 'react';
import { Send } from 'lucide-react';

const QuestionInput: React.FC = () => {
  const [question, setQuestion] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // TODO: Implement question submission logic
    console.log('Question submitted:', question);
    setQuestion('');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Ask a Question</h2>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask about your contract..."
          className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default QuestionInput;