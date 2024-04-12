import { motion } from "framer-motion";
import React from "react";

interface Props {
  children: React.ReactNode;
  className: string;
  fileRef: string;
  nameDownload: string;
}

const DownloadFileButton = ({
  children,
  className,
  fileRef,
  nameDownload,
}: Props) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className={className}
    >
      <a href={fileRef} download={nameDownload}>
        {children}
      </a>
    </motion.button>
  );
};

export default DownloadFileButton;
