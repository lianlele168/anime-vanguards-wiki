import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://animevanguards.robloxwikihub.com';

  const routes = [
    '',
    '/unit-calculator',
    '/trait-simulator',
    '/tier-list',
    '/codes',
    '/evolution-recipes',
    '/guides'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/codes' || route === '/unit-calculator' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8
  }));
}
