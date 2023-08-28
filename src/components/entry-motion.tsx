import { motion } from "framer-motion";
type Props = {
  children: React.ReactNode;
};
export const EntryMotion = ({ children }: Props) => {
  return (
    <motion.div
      initial={{
        translateY: "var(--translate-from-y, 0px)",
        translateX: "var(--translate-from-x, 0px)",
      }}
      animate={{
        translateY: "var(--translate-to-y, 0px)",
        translateX: "var(--translate-to-x, 0px)",
      }}
      className="[--translate-from-x:100%] [--translate-from-y:0px] [--translate-to-x:0px] [--translate-to-y:0px] lg:[--translate-from-x:0px] lg:[--translate-from-y:100%] lg:[--translate-to-x:0px] lg:[--translate-to-y:0px]"
    >
      {children}
    </motion.div>
  );
};
