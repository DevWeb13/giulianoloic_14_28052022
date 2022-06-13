import React from 'react';
import ReactModal from 'react-modal';
import propTypes from 'prop-types';

/**
 * @param {object} props
 * @param {boolean} props.modalIsOpen - boolean to determine if modal is open
 * @param {object} props.setIsOpen - function to set modalIsOpen
 * @return {import('react').ReactComponentElement} - React Modal component element
 */
function ModalComp({ modalIsOpen, setIsOpen }) {
  return (
    <div>
      <ReactModal
        isOpen={modalIsOpen}
        contentLabel="Modal"
        ariaHideApp={false}
        onRequestClose={() => setIsOpen(false)}
        overlayClassName="overlay"
      >
        <div className="modalContent">
          <h2>Employees created!</h2>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="button"
          >
            Close
          </button>
        </div>
      </ReactModal>
    </div>
  );
}

ModalComp.propTypes = {
  modalIsOpen: propTypes.bool.isRequired,
  setIsOpen: propTypes.func.isRequired,
};

export default ModalComp;
