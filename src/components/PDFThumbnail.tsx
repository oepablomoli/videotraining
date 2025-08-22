import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { FileText, Loader2 } from 'lucide-react';

// Set up the worker for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFThumbnailProps {
  url: string;
  className?: string;
}

const PDFThumbnail = ({ url, className = "w-full h-40" }: PDFThumbnailProps) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [, setNumPages] = useState<number | null>(null);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setLoading(false);
    setError(false);
  };

  const onDocumentLoadError = (error: Error) => {
    console.error('Error loading PDF:', error);
    setError(true);
    setLoading(false);
  };

  const onPageLoadError = (error: Error) => {
    console.error('Error loading PDF page:', error);
    setError(true);
    setLoading(false);
  };

  // Fallback component for errors or loading
  const Fallback = ({ icon: Icon, text }: { icon: any; text: string }) => (
    <div className={`${className} bg-blue-100 rounded-md flex items-center justify-center`}>
      <div className="text-center">
        <Icon className="w-8 h-8 text-blue-500 mx-auto mb-2" />
        <p className="text-blue-500 font-medium text-sm">{text}</p>
      </div>
    </div>
  );

  if (loading) {
    return <Fallback icon={Loader2} text="Loading Preview..." />;
  }

  if (error) {
    return <Fallback icon={FileText} text="PDF Preview" />;
  }

  return (
    <div className={`${className} rounded-md overflow-hidden bg-white border border-gray-200 flex items-center justify-center`}>
      <Document
        file={url}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
        loading={<Fallback icon={Loader2} text="Loading Preview..." />}
      >
        <Page
          pageNumber={1}
          width={160} // Fixed width for thumbnail
          onLoadError={onPageLoadError}
          renderTextLayer={false} // Disable text layer for performance
          renderAnnotationLayer={false} // Disable annotation layer for performance
        />
      </Document>
    </div>
  );
};

export default PDFThumbnail;
