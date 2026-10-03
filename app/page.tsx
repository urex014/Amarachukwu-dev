import CinematicExperience from './components/CinematicExperience';
import CustomCursor from './components/CustomCursor';

export default function Home() {
  return (
    <main className="relative bg-[#070707] text-[#F2F2F0] selection:bg-[#101010]/20 selection:text-white">
      {/* Interactive Desktop Magnetic Cursor */}
      <CustomCursor />

      {/* Continuous 3D Motion Film Experience */}
      <CinematicExperience />
    </main>
  );
}
