import { createFileRoute } from '@tanstack/react-router';
import { LegacyPage } from '@/components/legacy-page';
import { MenuSkeleton } from '@/components/menu-skeleton';
import { updatesFragments, updatesPage } from '@/data/updates';
import { useRouteStylesheets } from '@/lib/route-stylesheets';

export const Route = createFileRoute('/updates')({
  head: () => ({ meta: [
    { title: updatesPage.title },
    { name: 'description', content: updatesPage.description },
    { property: 'og:title', content: updatesPage.title },
    { property: 'og:description', content: updatesPage.description },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ], links: updatesPage.links.map(href => ({ rel: 'stylesheet', href })) }),
  component: Updates,
});

function Updates() {
  const ready = useRouteStylesheets(updatesPage.links);
  return <div className="updates-page">
    {!ready && <div className="documents-skeleton-overlay"><MenuSkeleton /></div>}
    <div className={ready ? 'route-fade route-fade--in' : 'route-fade'}>
      <LegacyPage data={updatesPage} fragments={updatesFragments} />
    </div>
  </div>;
}