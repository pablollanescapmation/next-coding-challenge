import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import LandscapeSection from '@/components/LandscapeSection';

const meta = {
  title: 'Components/LandscapeSection',
  component: LandscapeSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof LandscapeSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    left: (
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam alias
        soluta necessitatibus maiores, tempora sequi repellat, quaerat ut
        explicabo fugiat ratione?
      </p>
    ),
    right: (
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis quo
        excepturi magnam officia sunt maiores aliquid doloremque soluta
        voluptatem hic!
      </p>
    ),
  },
};
