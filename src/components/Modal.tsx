'use client';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { ModalContent, ModalOverlay } from '@/design-system/primitives';
import { theme } from '@/design-system/theme';

type ModalProps = { isOpen: boolean; onClose: () => void; children: React.ReactNode };

const Close = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  font-size: 1.5rem;
  position: absolute;
  top: .5rem;
  right: .5rem;
  color: ${theme.colors.text};
`;

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onEsc);
    return () => document.removeEventListener('keydown', onEsc);
  }, [onClose]);

  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <ModalOverlay>
      <ModalContent>
        <Close onClick={onClose} aria-label="Close modal">×</Close>
        {children}
      </ModalContent>
    </ModalOverlay>,
    document.body
  );
}