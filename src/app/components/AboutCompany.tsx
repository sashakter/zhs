import Image from "next/image";
import Title from "./Title";

const AboutCompany: React.FC = () => {
  return (
    <div className="py-10 relative">
    <div className="absolute inset-0 z-0">
        <Image
          src={'/about-com-bg.jpg'}
          alt="background photo"
          fill={true}
          className="object-cover"
          quality={50}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#000] opacity-90 z-0"></div>
      <div className="container mx-auto p-4 md:p-6 lg:p-8 relative z-10">
      <Title title="ПРО КОМПАНІЮ"/>
      <div className="flex flex-col items-center lg:flex-row justify-around">
        <Image
          src={"/companyLogo.png"}
          alt="company logo"
          width={350}
          height={350}
        />
        <Image src={"/EarLine.svg"} className="w-8 max-lg:rotate-90 max-md:w-4" alt="ear line" width={344} height={26} />
        <div className="flex flex-col items-center lg:items-start">
        <ul className="list-none text-2xl max-w-md flex flex-col gap-5">
          <li className="flex items-center gap-5">
            <Image className="shadow-sm" src={"/ear.svg"} alt="ear" width={24} height={24} />
            Високі показники кількісної та якісної дистрибуції.
          </li>
          <li className="flex items-center gap-5">
            <Image className="shadow-sm" src={"/ear.svg"} alt="ear" width={24} height={24} />
            Унікальне позиціонування кожної торгової марки.
          </li>
          <li className="flex items-center gap-5">
            <Image className="shadow-sm" src={"/ear.svg"} alt="ear" width={24} height={24} />
            Стабільно висока якість.
          </li>
          <li className="flex items-center gap-5">
            <Image className="shadow-sm" src={"/ear.svg"} alt="ear" width={24} height={24} />
            Компанія на ринку алкоголю України з 2002 року.
          </li>
          <li className="flex items-center gap-5">
            <Image className="shadow-sm" src={"/ear.svg"} alt="ear" width={24} height={24} />
            Різноманітна лінійка смаків, що включає в себе горілки класичні,
            горілки особливі, солодкі та гіркі настоянки.
          </li>
          <li>
          </li>
        </ul>
            <button className="bg-white text-2xl text-black px-5 py-2 uppercase rounded-lg">дізнатися більше</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AboutCompany;
