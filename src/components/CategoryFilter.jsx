import React from 'react';
import { 
  Layers, Trees, Hammer, Grid, Home, Wrench, Zap, Droplets, ShieldAlert, Paintbrush, LayoutGrid
} from 'lucide-react';

const iconMap = {
  Layers: Layers,
  Trees: Trees,
  Hammer: Hammer,
  Grid: Grid,
  Home: Home,
  Wrench: Wrench,
  Zap: Zap,
  Droplets: Droplets,
  ShieldAlert: ShieldAlert,
  Paintbrush: Paintbrush
};

export const CategoryFilter = ({
  categories,
  selectedCategory,
  onSelectCategory,
  primaryLang,
  getCategoryCount
}) => {
  const isEn = primaryLang === 'en';

  return (
    <div className="w-full py-2">
      {/* Flex-wrap container so all categories are fully visible on screen */}
      <div className="flex flex-wrap items-center gap-2">
        
        {/* "All Categories" Pill */}
        <button
          onClick={() => onSelectCategory('all')}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl font-medium text-xs sm:text-sm transition-all shadow-sm ${
            selectedCategory === 'all'
              ? 'bg-orange-500 text-slate-950 font-bold shadow-orange-500/25 ring-2 ring-orange-400'
              : 'bg-slate-800/80 hover:bg-slate-700/90 text-slate-300 border border-slate-700/80'
          }`}
        >
          <LayoutGrid className="w-4 h-4" />
          <span>{isEn ? 'All Categories' : 'Všetky kategórie'}</span>
          <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
            selectedCategory === 'all' ? 'bg-slate-950 text-orange-400' : 'bg-slate-900 text-slate-400'
          }`}>
            {getCategoryCount('all')}
          </span>
        </button>

        {/* Dynamic Category List - visible without hidden horizontal overflow */}
        {categories.map((cat) => {
          const IconComponent = iconMap[cat.icon] || LayoutGrid;
          const isSelected = selectedCategory === cat.id;
          const count = getCategoryCount(cat.id);

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl font-medium text-xs sm:text-sm transition-all ${
                isSelected
                  ? 'bg-blue-600 text-white font-bold shadow-lg shadow-blue-600/30 ring-2 ring-blue-400'
                  : 'bg-slate-800/80 hover:bg-slate-700/90 text-slate-300 border border-slate-700/80'
              }`}
            >
              <IconComponent className="w-4 h-4" style={{ color: isSelected ? '#ffffff' : cat.color }} />
              <span>{isEn ? cat.nameEn : cat.nameSk}</span>
              <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                isSelected ? 'bg-blue-800 text-white' : 'bg-slate-900 text-slate-400'
              }`}>
                {count}
              </span>
            </button>
          );
        })}

      </div>
    </div>
  );
};
