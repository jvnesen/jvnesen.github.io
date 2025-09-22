import HeaderNavigation from '@/components/sections/header-navigation';
import PhotographyGrid from '@/components/sections/photography-grid';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderNavigation />
      <PhotographyGrid />
    </div>
  );
}