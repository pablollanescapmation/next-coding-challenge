'use client';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

type ModalProps = { isOpen: boolean; onClose: () => void; children: React.ReactNode };

const Overlay = styled.div`
  z-index: 1000;
  background: #00000080;
  justify-content: center;
  align-items: center;
  display: flex;
  position: fixed;
  inset: 0;
`;

const Content = styled.div`
  background: #fff;
  border-radius: 8px;
  max-width: 90vw;
  max-height: 90vh;
  padding: 1.5rem;
  position: relative;
  overflow: auto;
  box-shadow: 0 5px 15px #0000004d;
`;

const Close = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  font-size: 1.5rem;
  position: absolute;
  top: .5rem;
  right: .5rem;
`;

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onEsc);
    return () => document.removeEventListener('keydown', onEsc);
  }, [onClose]);

  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <Overlay>
      <Content>
        <Close onClick={onClose} aria-label="Close modal">×</Close>
        {children}
      </Content>
    </Overlay>,
    document.body
  );
}