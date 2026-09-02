import SiteShell from "../../components/site-shell";

const engg1101NotionEmbedUrl =
    "https://engineering-challenges.notion.site/ebd//bb7d72aefb85829ea48381c1d8bdd58e";

export default function Engg1101NotionPage() {
    return (
        <SiteShell>
            <main className="h-[calc(100dvh-65px)] w-full">
                <iframe
                    src={engg1101NotionEmbedUrl}
                    title="ENGG1101 Workshop Materials"
                    className="block h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allow="clipboard-read; clipboard-write"
                />
            </main>
        </SiteShell>
    );
}
