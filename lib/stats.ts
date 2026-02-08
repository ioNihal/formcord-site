export async function getStats() {
  const [ghRes, npmRes, sizeRes, registryRes] = await Promise.all([
    fetch("https://api.github.com/repos/ioNihal/formcord", {
      next: { revalidate: 3600 },
    }),
    fetch("https://api.npmjs.org/downloads/point/last-week/formcord", {
      next: { revalidate: 3600 },
    }),
    fetch("https://bundlephobia.com/api/size?package=formcord", {
      next: { revalidate: 3600 },
    }),
    fetch("https://registry.npmjs.org/formcord", {
      next: { revalidate: 3600 },
    }),
  ]);

  const gh = ghRes.ok ? await ghRes.json() : null;
  const npm = npmRes.ok ? await npmRes.json() : null;
  const size = sizeRes.ok ? await sizeRes.json() : null;
  const registry = registryRes.ok ? await registryRes.json() : null;

  return {
    stars: gh?.stargazers_count ?? 0,
    weekly: npm?.downloads ?? 0,
    gzipBytes: size?.gzip ?? 0,
    license: registry?.license ?? "MIT",
  };
}
