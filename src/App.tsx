import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

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

function App() {
  return (
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
  );
}

export default App;