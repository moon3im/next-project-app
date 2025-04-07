"use client";
import React, { useState } from "react";
import { UploadCloud } from "lucide-react";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string>("");
  const [dragActive, setDragActive] = useState<boolean>(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setUploadStatus("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        setUploadStatus(`✅ File uploaded: ${data.url}`);
      } else {
        setUploadStatus(`❌ Upload failed: ${data.error}`);
      }
    } catch (error) {
      setUploadStatus("❌ Error uploading file.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Upload a File</h2>

        {/* Drag & Drop Area */}
        <label
          className={`border-2 border-dashed rounded-xl p-10 cursor-pointer flex flex-col items-center justify-center ${
            dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
          }`}
        >
          <UploadCloud size={40} className="text-gray-500 mb-3" />
          <p className="text-gray-600">Drag & Drop your file here</p>
          <p className="text-sm text-gray-400">or click to select</p>
          <input
            type="file"
            className="hidden"
            onChange={handleFileChange}
            onDragOver={() => setDragActive(true)}
            onDragLeave={() => setDragActive(false)}
            onDrop={() => setDragActive(false)}
          />
        </label>

        {/* Selected File Preview */}
        {file && (
          <p className="mt-4 text-gray-700">
            📄 <strong>{file.name}</strong>
          </p>
        )}

        {/* Upload Button */}
        <button
          onClick={handleUpload}
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all"
        >
          Upload File
        </button>

        {/* Upload Status Message */}
        {uploadStatus && (
          <p className="mt-4 text-sm font-medium text-gray-700">{uploadStatus}</p>
        )}
      </div>
    </div>
  );
}
