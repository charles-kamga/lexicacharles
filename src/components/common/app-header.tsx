import { SidebarTrigger } from '@/components/ui/sidebar';

type AppHeaderProps = {
  title: string;
};

export function AppHeader({ title }: AppHeaderProps) {
  return (
    <header className="flex items-center justify-between p-4 border-b md:p-6">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="md:hidden" />
        <h1 className="text-2xl font-bold md:text-3xl font-headline">{title}</h1>
      </div>
    </header>
  );
}
