import { X, MapPin, Search, List, Lock, Globe, BookOpen } from 'lucide-react';

interface DocsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Section = ({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
  <div className="mb-8">
    <div className="flex items-center gap-3 mb-3">
      <div className="w-8 h-8 rounded-lg bg-[#353d4f] flex items-center justify-center text-[#e8eaed] flex-shrink-0">
        {icon}
      </div>
      <h3 className="text-[#e8eaed] font-playfair text-lg font-semibold">{title}</h3>
    </div>
    <div className="pl-11 text-[#8b95a5] font-playfair text-sm leading-relaxed space-y-2">
      {children}
    </div>
  </div>
);

const DocsModal = ({ isOpen, onClose }: DocsModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative w-full sm:max-w-lg mx-auto bg-[#1e2535] border border-[#3d4555] rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden animate-slide-up sm:animate-fade-in max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#3d4555] flex-shrink-0">
          <div className="flex items-center gap-3">
            <BookOpen size={20} className="text-[#e8eaed]" />
            <h2 className="text-[#e8eaed] font-playfair text-xl font-semibold">How to use AMOM</h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-[#2a3142] border border-[#3d4555] flex items-center justify-center text-[#8b95a5] hover:text-[#e8eaed] transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1 px-6 py-6">
          {/* Intro */}
          <p className="text-[#8b95a5] font-playfair text-sm leading-relaxed mb-8 italic">
            AMOM — A Map of Memories — is a personal and social map where you can pin your memories to places across the world.
          </p>

          <Section icon={<MapPin size={16} />} title="Pinning a Memory">
            <p>1. Tap the <strong className="text-[#c4c9d4]">Add Memory</strong> button at the bottom of the map.</p>
            <p>2. The button turns red to enter placement mode.</p>
            <p>3. Tap any location on the map to drop a pin there.</p>
            <p>4. Fill in the title, description, category, color and optional photo.</p>
            <p>5. Tap <strong className="text-[#c4c9d4]">Submit</strong> to save your memory.</p>
          </Section>

          <Section icon={<Search size={16} />} title="Searching for a Place">
            <p>Use the search bar at the top of the map to find any location in the world.</p>
            <p>Tap a result to instantly fly to that location on the map.</p>
            <p>After navigating there, tap the map to pin a memory to that exact spot.</p>
          </Section>

          <Section icon={<List size={16} />} title="Viewing Your Memories">
            <p>Tap the <strong className="text-[#c4c9d4]">Memories</strong> button at the bottom to see a list of all your pinned memories.</p>
            <p>Tap any memory in the list to fly to it on the map.</p>
            <p>Tap a memory marker on the map to see its full details.</p>
          </Section>

          <Section icon={<Globe size={16} />} title="Public vs Private">
            <p>When creating a memory, toggle <strong className="text-[#c4c9d4]">Public</strong> to share it with others on the map.</p>
            <p>Public memories are visible to all visitors. Private memories are only visible to you when signed in.</p>
          </Section>

          <Section icon={<Lock size={16} />} title="Account & Sign In">
            <p>Sign in with an email and password to create and manage your own memories.</p>
            <p>Without an account, you can explore others' public memories but cannot pin your own.</p>
            <p>Use the <strong className="text-[#c4c9d4]">Profile</strong> button at the bottom right to view your account and sign out.</p>
          </Section>

          <div className="mt-4 p-4 rounded-xl bg-[#2a3142] border border-[#3d4555]">
            <p className="text-[#8b95a5] font-playfair text-xs text-center italic">
              "Just someone who remembered something."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocsModal;
