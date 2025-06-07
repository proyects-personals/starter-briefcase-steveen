import React from 'react';
import { MessageType } from '../../../../types/MessageType';

interface MessageErrorProps {
  text: string | null;
  type: MessageType;
}

const MessageError: React.FC<MessageErrorProps> = ({ text, type }) => {
  return (
    <div
      className={`p-4 mb-6 rounded-lg ${type === 'success' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}
    >
      {text}
    </div>
  );
};

export default MessageError;
