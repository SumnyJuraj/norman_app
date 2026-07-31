import React from 'react';
import { X, Volume2, BookOpen, Quote, Tag } from 'lucide-react';
import { TermImage } from './TermImage';

export const ImageModal = ({ term, category, isOpen, onClose, primaryLang }) => {
  if (!isOpen || !term) return null;
  const isEn = primaryLang === 'en';

  const mainTerm = isEn ? term.en : term.sk;
  const secondaryTerm = isEn ? term.sk : term.en;
  const mainDef = isEn ? term.defEn : term.defSk;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl glass-panel rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-900 text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-slate-950/80 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors backdrop-blur-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Full Image view */}
        <div className="relative h-64 sm:h-80 w-full bg-slate-950">
          <TermImage svgType={term.svgType} title={mainTerm} className="w-full h-full" />
        </div>

        {/* Modal Info Footer */}
        <div className="p-6 space-y-3">
          <div className="flex items-center gap-2">
            <span 
              className="px-2.5 py-1 rounded-lg text-xs font-bold text-white flex items-center gap-1"
              style={{ backgroundColor: category?.color || '#3b82f6' }}
            >
              <Tag className="w-3 h-3" />
              {isEn ? category?.nameEn : category?.nameSk}
            </span>
          </div>

          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-2xl font-black text-white">{mainTerm}</h2>
            <span className="text-lg font-bold text-orange-400">{secondaryTerm}</span>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed border-t border-slate-800 pt-3">
            {mainDef}
          </p>

          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 italic">
            "{isEn ? term.exampleEn : term.exampleSk}"
          </div>
        </div>

      </div>
    </div>
  );
};
