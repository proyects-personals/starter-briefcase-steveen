import React, { useState, useEffect } from 'react';

interface ExpandableTextProps {
  text: string;
  maxLength?: number;
  onToggleExpand?: (expanded: boolean) => void;
}

const MAX_LENGTH_TEXT = 100;

const ExpandableTextComponent: React.FC<ExpandableTextProps> = ({
  text,
  maxLength = MAX_LENGTH_TEXT,
  onToggleExpand,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const isLong = text.length > maxLength;
  const displayText = isExpanded
    ? text
    : text.slice(0, maxLength) + (isLong ? '...' : '');

  const toggleExpand = () => {
    const next = !isExpanded;
    setIsExpanded(next);
    onToggleExpand?.(next);
  };

  useEffect(() => {
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
          {isExpanded ? 'Ver menos' : 'Ver más'}
        </button>
      )}
    </p>
  );
};

export default ExpandableTextComponent;
