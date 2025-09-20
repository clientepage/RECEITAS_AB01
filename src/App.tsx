import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import { ErrorBoundary } from 'react-error-boundary';

// Lazy load non-critical components with better chunking
const KnowledgeSection = lazy(() => import('./components/KnowledgeSection'));
const ScienceSection = lazy(() => import('./components/ScienceSection'));
const NaturalRemediesList = lazy(() => import('./components/NaturalRemediesList'));
const Gallery = lazy(() => import('./components/Gallery'));
const Benefits = lazy(() => import('./components/Benefits'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Pricing = lazy(() => import('./components/Pricing'));
const FAQ = lazy(() => import('./components/FAQ'));
const Footer = lazy(() => import('./components/Footer'));

// Optimized loading component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-8" role="status" aria-label="Carregando">
    <div className="w-8 h-8 border-2 border-natural-200 border-t-natural-600 rounded-full animate-spin"></div>
  </div>
);

// Intersection Observer for better lazy loading
const LazySection = ({ children, fallback = <div className="h-20"></div> }: { children: React.ReactNode, fallback?: React.ReactNode }) => (
  <Suspense fallback={fallback}>
    {children}
  </Suspense>
);

// Error fallback component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error, resetErrorBoundary: () => void }) => (
  <div className="min-h-screen flex items-center justify-center bg-natural-50">
    <div className="text-center p-8">
      <h2 className="text-2xl font-bold text-natural-800 mb-4">Algo deu errado</h2>
      <p className="text-natural-600 mb-4">Ocorreu um erro inesperado. Tente recarregar a página.</p>
      <button 
        onClick={resetErrorBoundary}
        className="bg-natural-600 text-white px-6 py-3 rounded-full hover:bg-natural-700 transition-colors"
      >
        Tentar novamente
      </button>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.reload()}>
      <div className="font-sans text-natural-900 optimize-rendering">
        <Header />
        <main className="pt-16">
          <Hero />
          <LazySection>
            <KnowledgeSection />
          </LazySection>
          <LazySection>
            <ScienceSection />
          </LazySection>
          <LazySection>
            <NaturalRemediesList />
          </LazySection>
          <LazySection>
            <Gallery />
          </LazySection>
          <LazySection>
            <Benefits />
          </LazySection>
          <LazySection fallback={<LoadingSpinner />}>
            <Testimonials />
          </LazySection>
          <LazySection>
            <Pricing />
          </LazySection>
          <LazySection>
            <FAQ />
          </LazySection>
        </main>
        <LazySection>
          <Footer />
        </LazySection>
      </div>
    </ErrorBoundary>
  );
}

export default App;