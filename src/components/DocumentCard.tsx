import { Download } from 'lucide-react';
import type { Document } from '../types/training';

interface DocumentCardProps {
  document: Document;
}

const DocumentCard = ({ document }: DocumentCardProps) => {
  const handleDownload = () => {
    window.open(document.downloadUrl, '_blank');
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
      <h4 className="text-md font-semibold text-gray-700">{document.title}</h4>
      <button
        onClick={handleDownload}
        className="p-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label={`Download ${document.title}`}
      >
        <Download className="w-4 h-4" />
      </button>
    </div>
  );
};

export default DocumentCard;
