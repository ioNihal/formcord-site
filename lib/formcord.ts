const NPM_LATEST_URL = "https://registry.npmjs.org/formcord/latest";
const FALLBACK_VERSION = "2.2.0";

/** Returns the latest published Formcord version, cached for one hour. */
export async function getLatestFormcordVersion(): Promise<string> {
    try {
        const response = await fetch(NPM_LATEST_URL, {
            next: { revalidate: 3600 },
        });

        if (!response.ok) return FALLBACK_VERSION;

        const packageInfo = (await response.json()) as { version?: string };
        return packageInfo.version ?? FALLBACK_VERSION;
    } catch {
        return FALLBACK_VERSION;
    }
}
