'use client';
import { useState } from 'react';
import Modal from './Modal';
import styled from 'styled-components';

const ModalBtn = styled.button`
  color: #fff;
  background-color: #51b7e6;
  border: 1px solid #203588;
  border-radius: 4px;
  padding: .75em 1.5em;
  transition: background-color .3s;

  &:hover {
    background-color: #3a96c3;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <ModalBtn onClick={() => setShowModal(true)}>Open modal</ModalBtn>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <h2>Modal title</h2>
        <p>Some content inside the dialog.</p>
      </Modal>
    </>
  );
}