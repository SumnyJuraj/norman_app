import React, { useState, useMemo, useEffect } from 'react';
import { Header } from './components/Header';
import { CategoryFilter } from './components/CategoryFilter';
import { TermCard } from './components/TermCard';
import { QuizModal } from './components/QuizModal';
import { ImageModal } from './components/ImageModal';
import { categories, dictionaryTerms } from './data/dictionaryData';
import { Search, X, Sparkles, Filter, Info, Heart, BookMarked, HelpCircle, HardHat } from 'lucide-react';

export function App() {
  // Main UI language state: 'sk' (Slovak main) or 'en' (English main)
  const [primaryLang, setPrimaryLang] = useState('sk');

  // Selected Category filter ('all' or category id)
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Search input query
  const [searchQuery, setSearchQuery] = useState('');

  // Favorites stored in localStorage
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('builddict_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Toggle filter for showing favorites only
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  // Modals state
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [selectedImageTerm, setSelectedImageTerm] = useState(null);

  // Persist favorites
  useEffect(() => {
    try {
      localStorage.setItem('builddict_favorites', JSON.stringify(favorites));
    } catch (e) {}
  }, [favorites]);

  // Toggle favorite helper
  const handleToggleFavorite = (termId) => {
    setFavorites(prev => 
      prev.includes(termId) ? prev.filter(id => id !== termId) : [...prev, termId]
    );
  };

  // Filtered terms computation
  const filteredTerms = useMemo(() => {
    return dictionaryTerms.filter(term => {
      // Category match
      if (selectedCategory !== 'all' && term.category !== selectedCategory) {
        return false;
      }
      
      // Favorites filter
      if (showFavoritesOnly && !favorites.includes(term.id)) {
        return false;
      }

      // Search match query across EN, SK, definitions, tags
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        const matchEn = term.en.toLowerCase().includes(q);
        const matchSk = term.sk.toLowerCase().includes(q);
        const matchDefEn = term.defEn.toLowerCase().includes(q);
        const matchDefSk = term.defSk.toLowerCase().includes(q);
        const matchTag = term.tags.some(t => t.toLowerCase().includes(q));

        return matchEn || matchSk || matchDefEn || matchDefSk || matchTag;
      }

      return true;
    });
  }, [selectedCategory, searchQuery, favorites, showFavoritesOnly]);

  // Helper count per category
  const getCategoryCount = (catId) => {
    if (catId === 'all') return dictionaryTerms.length;
    return dictionaryTerms.filter(t => t.category === catId).length;
  };

  const isEn = primaryLang === 'en';

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-orange-500 selection:text-slate-950">
      
      {/* Header */}
      <Header 
        primaryLang={primaryLang}
        setPrimaryLang={setPrimaryLang}
        favoritesCount={favorites.length}
        showFavoritesOnly={showFavoritesOnly}
        setShowFavoritesOnly={setShowFavoritesOnly}
        onOpenQuiz={() => setIsQuizOpen(true)}
        totalTermsCount={dictionaryTerms.length}
      />

      {/* Main Hero & Search Section */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 lg:px-8 py-6 space-y-6">
        
        {/* Banner Card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-900/60 via-slate-900 to-amber-950/40 p-6 sm:p-10 border border-slate-800 shadow-2xl">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 -mb-16 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs font-semibold border border-orange-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isEn ? 'Bilingual Construction Dictionary' : 'Stavebný & Tesársky Anglicko-Slovenský Slovník'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              {isEn ? (
                <>Master Construction Terms in <span className="gradient-text">English & Slovak</span></>
              ) : (
                <>Osvojte si stavebné výrazy v <span className="gradient-text">Angličtine a Slovenčine</span></>
              )}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {isEn
                ? 'Visual guide with audio pronunciation, technical definitions, practical examples, and images across concrete, carpentry, demolition, tools, and safety.'
                : 'Vizuálny slovník s hlasovou výslovnosťou, výkladom, príkladmi z praxe a obrázkami pre betónovanie, tesárstvo, ničenie, náradie a bezpečnosť.'}
            </p>

            {/* Instant Search Bar */}
            <div className="relative pt-2">
              <div className="relative flex items-center">
                <Search className="absolute left-4 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={
                    isEn 
                      ? 'Search terms, e.g. "rebar", "bager", "formwork", "zbíjačka"...' 
                      : 'Hľadať slovo, napr. "železobetón", "jackhammer", "krov", "flexa"...'
                  }
                  className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-slate-950/90 border border-slate-700/80 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base shadow-xl transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3.5 p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-blue-400" />
              {isEn ? 'Filter by Category' : 'Filtrovať podľa Kategórií'}
            </span>
            <span className="text-xs font-semibold text-slate-400">
              {filteredTerms.length} {isEn ? 'terms found' : 'nájdených výrazov'}
            </span>
          </div>

          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            primaryLang={primaryLang}
            getCategoryCount={getCategoryCount}
          />
        </div>

        {/* Dictionary Terms Grid */}
        {filteredTerms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {filteredTerms.map((term) => {
              const cat = categories.find(c => c.id === term.category);
              return (
                <TermCard
                  key={term.id}
                  term={term}
                  category={cat}
                  primaryLang={primaryLang}
                  isFavorite={favorites.includes(term.id)}
                  onToggleFavorite={handleToggleFavorite}
                  onOpenImageModal={(t) => setSelectedImageTerm(t)}
                />
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <div className="py-16 text-center glass-panel rounded-3xl border border-slate-800 p-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-slate-900 border border-slate-800 text-slate-500 mx-auto flex items-center justify-center">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">
              {isEn ? 'No terms found' : 'Nenašli sa žiadne výrazy'}
            </h3>
            <p className="text-sm text-slate-400 max-w-md mx-auto">
              {isEn
                ? 'Try adjusting your search query or selecting a different category filter.'
                : 'Skúste upraviť vyhľadávací výraz alebo zvoľte inú kategóriu.'}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setShowFavoritesOnly(false);
              }}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all"
            >
              {isEn ? 'Reset Filters' : 'Resetovať filtre'}
            </button>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-slate-800/80 bg-slate-950 py-8 px-4 text-center text-xs text-slate-400 space-y-2">
        <div className="flex items-center justify-center gap-2 text-slate-300 font-medium">
          <HardHat className="w-4 h-4 text-amber-500" />
          <span>{isEn ? 'Stavbársky Slovník — Construction Dictionary' : 'Stavbársky Slovník — Angličtina ↔ Slovenčina'}</span>
        </div>
        <p className="text-slate-400 max-w-xl mx-auto">
          {isEn
            ? 'Designed for builders, carpenters, site engineers, architects, and workers.'
            : 'Vytvorené pre stavbárov, tesárov, stavbyvedúcich, architektov a remeselníkov.'}
        </p>
      </footer>

      {/* Modals */}
      <QuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        terms={dictionaryTerms}
        primaryLang={primaryLang}
      />

      <ImageModal
        isOpen={!!selectedImageTerm}
        onClose={() => setSelectedImageTerm(null)}
        term={selectedImageTerm}
        category={categories.find(c => c.id === selectedImageTerm?.category)}
        primaryLang={primaryLang}
      />

    </div>
  );
}

export default App;
