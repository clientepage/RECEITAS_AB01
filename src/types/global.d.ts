// Declarações globais para TypeScript
declare global {
  interface Window {
    pixelId: string;
    pixelConfig: {
      trackPageView: boolean;
      trackClicks: boolean;
      trackScrollDepth: boolean;
      trackTimeOnPage: boolean;
      trackFormSubmissions: boolean;
      trackButtonClicks: boolean;
      trackVideoViews: boolean;
      trackDownloads: boolean;
      trackOutboundLinks: boolean;
      trackCustomEvents: boolean;
      trackMouseMovement: boolean;
      trackKeyboardEvents: boolean;
      trackTouchEvents: boolean;
      trackWindowEvents: boolean;
      trackNetworkEvents: boolean;
      trackPerformanceMetrics: boolean;
      trackUserAgent: boolean;
      trackScreenResolution: boolean;
      trackTimezone: boolean;
      trackLanguage: boolean;
      trackReferrer: boolean;
      trackSessionData: boolean;
      trackLocalStorage: boolean;
      trackCookies: boolean;
      captureAllEvents: boolean;
    };
    normalizedUrl: string;
    trackEvent: (eventName: string, eventData?: any) => void;
    utmify: {
      pixel: {
        track: (eventName: string, data?: any) => void;
      };
    };
  }
}

export {};