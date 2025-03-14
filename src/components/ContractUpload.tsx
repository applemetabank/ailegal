import React from 'react';
import { Upload } from 'lucide-react';

const ContractUpload: React.FC = () => {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: Implement file upload logic
    console.log('File uploaded:', event.target.files?.[0]);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-xl font-semibold mb-4">Upload Contract</h2>
      <div className="flex items-center justify-center w-full">
        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <Upload className="w-10 h-10 mb-3 text-gray-400" />
            <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500">PDF, DOCX, or TXT (MAX. 10MB)</p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" onChange={handleFileUpload} accept=".pdf,.docx,.txt" />
        </label>
      </div>
    </div>
  );
};

export default ContractUpload;