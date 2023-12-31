import React, { ReactNode } from "react";
import Footer from "./Footer";
import styles from "../styles/App.module.css";
import { motion } from "framer-motion";
import Navbar from "./Navbar/Navbar";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <div>
        <header>
            <Navbar/>
        </header>
        <main>{children}</main>
        <footer className={styles.footer}>
          <Footer />
        </footer>
      </div>
    </motion.div>
  );
};

export default Layout;