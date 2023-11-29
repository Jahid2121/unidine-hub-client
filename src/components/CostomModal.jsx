import Modal from 'react-modal';
import { IoIosCloseCircle } from "react-icons/io";

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
      <button className='flex justify-end ml-48 text-xl' onClick={onClose}><IoIosCloseCircle /></button>
      {content}
    </Modal>
      );
};

export default CustomModal;