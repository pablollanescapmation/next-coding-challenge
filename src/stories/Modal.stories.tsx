import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import Modal from '@/components/Modal';
import { PrimaryButton } from '@/design-system/primitives';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    isOpen: true,
    onClose: fn(),
    children: (
      <>
        <h2>Modal title</h2>
        <p>Some content inside the dialog.</p>
      </>
    ),
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Open: Story = {};

export const Interactive: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <PrimaryButton onClick={() => setIsOpen(true)} type="button">
          Open modal
        </PrimaryButton>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <h2>Modal title</h2>
          <p>Some content inside the dialog.</p>
        </Modal>
      </>
    );
  },
};
