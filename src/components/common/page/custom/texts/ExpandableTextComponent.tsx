import React, { useState, useEffect } from 'react';
import { Translations } from '../../../../../interface/translations/translations.interface';

interface ExpandableTextProps {
  text: string;
  maxLength?: number;
  onToggleExpand?: (expanded: boolean) => void;
  translations: Translations;
}

const MAX_LENGTH_TEXT = 100;

const ExpandableTextComponent: React.FC<ExpandableTextProps> = ({
  text,
  maxLength = MAX_LENGTH_TEXT,
  onToggleExpand,
  translations,
}: ExpandableTextProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const isLong: boolean = text.length > maxLength;
  const displayText: string = isExpanded
    ? text
    : text.slice(0, maxLength) + (isLong ? '...' : '');

  const toggleExpand = (): void => {
    const next = !isExpanded;
    setIsExpanded(next);
    onToggleExpand?.(next);
  };

  useEffect((): void => {
    if (onToggleExpand) {
      onToggleExpand(isExpanded);
    }
  }, []);

  return (
    <p className="text-gray-600 text-base text-justify">
      {displayText}
      {isLong && (
        <button
          onClick={toggleExpand}
          className="ml-1 text-blue-700 hover:underline focus:outline-none"
        >
          {isExpanded
            ? translations.general.seeLess
            : translations.general.seeMore}
        </button>
      )}
    </p>
  );
};

export default ExpandableTextComponent;
