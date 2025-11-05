import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface PdfViewerProps {
  pdfUrl?: string;
}

export function PdfViewer({ pdfUrl }: PdfViewerProps) {
  const downloadPdf = () => {
    if (pdfUrl) {
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'move-for-solidity-developers.pdf';
      link.click();
    }
  };

  if (!pdfUrl) {
    return (
      <div className="flex items-center justify-center p-8 border-2 border-dashed rounded-lg bg-muted/20">
        <p className="text-muted-foreground">
          Slides will be available here. Please upload a PDF to display.
        </p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center">
      <Button onClick={downloadPdf} className="gap-2" size="lg">
        <Download className="h-5 w-5" />
        Download Workshop Slides
      </Button>
    </div>
  );
}
