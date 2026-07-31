import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, XCircle, RotateCcw, Award, ArrowRight, Volume2 } from 'lucide-react';
import { TermImage } from './TermImage';

export const QuizModal = ({ isOpen, onClose, terms, primaryLang }) => {
  const isEn = primaryLang === 'en';
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [quizTerms, setQuizTerms] = useState([]);

  // Setup quiz questions when modal opens
  useEffect(() => {
    if (isOpen && terms.length > 0) {
      const shuffled = [...terms].sort(() => 0.5 - Math.random());
      setQuizTerms(shuffled);
      setCurrentQuestionIndex(0);
      setScore(0);
      setIsFinished(false);
      setSelectedOption(null);
      generateQuestionOptions(0, shuffled);
    }
  }, [isOpen, terms]);

  const generateQuestionOptions = (index, list) => {
    if (!list || list.length === 0 || index >= list.length) return;
    const currentTerm = list[index];
    const targetAnswer = isEn ? currentTerm.sk : currentTerm.en;

    // Distractors
    const otherTerms = list.filter(t => t.id !== currentTerm.id);
    const shuffledOthers = [...otherTerms].sort(() => 0.5 - Math.random()).slice(0, 3);
    const choices = [
      { text: targetAnswer, isCorrect: true },
      ...shuffledOthers.map(t => ({ text: isEn ? t.sk : t.en, isCorrect: false }))
    ].sort(() => 0.5 - Math.random());

    setOptions(choices);
    setSelectedOption(null);
  };

  const handleSelectOption = (choice) => {
    if (selectedOption !== null) return; // Prevent double click
    setSelectedOption(choice);
    if (choice.isCorrect) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < quizTerms.length && currentQuestionIndex + 1 < 10) {
      const nextIdx = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextIdx);
      generateQuestionOptions(nextIdx, quizTerms);
    } else {
      setIsFinished(true);
    }
  };

  const resetQuiz = () => {
    const shuffled = [...terms].sort(() => 0.5 - Math.random());
    setQuizTerms(shuffled);
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsFinished(false);
    generateQuestionOptions(0, shuffled);
  };

  if (!isOpen) return null;

  const currentTerm = quizTerms[currentQuestionIndex];
  const totalQuestions = Math.min(quizTerms.length, 10);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl glass-panel rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-900 text-white">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <h2 className="text-lg font-bold">
              {isEn ? 'Construction Vocabulary Quiz' : 'Stavbársky Slovný Kvíz'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        {!isFinished && currentTerm ? (
          <div className="p-6 space-y-5">
            
            {/* Progress bar & score indicator */}
            <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-1">
              <span>{isEn ? `Question ${currentQuestionIndex + 1} of ${totalQuestions}` : `Otázka ${currentQuestionIndex + 1} z ${totalQuestions}`}</span>
              <span className="text-amber-400 font-bold">{isEn ? `Score: ${score}` : `Skóre: ${score}`}</span>
            </div>
            
            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-amber-500 transition-all duration-300" 
                style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }} 
              />
            </div>

            {/* Term Card in Quiz */}
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950/50">
              <div className="h-36">
                <TermImage svgType={currentTerm.svgType} title={currentTerm.en} className="w-full h-full" />
              </div>
              <div className="p-4 text-center">
                <span className="text-xs uppercase tracking-widest text-orange-400 font-bold">
                  {isEn ? 'Translate to Slovak:' : 'Prelož do Angličtiny:'}
                </span>
                <h3 className="text-2xl font-black text-white mt-1">
                  {isEn ? currentTerm.en : currentTerm.sk}
                </h3>
              </div>
            </div>

            {/* Multiple Choice Options */}
            <div className="grid grid-cols-1 gap-2.5">
              {options.map((choice, idx) => {
                let btnStyle = "bg-slate-800/80 hover:bg-slate-700/80 border-slate-700 text-slate-200";
                
                if (selectedOption !== null) {
                  if (choice.isCorrect) {
                    btnStyle = "bg-emerald-600/30 border-emerald-500 text-emerald-300 font-bold";
                  } else if (choice === selectedOption) {
                    btnStyle = "bg-red-600/30 border-red-500 text-red-300 font-bold";
                  } else {
                    btnStyle = "opacity-40 bg-slate-900 border-slate-800 text-slate-500";
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={selectedOption !== null}
                    onClick={() => handleSelectOption(choice)}
                    className={`w-full p-3.5 rounded-xl border text-left font-medium text-sm transition-all flex items-center justify-between ${btnStyle}`}
                  >
                    <span>{choice.text}</span>
                    {selectedOption !== null && choice.isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    )}
                    {selectedOption === choice && !choice.isCorrect && (
                      <XCircle className="w-5 h-5 text-red-400" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Next Button */}
            {selectedOption !== null && (
              <button
                onClick={handleNextQuestion}
                className="w-full py-3.5 rounded-xl font-bold bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 animate-fade-in"
              >
                <span>{isEn ? 'Next Question' : 'Ďalšia otázka'}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            )}

          </div>
        ) : (
          /* Finished Results Screen */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 mx-auto flex items-center justify-center">
              <Award className="w-8 h-8" />
            </div>
            
            <div>
              <h3 className="text-2xl font-black text-white">
                {isEn ? 'Quiz Completed!' : 'Kvíz Dokončený!'}
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                {isEn ? 'Great job practicing construction terminology.' : 'Výborný tréning stavebnej terminológie.'}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 inline-block px-8">
              <span className="text-xs uppercase text-slate-400 font-bold block">{isEn ? 'Final Score' : 'Konečné Skóre'}</span>
              <span className="text-4xl font-extrabold text-amber-400">
                {score} / {totalQuestions}
              </span>
            </div>

            <div className="flex gap-3">
              <button
                onClick={resetQuiz}
                className="flex-1 py-3 rounded-xl font-bold bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>{isEn ? 'Try Again' : 'Skúsiť znova'}</span>
              </button>
              <button
                onClick={onClose}
                className="flex-1 py-3 rounded-xl font-bold bg-blue-600 hover:bg-blue-500 text-white"
              >
                <span>{isEn ? 'Close' : 'Zatvoriť'}</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
