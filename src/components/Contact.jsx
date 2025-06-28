/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

import { styles } from "../styles";
import { contacts } from "../constants";
import { SectionWrapper } from "../hoc/SectionWrapper";

const Contact = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Contacts</p>
        <h2 className={styles.sectionHeadText}>Get In Touch.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px] text-justify"
      >
        Please find my contact details below should you need to get in touch.
      </motion.p>
      <div className="mt-10 flex flex-col items-start gap-6">
        {contacts.map(({ id, icon, contact, href }) => (
          <div key={id} className="flex items-center gap-4">
            <img src={icon} alt={id} className="w-8 h-8" />
            {href ? (
              <a
                href={href}
                className="text-secondary text-[16px] leading-[24px] hover:text-white underline cursor-pointer transition-colors duration-200"
                target={href.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
              >
                {contact}
              </a>
            ) : (
              <p className="text-secondary text-[16px] leading-[24px]">
                {contact}
              </p>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
