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

Modal.setAppElement('#root');

export const ImageModal = ({ isModalOpen, imageUrl, toggleModal }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <>
        <img src={imageUrl} alt="" width="480" />
        <button onClick={toggleModal}>Close</button>
      </>
    </Modal>
  );
};