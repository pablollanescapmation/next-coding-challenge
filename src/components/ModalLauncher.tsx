'use client';
import { useState } from 'react';
import Modal from './Modal';
import { PrimaryButton } from '@/design-system/primitives';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <PrimaryButton onClick={() => setShowModal(true)}>Open modal</PrimaryButton>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <h2>Modal title</h2>
        <p>Some content inside the dialog.</p>
      </Modal>
    </>
  );
}