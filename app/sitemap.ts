import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://daves.co.ke';

  return [
    {
      url: baseUrl,
      priority: 1,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/pages/about`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/pages/service`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/pages/company`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/pages/pricing`,
      lastModified: new Date().toISOString(),
    },
  ];
}
