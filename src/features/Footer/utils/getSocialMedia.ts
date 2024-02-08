import { SOCIAL_MEDIA } from '../animations/animation';

export function getSocialMedia(href: string): { animation: object; x: number } {
  const keys = Object.keys(SOCIAL_MEDIA);
  for (const media of keys) {
    if (href.includes(media)) {
      return SOCIAL_MEDIA[media];
    }
  }
  return SOCIAL_MEDIA.default;
}
