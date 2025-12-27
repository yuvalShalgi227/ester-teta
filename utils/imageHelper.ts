/**
 * Image helper utility to load local images with fallback to internet URLs
 */

export interface ImageConfig {
  localPath: string;
  fallbackUrl: string;
  alt: string;
}

export const IMAGES = {
  hero: {
    localPath: '/images/teta1.png',
    fallbackUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80',
    alt: 'Esther Theta - Spiritual Healing'
  },
  meditation: {
    localPath: '/images/teta2.png',
    fallbackUrl: 'https://images.unsplash.com/photo-1528319725582-ddc096101511?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80',
    alt: 'Meditation Practice'
  }
} as const;

/**
 * Hook to get image source with fallback
 */
export const useImageWithFallback = (config: ImageConfig) => {
  const [imageSrc, setImageSrc] = React.useState<string>(config.localPath);

  React.useEffect(() => {
    const img = new Image();
    img.src = config.localPath;

    img.onerror = () => {
      setImageSrc(config.fallbackUrl);
    };

    img.onload = () => {
      setImageSrc(config.localPath);
    };
  }, [config.localPath, config.fallbackUrl]);

  return imageSrc;
};

/**
 * Simple function to get image source with fallback
 * Tries local path first, falls back to internet URL if not found
 */
export const getImageSrc = (localPath: string, fallbackUrl: string): string => {
  try {
    return localPath;
  } catch {
    return fallbackUrl;
  }
};

import React from 'react';
