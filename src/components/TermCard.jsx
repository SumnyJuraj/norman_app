import React, { useState } from 'react';
import { Volume2, Bookmark, Maximize2, Tag, ArrowRightLeft, BookOpen, Quote } from 'lucide-react';
import { TermImage } from './TermImage';

export const TermCard = ({
  term,
  category,
  primaryLang,
  isFavorite,
  onToggleFavorite,
  onOpenImageModal
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const isEnPrimary = primaryLang === 'en';

  const mainTerm = isEnPrimary ? term.en : term.sk;
  const secondaryTerm = isEnPrimary ? term.sk : term.en;
  const mainPhonetic = isEnPrimary ? term.phoneticEn : term.phoneticSk;
  const mainDef = isEnPrimary ? term.defEn : term.defSk;
  const mainExample = isEnPrimary ? term.exampleEn : term.exampleSk;

  // Clean, native Web Speech API text-to-speech pronunciation
  const speakText = (text, lang) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel(); // reset any ongoing speech

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang === 'en' ? 'en-US' : 'sk-SK';
    utterance.rate = 0.9;
    utterance.pitch = 1.0;

    setIsPlayingAudio(true);
    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="group glass-panel rounded-2xl overflow-hidden hover:border-slate-600 transition-all duration-300 hover:shadow-2xl flex flex-col h-full border border-slate-800">
      
      {/* Image Header Container with Zoom & Favorite button */}
      <div className="relative">
        <TermImage svgType={term.svgType} title={mainTerm} />
        
        {/* Top Overlay Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          {/* Category Badge */}
          <span 
            className="pointer-events-auto px-2.5 py-1 rounded-lg text-xs font-bold text-white shadow-lg backdrop-blur-md flex items-center gap-1.5"
            style={{ backgroundColor: `${category?.color || '#3b82f6'}cc` }}
          >
            <Tag className="w-3 h-3" />
            {isEnPrimary ? category?.nameEn : category?.nameSk}
          </span>

          {/* Action buttons (Zoom & Favorite) */}
          <div className="flex items-center gap-1.5 pointer-events-auto">
            <button
              onClick={() => onOpenImageModal(term)}
              className="p-2 rounded-xl bg-slate-950/80 hover:bg-slate-900 text-slate-300 hover:text-white transition-all backdrop-blur-md shadow-md"
              title={isEnPrimary ? "Enlarge Image" : "Zväčšiť obrázok"}
            >
              <Maximize2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => onToggleFavorite(term.id)}
              className={`p-2 rounded-xl backdrop-blur-md transition-all shadow-md ${
                isFavorite 
                  ? 'bg-red-500 text-white shadow-red-500/30' 
                  : 'bg-slate-950/80 text-slate-300 hover:text-red-400 hover:bg-slate-900'
              }`}
              title={isFavorite ? "Remove from Saved" : "Uložiť výraz"}
            >
              <Bookmark className={`w-4 h-4 ${isFavorite ? 'fill-white' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 flex flex-col flex-1 justify-between gap-4">
        <div>
          
          {/* Main Term Header & Speech Synthesizer */}
          <div className="flex items-start justify-between gap-2 mb-2">
            <div>
              <div className="flex items-baseline gap-2 flex-wrap">
                <h3 className="text-xl font-extrabold text-white group-hover:text-blue-400 transition-colors">
                  {mainTerm}
                </h3>
                <span className="text-xs font-medium text-slate-400 font-mono">
                  {mainPhonetic}
                </span>
              </div>
            </div>

            {/* Audio Speech Synthesis Button */}
            <button
              onClick={() => speakText(mainTerm, isEnPrimary ? 'en' : 'sk')}
              className={`p-2 rounded-xl transition-all ${
                isPlayingAudio 
                  ? 'bg-blue-500 text-white animate-pulse' 
                  : 'bg-slate-800/80 hover:bg-blue-600/30 text-blue-400 border border-blue-500/30'
              }`}
              title={isEnPrimary ? "Listen to English pronunciation" : "Vypočuť si slovenskú výslovnosť"}
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>

          {/* Translation Bar */}
          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 my-3">
            <span className="text-xs text-orange-400 font-bold uppercase tracking-wider flex items-center gap-1">
              <ArrowRightLeft className="w-3 h-3" />
              {isEnPrimary ? 'SK:' : 'EN:'}
            </span>
            <span className="text-base font-bold text-slate-100">
              {secondaryTerm}
            </span>
            <button
              onClick={() => speakText(secondaryTerm, isEnPrimary ? 'sk' : 'en')}
              className="ml-auto text-slate-400 hover:text-orange-400 p-1"
              title={isEnPrimary ? "Pronounce Slovak" : "Pronounce English"}
            >
              <Volume2 className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Definition */}
          <div className="space-y-1.5 text-xs text-slate-300">
            <p className="leading-relaxed flex items-start gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
              <span>{mainDef}</span>
            </p>
          </div>

          {/* Practical Example Sentence */}
          <div className="mt-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-400 italic">
            <div className="flex items-start gap-1.5">
              <Quote className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
              <span>"{mainExample}"</span>
            </div>
          </div>

        </div>

        {/* Tags footer */}
        <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-1">
          {term.tags.slice(0, 3).map((tag, idx) => (
            <span key={idx} className="px-2 py-0.5 rounded-md bg-slate-800/50 text-slate-400 text-[10px] font-mono">
              #{tag}
            </span>
          ))}
        </div>

      </div>

    </div>
  );
};
