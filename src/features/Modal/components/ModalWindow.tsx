import { motion } from 'framer-motion';
import Modal, { Styles } from 'react-modal';

const customStyles: Styles = {
  overlay: {
    position: 'fixed',
    top: '40px',
    left: '40px',
    right: '40px',
    bottom: '40px',
    backgroundImage: 'linear-gradient(to right, #f8fafc, #f1f5f9, #e2e8f0)',
  },
  content: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: '1px solid #ccc',
    background: '#fff',
    borderRadius: '1.5rem',
    outline: 'none',
    padding: '20px',
    backgroundColor: 'rgba(230, 230, 233, 1)',
  },
};

function ModalWindow({
  isOpen,
  setIsOpen,
  children,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}) {
  Modal.setAppElement('#root');

  const handleEscKeyPress = () => {
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} style={customStyles} onRequestClose={handleEscKeyPress}>
      <motion.div
        className="flex w-full items-center justify-center font-body"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center justify-center  rounded-2xl">
          <button
            onClick={() => setIsOpen((prevState) => !prevState)}
            className="absolute right-5 top-5 text-white"
            type="button"
          >
            <img src="/assets/icons/close-button.svg" alt="Close button" />
          </button>
        </div>
        <div>{children}</div>
      </motion.div>
    </Modal>
  );
}

export default ModalWindow;
