import AboutCompany from "./components/AboutCompany";
import HeaderVideo from "./components/HeaderVideo/HeaderVideo";

const Page: React.FC = () => {
  return (
    <>
      <header>
        <HeaderVideo />
      </header>
      <main>
        <AboutCompany/>
      </main>
    </>
  );
};

export default Page;
