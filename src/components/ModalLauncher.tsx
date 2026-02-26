'use client';

import { useState } from 'react';
import Modal from './Modal';
import styles from './ModalLauncher.module.css';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className={styles.modalBtn}>
        Open modal
      </button>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <h2>Modal title</h2>
        <p>Some content inside the dialog.</p>
      </Modal>
    </>
  );
}