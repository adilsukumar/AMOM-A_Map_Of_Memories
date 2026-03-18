import { X, LogOut, User, MapPin } from 'lucide-react';
import type { User as SupabaseUser } from '@supabase/supabase-js';

interface ProfilePanelProps {
  isOpen: boolean;
  onClose: () => void;
  user: SupabaseUser | null;
  memoriesCount: number;
  onSignOut: () => void;
  onSignIn: () => void;
}

const ProfilePanel = ({ isOpen, onClose, user, memoriesCount, onSignOut, onSignIn }: ProfilePanelProps) => {
  if (!isOpen) return null;

  const displayName = user?.user_metadata?.display_name || user?.user_metadata?.username || 'Traveller';
  const email = user?.email || '';
  const initials = displayName.slice(0, 2).toUpperCase();

  return (
    <div className="fixed inset-0 z-[2000] flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Panel */}
      <div className="relative w-full sm:max-w-sm mx-auto bg-[#1e2535] border border-[#3d4555] rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden animate-slide-up sm:animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#3d4555]">
          <div className="flex items-center gap-3">
            <User size={20} className="text-[#e8eaed]" />
            <h2 className="text-[#e8eaed] font-playfair text-xl font-semibold">Profile</h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-[#2a3142] border border-[#3d4555] flex items-center justify-center text-[#8b95a5] hover:text-[#e8eaed] transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          {user ? (
            <>
              {/* Avatar + Info */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center text-white font-playfair text-xl font-semibold flex-shrink-0">
                  {initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#e8eaed] font-playfair text-lg font-semibold truncate">{displayName}</p>
                  <p className="text-[#8b95a5] font-playfair text-sm truncate">{email}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="p-4 rounded-xl bg-[#2a3142] border border-[#3d4555] mb-6 flex items-center gap-3">
                <MapPin size={18} className="text-[#8b95a5]" />
                <div>
                  <p className="text-[#e8eaed] font-playfair font-semibold">{memoriesCount}</p>
                  <p className="text-[#8b95a5] font-playfair text-xs">{memoriesCount === 1 ? 'Memory pinned' : 'Memories pinned'}</p>
                </div>
              </div>

              {/* Sign Out */}
              <button
                onClick={() => { onSignOut(); onClose(); }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 font-playfair text-sm hover:bg-rose-500/20 transition-all"
              >
                <LogOut size={16} />
                Sign Out
              </button>
            </>
          ) : (
            <>
              {/* Not signed in */}
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-[#2a3142] border border-[#3d4555] flex items-center justify-center mx-auto mb-4">
                  <User size={24} className="text-[#8b95a5]" />
                </div>
                <p className="text-[#e8eaed] font-playfair text-lg font-semibold mb-2">Not signed in</p>
                <p className="text-[#8b95a5] font-playfair text-sm mb-6">Sign in to pin your own memories across the world.</p>
                <button
                  onClick={() => { onSignIn(); onClose(); }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#353d4f] border border-[#3d4555] text-[#e8eaed] font-playfair text-sm hover:bg-[#404859] transition-all"
                >
                  <User size={16} />
                  Sign In
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePanel;
