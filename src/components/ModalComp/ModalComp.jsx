import React from 'react';
import ReactModal from 'react-modal';
import propTypes from 'prop-types';

function ModalComp({ modalIsOpen, setIsOpen }) {
  return (
    <div>
      <ReactModal
        isOpen={modalIsOpen}
        contentLabel="Minimal Modal Example"
        ariaHideApp={false}
      >
        <div className="modalContent">
          <h2>Employees created!</h2>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="saveButton"
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
