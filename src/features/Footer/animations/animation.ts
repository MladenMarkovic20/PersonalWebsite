import { SocialMedia } from '../interface/socialMedia';

export const horizontalAnimationVariantsRight = {
  hidden: { opacity: 0, x: 50, y: 0 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 3,
      ease: 'easeInOut',
      repeat: 0,
    },
  },
};

export const horizontalAnimationVariantsLeft = {
  hidden: { opacity: 0, x: -50, y: 0 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 3,
      ease: 'easeInOut',
      repeat: 0,
    },
  },
};

export const verticalAnimationVariants = {
  hidden: { opacity: 0, x: 0, y: 50 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 3,
      ease: 'easeInOut',
      repeat: 0,
    },
  },
};

export const SOCIAL_MEDIA: SocialMedia = {
  facebook: {
    animation: horizontalAnimationVariantsLeft,
    x: -50,
  },
  linkedin: {
    animation: horizontalAnimationVariantsRight,
    x: 50,
  },
  default: {
    animation: verticalAnimationVariants,
    x: 0,
  },
};
