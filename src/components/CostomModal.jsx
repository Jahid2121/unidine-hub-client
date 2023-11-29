import Modal from 'react-modal';
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

const CustomModal = ({ isOpen, onClose, content }) => {
    return (
        <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Example Modal"
      style={customStyles}
    >
      <button onClick={onClose}>Close Modal</button>
      {content}
    </Modal>
      );
};

export default CustomModal;