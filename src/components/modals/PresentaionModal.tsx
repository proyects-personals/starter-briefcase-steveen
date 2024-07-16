import React from 'react';
import Modal from 'react-modal';

interface PresentationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PresentationModal: React.FC<PresentationModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Ganaste!"
      className="Modal"
      overlayClassName="Overlay"
    >
      <div className="text-center">
        <h2>¡Ganaste!</h2>
        <p>¡Adivinaste dónde estaba!</p>
        <button onClick={onClose} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Cerrar
        </button>
      </div>
    </Modal>
  );
};

export default PresentationModal;
