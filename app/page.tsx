import CinematicExperience from './components/CinematicExperience';
import CustomCursor from './components/CustomCursor';

export default function Home() {
  return (
    <main className="relative bg-[#F7F5F0] text-[#111111] selection:bg-[#B8FF00] selection:text-[#111111]">
      {/* Interactive Desktop Magnetic Cursor */}
      <CustomCursor />

      {/* Continuous 3D Motion Film Experience */}
      <CinematicExperience />
    </main>
  );
}
