import { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

type MotionProps = {
  children: ReactNode;
} & HTMLMotionProps<"div">;

export const Motion = ({ children, ...rest }: MotionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

/* export default Motion; */