import loadGifImage from "./img/load.gif";

const LoaderContent: React.FC = () =>  {
  return(
    <div>
      <img src={loadGifImage} alt="Dog Loader" />
    </div>
  )
}

export default LoaderContent