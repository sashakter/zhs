import Image from "next/image";
import Title from "./Title";

const AboutCompany: React.FC = () => {
  return (
    <div className="py-10 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gray-100"><</div>
      <Title title="ПРО КОМПАНІЮ"/>
      <div className="flex flex-col items-center lg:flex-row justify-around">
        <Image
          src={"/companyLogo.png"}
          alt="company logo"
          width={350}
          height={350}
        />
        <Image src={"/EarLine.svg"} alt="ear line" width={26} height={344} />
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
            <button className="bg-white text-black px-5 py-2 uppercase rounded-lg">Дізнатися БІЛЬШЕ</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutCompany;
