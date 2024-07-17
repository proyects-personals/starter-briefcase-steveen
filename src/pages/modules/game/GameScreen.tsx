import React, { useState, useEffect, useRef } from 'react';
import shuffle from 'lodash/shuffle';
import { useTheme } from '../../../hook/theme';

const initialWords = [
  { word: 'Manzana', id: 1 },
  { word: 'Naranja', id: 2 },
  { word: 'Plátano', id: 3 },
  { word: 'Pera', id: 4 },
  { word: 'Sandía', id: 5 },
  { word: 'Melón', id: 6 },
  { word: 'Fresa', id: 7 },
  { word: 'Uva', id: 8 },
  { word: 'Piña', id: 9 },
  { word: 'Cereza', id: 10 },
  { word: 'Mango', id: 11 },
  { word: 'Kiwi', id: 12 },
  { word: 'Limón', id: 13 },
  { word: 'Coco', id: 14 },
  { word: 'Papaya', id: 15 },
  { word: 'Granada', id: 16 },
  { word: 'Mandarina', id: 17 },
  { word: 'Lima', id: 18 },
  { word: 'Albaricoque', id: 19 },
  { word: 'Ciruela', id: 20 },
  { word: 'Higo', id: 21 },
  { word: 'Guayaba', id: 22 },
  { word: 'Caqui', id: 23 },
  { word: 'Moras', id: 24 },
  { word: 'Frutas', id: 25 },
];

type Word = {
  word: string;
  flipped: boolean;
  correct: boolean;
};

const GameScreen: React.FC = () => {
  const [words, setWords] = useState<Word[]>([]);
  const [attempts, setAttempts] = useState<number>(3);
  const [targetWord, setTargetWord] = useState<string>('');
  const [initialTimer, setInitialTimer] = useState<number>(10);
  const [gameTimer, setGameTimer] = useState<number>(30);
  const initialTimerRef = useRef<NodeJS.Timeout | null>(null);
  const gameTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [gameEnded, setGameEnded] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);
  const { isDarkTheme } = useTheme();

  // Define initializeGame antes de su uso en el useEffect
  const initializeGame = () => {
    const shuffledWords = shuffle(initialWords.slice(0, 25)).map(({ word }) => ({ word, flipped: true, correct: false }));
    setWords(shuffledWords);

    const randomWord = shuffledWords[Math.floor(Math.random() * shuffledWords.length)].word;
    setTargetWord(randomWord);

    initialTimerRef.current = setTimeout(() => {
      setWords(shuffledWords.map((word) => ({ ...word, flipped: false })));
      startGameTimer(); // Iniciar el temporizador del juego al dar la vuelta a las cartas
    }, 9000);

    const initialTimerInterval = setInterval(() => {
      setInitialTimer((prevTimer) => {
        if (prevTimer === 1) {
          clearInterval(initialTimerInterval);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    initializeGame();

    return () => {
      if (initialTimerRef.current) {
        clearTimeout(initialTimerRef.current);
      }
      if (gameTimerRef.current) {
        clearInterval(gameTimerRef.current);
      }
    };
  }, []);

  const startGameTimer = () => {
    gameTimerRef.current = setInterval(() => {
      setGameTimer((prevTimer) => {
        if (prevTimer === 1) {
          clearInterval(gameTimerRef.current as NodeJS.Timeout);
          revealCorrectCard();
          setGameEnded(true);
          return 0;
        } else if (prevTimer === 0) {
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
  };

  const revealCorrectCard = () => {
    setWords((prevWords) =>
      prevWords.map((word) =>
        word.word === targetWord ? { ...word, flipped: true, correct: true } : word
      )
    );
  };

  const handleCardClick = (index: number) => {
    if (gameEnded || words[index].flipped || attempts === 0 || selectedCardIndex !== null) return;

    const newWords = [...words];
    newWords[index].flipped = true;
    setSelectedCardIndex(index);
    setWords(newWords);

    if (newWords[index].word === targetWord) {
      setShowModal(true);
      clearInterval(gameTimerRef.current as NodeJS.Timeout);
      setGameEnded(true);
    } else {
      setTimeout(() => {
        const resetWords = [...newWords];
        resetWords[index].flipped = false;
        setSelectedCardIndex(null);
        setWords(resetWords);
      }, 1000);

      setAttempts(attempts - 1);
      if (attempts - 1 === 0) {
        revealCorrectCard();
        clearInterval(gameTimerRef.current as NodeJS.Timeout);
        setGameEnded(true);
      }
    }
  };

  const resetGame = () => {
    setWords([]);
    setAttempts(3);
    setTargetWord('');
    setInitialTimer(10);
    setGameTimer(30);
    setGameEnded(false);
    setShowModal(false);
    setSelectedCardIndex(null);
    initializeGame();
  };

  return (
    <div className={`${isDarkTheme ? "bg-dark-primary text-white" : "bg-light-primary text-black"}`}>
      <div className="mx-32">
        <div className="flex flex-col md:flex-row mx-4">
          <div className="flex justify-between items-center gap-2 mt-2 gap-32">
            {gameEnded && showModal && (
              <div>
                <button className="px-4 py-2 bg-blue-500 text-white font-bold rounded" onClick={resetGame}>
                  Reiniciar Juego
                </button>
              </div>
            )}
            <div>
              <span className="text-lg font-bold">Palabra a buscar: </span>
              <span className="text-lg">{targetWord}</span>
            </div>
            <div>
              {initialTimer > 0 ? (
                <>
                  <span className="text-lg font-bold">Tiempo de preparación: </span>
                  <span className="text-lg">{initialTimer} s</span>
                </>
              ) : (
                <>
                  <span className="text-lg font-bold">Tiempo restante: </span>
                  <span className="text-lg">{gameTimer} s</span>
                </>
              )}
            </div>
            <div>
              <span className="text-lg font-bold">Intentos restantes: </span>
              <span className="text-lg">{attempts}</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-8 gap-2 h-full w-full max-h-screen">
          {words.map((word, index) => (
            <div key={index} className="relative w-32 h-32 cursor-pointer" onClick={() => handleCardClick(index)}>
              <div
                className={`absolute inset-0 w-full h-full rounded-lg ${word.flipped ? (word.correct ? 'bg-green-500' : 'bg-gray-300') : 'bg-blue-500'}`}
                style={{ transition: 'transform 0.5s ease-in-out' }}
              >
                <span className={`absolute inset-0 flex items-center justify-center text-sm font-bold ${word.flipped ? (word.correct ? 'text-white' : 'text-red-500') : (isDarkTheme ? 'text-white' : 'text-black')}`}>
                  {word.flipped ? word.word : ''}
                </span>
                {selectedCardIndex !== null && index === selectedCardIndex && !word.correct && (
                  <div className="absolute inset-0 border-4 border-red-500 rounded-lg pointer-events-none"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameScreen;
