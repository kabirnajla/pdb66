import Image from "next/image";

const LogoComponent: React.FC = () => {
  return (
    <div>
      <Image
        src="https://academic.pkru.ac.th/images/Annouce/Budget/2565/PKRU.png"
        alt="PKRU Logo"
        width={100}
        height={150}
      />
    </div>
  );
};

export default LogoComponent;
