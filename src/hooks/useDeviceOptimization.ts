'use client';

import { useState, useEffect } from 'react';

export interface DeviceInfo {
  os: 'android' | 'ios' | 'windows' | 'macos' | 'linux' | 'other';
  isAndroid: boolean;
  isIOS: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  browser: 'chrome' | 'firefox' | 'brave' | 'safari' | 'edge' | 'samsung' | 'other';
  browserName: string;
  isBrave: boolean;
  isFirefox: boolean;
  isChrome: boolean;
  isSafari: boolean;
  screenCategory: 'compact' | 'standard' | 'tablet' | 'desktop';
  width: number;
  height: number;
  dpr: number;
  hasTouch: boolean;
  hasWebSpeech: boolean;
  hasMediaRecorder: boolean;
  orientation: 'portrait' | 'landscape';
  isStandalonePWA: boolean;
}

export function useDeviceOptimization(): DeviceInfo {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    os: 'other',
    isAndroid: false,
    isIOS: false,
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    browser: 'other',
    browserName: 'Unknown',
    isBrave: false,
    isFirefox: false,
    isChrome: false,
    isSafari: false,
    screenCategory: 'desktop',
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
    dpr: typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1,
    hasTouch: false,
    hasWebSpeech: false,
    hasMediaRecorder: false,
    orientation: 'landscape',
    isStandalonePWA: false,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ua = navigator.userAgent || '';
    const platform = (navigator as any).userAgentData?.platform || navigator.platform || '';

    // 1. Detect Operating System
    const isAndroid = /Android/i.test(ua);
    const isIOS = /iPhone|iPad|iPod/i.test(ua) || (platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const isWindows = /Windows/i.test(ua);
    const isMac = /Macintosh|Mac OS/i.test(ua) && !isIOS;
    const isLinux = /Linux/i.test(ua) && !isAndroid;

    let os: DeviceInfo['os'] = 'other';
    if (isAndroid) os = 'android';
    else if (isIOS) os = 'ios';
    else if (isWindows) os = 'windows';
    else if (isMac) os = 'macos';
    else if (isLinux) os = 'linux';

    // 2. Detect Browser Engine
    const isSamsung = /SamsungBrowser/i.test(ua);
    const isFirefox = /Firefox|FxiOS/i.test(ua);
    const isEdge = /Edg/i.test(ua);
    const isBrave = Boolean((navigator as any).brave && typeof (navigator as any).brave.isBrave === 'function');
    const isChrome = !isBrave && !isEdge && !isSamsung && /Chrome|CriOS/i.test(ua);
    const isSafari = !isChrome && !isBrave && !isEdge && !isFirefox && !isSamsung && /Safari/i.test(ua);

    let browser: DeviceInfo['browser'] = 'other';
    let browserName = 'Browser';
    if (isBrave) { browser = 'brave'; browserName = 'Brave'; }
    else if (isFirefox) { browser = 'firefox'; browserName = 'Firefox'; }
    else if (isSamsung) { browser = 'samsung'; browserName = 'Samsung Internet'; }
    else if (isEdge) { browser = 'edge'; browserName = 'Microsoft Edge'; }
    else if (isChrome) { browser = 'chrome'; browserName = 'Google Chrome'; }
    else if (isSafari) { browser = 'safari'; browserName = 'Apple Safari'; }

    // 3. Audio & Speech Capabilities
    const hasWebSpeech = Boolean(
      typeof window !== 'undefined' && 
      ((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition)
    );
    const hasMediaRecorder = Boolean(
      typeof window !== 'undefined' && 
      typeof (window as any).MediaRecorder !== 'undefined'
    );
    const hasTouch = Boolean(
      'ontouchstart' in window || 
      navigator.maxTouchPoints > 0
    );

    // 4. Standalone PWA detection
    const isStandalonePWA = Boolean(
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone
    );

    // 5. Dimension & Resolution Calculation
    const updateDimensions = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      const orientation = width > height ? 'landscape' : 'portrait';

      // Screen category
      let screenCategory: DeviceInfo['screenCategory'] = 'desktop';
      if (width < 380) screenCategory = 'compact';
      else if (width <= 480) screenCategory = 'standard';
      else if (width <= 768) screenCategory = 'tablet';
      else screenCategory = 'desktop';

      const isMobile = width <= 640 || isAndroid || (isIOS && width < 768);
      const isTablet = (width > 640 && width <= 1024) && (hasTouch || isIOS || isAndroid);
      const isDesktop = !isMobile && !isTablet;

      // Update CSS Variables on document root for pixel-perfect dynamic layouts
      const vh = height * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      document.documentElement.style.setProperty('--app-height', `${height}px`);
      document.documentElement.style.setProperty('--viewport-width', `${width}px`);
      document.documentElement.style.setProperty('--dpr', `${dpr}`);

      // Apply tailored device classes to <html> for CSS adaptations
      const htmlClasses = document.documentElement.classList;
      htmlClasses.toggle('device-mobile', isMobile);
      htmlClasses.toggle('device-tablet', isTablet);
      htmlClasses.toggle('device-desktop', isDesktop);
      htmlClasses.toggle('device-android', isAndroid);
      htmlClasses.toggle('device-ios', isIOS);
      htmlClasses.toggle('browser-brave', isBrave);
      htmlClasses.toggle('browser-firefox', isFirefox);
      htmlClasses.toggle('browser-chrome', isChrome);
      htmlClasses.toggle('browser-safari', isSafari);
      htmlClasses.toggle('screen-compact', screenCategory === 'compact');
      htmlClasses.toggle('has-touch', hasTouch);

      setDeviceInfo({
        os,
        isAndroid,
        isIOS,
        isMobile,
        isTablet,
        isDesktop,
        browser,
        browserName,
        isBrave,
        isFirefox,
        isChrome,
        isSafari,
        screenCategory,
        width,
        height,
        dpr,
        hasTouch,
        hasWebSpeech,
        hasMediaRecorder,
        orientation,
        isStandalonePWA,
      });
    };

    updateDimensions();

    window.addEventListener('resize', updateDimensions);
    window.addEventListener('orientationchange', updateDimensions);

    // Also check on visualViewport change for mobile virtual keyboard
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', updateDimensions);
    }

    return () => {
      window.removeEventListener('resize', updateDimensions);
      window.removeEventListener('orientationchange', updateDimensions);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', updateDimensions);
      }
    };
  }, []);

  return deviceInfo;
}
