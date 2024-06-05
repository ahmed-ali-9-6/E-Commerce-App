import LoaderImg from "../../assets/Loader.svg";

function Loader() {
  return (
    <div className=" w-[100vw] h-[100vh] flex justify-center items-center">
      <img src={LoaderImg} alt="Loader" />
    </div>
  );
}

export default Loader;
