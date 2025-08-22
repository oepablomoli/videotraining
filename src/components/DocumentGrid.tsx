import DocumentCard from './DocumentCard';
import type { Document } from '../types/training';

interface DocumentGridProps {
  documents: Document[];
}

const DocumentGrid = ({ documents }: DocumentGridProps) => {
  return (
    <div className="max-w-4xl mx-auto">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Associated Documents</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {documents.map((document, index) => (
          <DocumentCard key={index} document={document} />
        ))}
      </div>
    </div>
  );
};

export default DocumentGrid;
