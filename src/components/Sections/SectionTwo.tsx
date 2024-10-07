import Button from "../Button";
import Card from "../Card";
import React, { useState } from "react";
import icon1 from "@/assets/icons-yellow/icon1.svg";
import icon2 from "@/assets/icons-yellow/icon2.svg";
import icon3 from "@/assets/icons-yellow/icon3.svg";
import icon4 from "@/assets/icons-yellow/icon4.svg";
import Modal from "../Modal";

const SectionTwo: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section
      className=" min-h-screen w-full max-w-[1280px] mx-auto
      px-6 pb-12 pt-12
      sm:px-12
      md:px-16 md:py-10
      xl:px-36 xl:py-16
  "
    >
      <h2
        className="text-lg text-center font-bold pt-8 text-white
              sm:text-xl sm:mt-0
              md:text-2xl md:pt-0
              lg:text-2xl
              xl:text-3xl xl:leading-normal
              "
      >
        Crédito estruturado é a{" "}
        <span className="text-custom-text-title">
          opção mais viável, econômica e segura
        </span>{" "}
        para o empreendedor que deseja um negócio{" "}
        <span className="text-custom-text-title">sólido</span>,{" "}
        <span className="text-custom-text-title">próspero</span> e{" "}
        <span className="text-custom-text-title">lucrativo</span>:
      </h2>
      <p
        className="text-base text-center mt-4 font-normal text-white
              lg:text-lg lg:pt-10
              xl:text-xl xl:pt-12
            "
      >
        As aplicações para o crédito inteligente são diversas:
      </p>

      <div className="flex justify-center items-center">
        <div
          className="pt-6 grid grid-cols-2 gap-4
        sm:gap-8
        md:gap-10
        lg:gap-14
        xl:gap-16 xl:max-w-full xl:w-full
      "
        >
          <Card icon={icon1} title="Imóveis prontos" />
          <Card icon={icon2} title="Construções" />
          <Card icon={icon3} title="Reformas" />
          <Card icon={icon4} title="Compra de terrenos" />
        </div>
      </div>
      <div
        className="pt-6 mx-auto
      md:w-[500px] md:pt-10 
      lg:w-[600px]
      "
      >
        <Button
          label="Quero agendar uma consultoria imobiliária."
          onClick={openModal}
        />
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default SectionTwo;
