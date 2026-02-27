import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Header from '@/components/Header';

const meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: 'Next.js Coding Challenge',
    description: 'Coding challenge intended to evaluate next and react skills for frontend position',
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutDescription: Story = {
  args: {
    description: undefined,
  },
};

