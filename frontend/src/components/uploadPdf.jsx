import { useState } from 'react';

export default function FileUploadComponent() {
  const [file, setFile] = useState(null);
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setError('');
  };

  const handleSubmit = async () => {
    if (!file) {
      setError('Please select a file');
      return;
    }

    try {
      setLoading(true);
      setOutput('');
      
      const formData = new FormData();
      formData.append('file', file);
      
      // Replace with your actual API endpoint
      const response = await fetch('http://localhost:8080/v1/extract/pdf', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      
      const data = await response.json();
      setOutput(JSON.stringify(data.data, null, 2));
    } catch (err) {
      setError(`Upload failed: ${err.message}`);
    } finally {
      setLoading(false);
      setFile(null);
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-4">FILE UPLOAD</h1>
      <div className="w-full border-2 border-purple-500 border-dashed rounded-md p-4 text-center">
        <input
          type="file"
          id="file-upload"
          className="hidden"
          onChange={handleFileChange}
        />
        <label 
          htmlFor="file-upload"
          className="text-purple-800 font-medium cursor-pointer"
        >
          Upload File
        </label>
        {file && (
          <div className="mt-2 text-sm text-gray-600">
            Selected: {file.name}
          </div>
        )}
      </div>
      
      <div className="w-full bg-gray-100 rounded-md p-4 min-h-32">
        <p className="text-gray-400 text-center">
          {output ? output : 'Output will be shown here'}
        </p>
      </div>
      
      {error && (
        <div className="text-red-500 text-sm">
          {error}
        </div>
      )}
      
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition-colors disabled:bg-gray-400"
      >
        {loading ? 'Uploading...' : 'Upload File'}
      </button>
    </div>
  );
}
