import { motion } from 'framer-motion';

import FacebookAnimation from '../../../assets/lottieAnimations/Facebook.json';
import GithubAnimation from '../../../assets/lottieAnimations/Github.json';
import LinkedInAnimation from '../../../assets/lottieAnimations/LinkedIn.json';

import SocialLink from './SocialLink';

function Footer() {
  return (
    <motion.div className="flex w-screen items-center justify-center bg-gradient-to-r from-slate-50 via-slate-100 to-slate-200 p-6">
      <SocialLink
        href="https://www.facebook.com/mladen.markovic.142035/"
        animationData={FacebookAnimation}
      />
      <SocialLink
        href="https://github.com/MladenMarkovic20?tab=repositories"
        animationData={GithubAnimation}
      />
      <SocialLink
        href="https://www.linkedin.com/in/mladen--markovic/"
        animationData={LinkedInAnimation}
      />
    </motion.div>
  );
}

export default Footer;
