import { PdfViewer } from '@/components/PdfViewer';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Github, FileText, Twitter, Linkedin } from 'lucide-react';

function App() {
  // Set this to your PDF URL when ready
  const pdfUrl = '/Move for Solidity Devs.pdf'; // PDF from public folder

  // Set this to your YouTube video ID when ready
  const youtubeVideoId = ''; // e.g., 'dQw4w9WgXcQ'

  const shareUrl = window.location.href;
  const shareText = 'Check out this workshop: Move for Solidity Developers at Smartcon';

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      '_blank'
    );
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      '_blank'
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Move for Solidity Developers</h1>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Move for Solidity Developers
          </h2>
        </section>

        <Separator className="mb-12" />

        {/* Workshop Overview */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-4">Workshop Overview</h3>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              This is a workshop for Chainlink's Smartcont 2025 in New York City. This workshop is
              designed for Solidity developers looking to expand their knowledge of the Move 
              programming language. This workshop covers the fundamental concepts of Move, and 
              compares it with Solidity's approach to smart contract development.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              This landing page prvodies you with the slides, github repository, and movement documentation, 
              to help you get started with the workshop.
            </p>
          </div>
        </section>

        <Separator className="mb-12" />

        {/* Slides Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">Workshop Slides</h3>
          <PdfViewer pdfUrl={pdfUrl} />
        </section>

        <Separator className="mb-12" />

        {/* Resources Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Github className="h-5 w-5" />
                  GitHub Repository
                </CardTitle>
                <CardDescription>
                  Access the complete codebase, examples, and exercises from the workshop
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button asChild className="w-full">
                  <a
                    href="https://github.com/Rahat-ch/move-for-solidity-devs-smartcon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Movement Documentation
                </CardTitle>
                <CardDescription>
                  Official Movement documentation and developer resources
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button asChild className="w-full">
                  <a
                    href="https://docs.movementlabs.xyz/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read Documentation
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="mb-12" />

        {/* Recording Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">Workshop Recording</h3>
          {youtubeVideoId ? (
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                title="Workshop Recording"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="aspect-video w-full rounded-lg border-2 border-dashed bg-muted/20 flex items-center justify-center">
              <p className="text-muted-foreground text-lg">
                If this workshop is recorded, it will be added here.
              </p>
            </div>
          )}
        </section>

        {/* Social Share Section */}
        <section className="text-center">
          <p className="text-sm text-muted-foreground mb-4">Share this workshop</p>
          <div className="flex items-center justify-center gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={shareOnTwitter}
              aria-label="Share on Twitter"
            >
              <Twitter className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={shareOnLinkedIn}
              aria-label="Share on LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          <p>Move for Solidity Developers - Smartcon Workshop</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
