import { motion } from 'framer-motion';

import { item } from '../animations/animation';

function RenderSignature() {
  const signature = 'I am Mladen Markovic';

  return signature.split('').map((char: string, index: number) => (
    <motion.span variants={item} key={index}>
      {char}
    </motion.span>
  ));
}

export default RenderSignature;
