import React, {useMemo} from "react";
import { Modal, Button } from "antd";
import "../Modal/Modal.css";



const ModalComponant = (modalOpen) => {
  const createPost = () => {
    modalOpen.createPost();
}

  
  
  return (
    <div>
      <Modal
        title="Create a Post"
        style={{
          top: 20,
        }}
        open={modalOpen.modalOpen}
        onOk={() => modalOpen.setModalOpen(false)}
        onCancel={() => modalOpen.setModalOpen(false)}
        footer={
          <Button
            type="primary"
            key="submit"
            disabled={modalOpen.status.length > 0 ? false : true}
            onClick={() => createPost()}
            style={{ backgroundColor: "#4096ff", borderColor: "#4096ff" }}
          >
            {" "}
            Post
          </Button>
        }
      >
        <input
          className="modal-input"
          placeholder="What do you want to talk about?"
          onChange={(e) => {
            modalOpen.setStatus(e.target.value);
          }}
          value={modalOpen.status}
        ></input>
      </Modal>
    </div>
  );
};
export default ModalComponant;
