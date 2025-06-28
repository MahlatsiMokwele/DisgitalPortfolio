/* eslint-disable react-refresh/only-export-components */
import { styles } from "../styles";
import { socialMedia } from "../constants";
import { SectionWrapper } from "../hoc/SectionWrapper";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px] text-justify">
          &copy; {new Date().getFullYear()} Mahlatsi Mokwele. All rights
          reserved.
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== social.length - 1 ? "mr-6" : "mr-0"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Footer);
