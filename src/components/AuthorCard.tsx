import React from 'react';

interface AuthorCardProps {
  authorName?: string;
  role?: string;
  experience?: string;
  patchVersion?: string;
  lastUpdated?: string;
  editorialNote?: string;
}

export default function AuthorCard({
  authorName = 'Hlele',
  role = 'Editor',
  experience = 'AI-assisted research, human-reviewed',
  patchVersion = 'Update 3.5 Autumn Patch Verified',
  lastUpdated = '',
  editorialNote = 'All data is cross-verified from multiple sources; unverified values are explicitly labeled.',
}: AuthorCardProps) {
  return (
    <div className="w-full rounded-2xl bg-[#0b0c16]/90 border border-red-500/20 p-4 sm:p-5 backdrop-blur-md my-6 shadow-xl font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-red-950/40">
        <div className="flex items-center space-x-3.5">
          <div className="w-11 h-11 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400 font-bold text-lg shadow-inner font-mono">
            {authorName.charAt(0)}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-white text-sm sm:text-base">{authorName}</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-red-500/10 text-red-400 border border-red-500/20 font-mono">
                ✓ Expert Verified
              </span>
            </div>
            <p className="text-xs text-gray-400 mt-0.5">
              {role} • <span className="text-gray-300 font-medium">{experience}</span>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto font-mono">
          <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20">
            ⚡ {patchVersion}
          </span>
          
        </div>
      </div>

      <p className="text-xs sm:text-sm text-gray-400 mt-3 leading-relaxed italic">
        "{editorialNote}"
      </p>
    </div>
  );
}
