import React from 'react';
import { HardHat, Globe, Bookmark, Award, Search, Sparkles } from 'lucide-react';

export const Header = ({
  primaryLang,
  setPrimaryLang,
  favoritesCount,
  showFavoritesOnly,
  setShowFavoritesOnly,
  onOpenQuiz,
  totalTermsCount
}) => {
  const isEn = primaryLang === 'en';

  return (
    <header className="sticky top-0 z-40 glass-nav px-4 lg:px-8 py-3.5 shadow-xl">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Brand Logo & Title */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setShowFavoritesOnly(false)}>
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/20 text-slate-950 font-bold">
            <HardHat className="w-6 h-6 text-slate-950" />
          </div>
          <div>
            <h1 className="text-xl font-extrabold tracking-tight text-white flex items-center gap-2">
              <span>{isEn ? 'BuildDict' : 'Stavbársky Slovník'}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400 font-semibold border border-orange-500/30">
                EN ⇄ SK
              </span>
            </h1>
            <p className="text-xs text-slate-400">
              {isEn 
                ? 'Professional Construction & Building Glossary' 
                : 'Profesionálny stavený a tesársky slovník'}
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          
          {/* Favorites Button */}
          <button
            onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              showFavoritesOnly 
                ? 'bg-red-500/20 text-red-400 border border-red-500/40 shadow-lg shadow-red-500/10' 
                : 'bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 border border-slate-700'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${showFavoritesOnly ? 'fill-red-400 text-red-400' : ''}`} />
            <span>{isEn ? 'Saved' : 'Uložené'}</span>
            {favoritesCount > 0 && (
              <span className="ml-1 px-1.5 py-0.5 rounded-full text-xs bg-red-500 text-white font-bold">
                {favoritesCount}
              </span>
            )}
          </button>

          {/* Quiz Mode Button */}
          <button
            onClick={onOpenQuiz}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white shadow-lg shadow-indigo-600/25 border border-indigo-400/30 transition-all active:scale-95"
          >
            <Award className="w-4 h-4 text-amber-300" />
            <span>{isEn ? 'Practice Quiz' : 'Kvíz & Test'}</span>
          </button>

          {/* UI Main Language Switcher Toggle */}
          <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 shadow-inner">
            <button
              onClick={() => setPrimaryLang('sk')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                primaryLang === 'sk'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Hlavný jazyk UI: Slovenčina"
            >
              <span className="text-sm">🇸🇰</span>
              <span>SK</span>
            </button>
            <button
              onClick={() => setPrimaryLang('en')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                primaryLang === 'en'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Primary UI Language: English"
            >
              <span className="text-sm">🇬🇧</span>
              <span>EN</span>
            </button>
          </div>

        </div>

      </div>
    </header>
  );
};
