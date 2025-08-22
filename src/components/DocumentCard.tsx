import { Download } from 'lucide-react';
import type { Document } from '../types/training';
import PDFThumbnail from './PDFThumbnail';

interface DocumentCardProps {
  document: Document;
}

const DocumentCard = ({ document }: DocumentCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center text-center shadow-sm">
      <div className="w-full h-40 mb-4">
        <PDFThumbnail url={document.url} className="w-full h-40" />
      </div>
      <h4 className="text-md font-semibold text-gray-700 mb-2 flex-grow">{document.title}</h4>
      <a
        href={document.url}
        download
        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors"
      >
        <Download className="w-4 h-4 mr-2"/>
        Download
      </a>
    </div>
  );
};

export default DocumentCard;
