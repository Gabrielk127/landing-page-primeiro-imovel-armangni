import { DollarSign, Home, User, X } from "lucide-react";
import React, { useState } from "react";
import Modal from "../Modal";
import Button from "../Button";

const SectionOne: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section
      className=" w-full max-w-[1280px] mx-auto
      px-6 pb-16 pt-6
      sm:px-12
      md:px-16
      xl:px-36 xl:pb-16
  "
    >
      {/* MOBILE */}
      <div className="sm:px-10 md:px-0 md:hidden">
        <Button
          label="Quero agendar uma consultoria de crédito para meu negócio"
          onClick={openModal}
        />
      </div>

      <div className=" text-white flex items-center justify-center">
        <div>
          <div className="mx-auto">
            <h2
              className="text-lg text-center font-bold pb-4 pt-8 flex flex-col items-center justify-center
                  sm:text-xl sm:mt-0 sm:flex-row
                  md:text-2xl md:pt-10
                  lg:text-3xl lg:pt-16 lg:pb-8
                  xl:text-4xl xl:leading-normal
                  "
            >
              <Home className="w-8 h-8 md:w-12 md:h-12 mr-2 text-custom-icons" />
              Realize o Sonho do Seu Primeiro Imóvel
            </h2>
            <div className="grid md:grid-cols-2 gap-6 justify-center md:justify-between">
              <div className="bg-custom-background-card p-6 rounded-lg shadow-lg">
                <h3
                  className="text-sm font-bold text-white text-center mb-4 flex flex-row  items-center
              sm:text-lg
              lg:text-xl
            "
                >
                  <DollarSign className="w-6 h-6 mr-2 text-custom-icons" />
                  Crédito Estruturado
                </h3>
                <ul className="space-y-2">
                  <li
                    className="text-xs
                md:text-base
              "
                  >
                    ✔️ Opção mais econômica e viável
                  </li>
                  <li
                    className="text-xs
                                  md:text-base
                                  text-
                                "
                  >
                    ✔️ Segurança garantida
                  </li>
                  <li
                    className="text-xs
                                  md:text-base
                                  text-
                                "
                  >
                    ✔️ Não compromete sua vida financeira
                  </li>
                </ul>
              </div>
              <div className="bg-custom-background-card p-6 rounded-lg shadow-lg">
                <h3
                  className="text-sm font-bold text-white text-center mb-4 flex flex-row  items-center
              sm:text-lg
              lg:text-xl
            "
                >
                  <X className="w-6 h-6 mr-2 text-custom-icons" />
                  Você Não Precisa
                </h3>
                <ul className="space-y-2">
                  <li
                    className="text-xs
                md:text-base
              "
                  >
                    ❌ Esperar anos economizando
                  </li>
                  <li
                    className="text-xs
                                  md:text-base
                                  text-
                                "
                  >
                    ❌ Pagar juros altos em financiamento
                  </li>
                  <li
                    className="text-xs
                                  md:text-base
                                  text-
                                "
                  >
                    ❌ Adiar seus planejamentos
                  </li>
                </ul>
              </div>
            </div>
            <p
              className="text-base text-center font-bold pt-8 flex flex-col items-center justify-center
              sm:text-lg sm:mt-0
              md:text-xl md:pt-8
              lg:text-2xl
              xl:text-xl xl:leading-normal
              "
            >
              <User className="w-8 h-8 md:w-12 md:h-12 mr-2 text-custom-icons" />
              Sou Simone Armangni, da AX Negócios Investimentos e Créditos, e
              estou aqui para mostrar uma maneira segura, inteligente e rápida
              de realizar essa conquista.
            </p>
          </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </section>
  );
};

export default SectionOne;
