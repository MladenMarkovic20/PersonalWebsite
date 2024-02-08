/* eslint-disable import/no-unresolved */
import Address from '../../../assets/lottieAnimations/Address.json';
import Email from '../../../assets/lottieAnimations/gmail.json';
import Phone from '../../../assets/lottieAnimations/Phone.json';

export interface ContactInformation {
  name: string;
  description: string;
  type: string;
  image: string | object;
}

export const contactInfo: ContactInformation[] = [
  {
    name: 'Email',
    description:
      'Please do not hesitate to contact me with any questions or inquiries you may have',
    type: 'mmladenmarkovic@gmail.com',
    image: Email,
  },
  {
    name: 'Phone',
    description: 'I am fully prepared and eager to assist you in any way possible',
    type: '+381 64 503-1-808',
    image: Phone,
  },
  {
    name: 'Address',
    description: 'Current city of residence',
    type: 'Novi Sad, Serbia',
    image: Address,
  },
];
