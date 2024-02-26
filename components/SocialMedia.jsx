import React from "react";
import Image from "next/image";
import ProdutoImg from "../public/assets/social-media.jpg";
import Logo from "../public/assets/logo-principal.png";
import Link from "next/link";

const SocialMedia = () => {
  return (
    <div className="">
      <div className="max-w-full h-[500px] md:h-[500px] w-[500px] relative group m-auto">
        <div className="w-full h-full mt-24 bg-center bg-cover duration-500 relative ">
          <Image
            className="rounded-full"
            src={ProdutoImg}
            alt={"/"}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>

      <div className="grid justify-items-center gap-8 mt-5">
        <h1>Social Media</h1>
        <a
          href="https://api.whatsapp.com/send/?phone=989331908&text=Olá tudo bem!"
          target="_Blank"
          rel="noreferrer"
        >
          <button className="p-2 rounded-full w-[200px] text-xl">
            Iniciar sessão
          </button>
        </a>
        <h2 className="grid text-center w-[500px]">
          O melhor lugar para todas as suas fotos, arquivos, notas, e‑mails e
          muito mais.
        </h2>
      </div>

      <div className="md:flex p-5 mt-10">
        <div
          style={{ borderRadius: "20px" }}
          className="border shadow-2xl  h-full  md:h-[600px] md:w-[600px] mx-auto mb-4 p-5 hover:bg-gray-200"
        >
          <div className="grid justify-center p-10">
            <Image src={Logo} alt="logo-branco" height={38.5} width={200} />
          </div>

          <div className="grid text-left  font-sans font-medium text-lg leading-loose mx-10">
            <h3 className="font-bold text-3xl ">
              Acesse facilmente apps e dados do seu iPhone na web
            </h3>
            <p className="mt-3">
              O iCloud é essencial para que as informações pessoais em seus
              dispositivos sejam mantidas seguras, atualizadas e disponíveis
              onde quer que você esteja. No iCloud.com, você pode acessar suas
              fotos, arquivos e muito mais de qualquer navegador da web. As
              alterações que você fizer serão sincronizadas com seu iPhone e
              outros dispositivos. Assim, você sempre terá tudo atualizado.
            </p>
          </div>
        </div>

        <div
          style={{ borderRadius: "20px" }}
          className="border shadow-2xl  h-full  md:h-[600px] md:w-[600px] mx-auto  p-5 hover:bg-gray-200"
        >
          <div className="grid justify-center p-10">
            <Image src={Logo} alt="logo-branco" height={38.5} width={200} />
          </div>

          <div className="grid text-left  font-sans font-medium text-lg leading-loose mx-10">
            <h3 className="font-bold text-3xl ">
              Acesse facilmente apps e dados do seu iPhone na web
            </h3>
            <p className="mt-3">
              O iCloud é essencial para que as informações pessoais em seus
              dispositivos sejam mantidas seguras, atualizadas e disponíveis
              onde quer que você esteja. No iCloud.com, você pode acessar suas
              fotos, arquivos e muito mais de qualquer navegador da web. As
              alterações que você fizer serão sincronizadas com seu iPhone e
              outros dispositivos. Assim, você sempre terá tudo atualizado.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;