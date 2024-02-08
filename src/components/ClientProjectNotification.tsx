import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const showClientProjectNotification = () => {
  toast.custom(
    <motion.div
      className="flex items-center justify-center rounded-2xl bg-stone-300 p-5 font-body text-xs md:text-base"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      Client project privacy—code not viewable. Thanks for understanding!
    </motion.div>
  );
};

export default showClientProjectNotification;
