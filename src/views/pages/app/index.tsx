import { useState, useEffect, useCallback } from "react";

import LoaderContent from "../../../LoaderContent";
import api from "../../../services/api";

import { Container } from "./style";

const App: React.FC = () => {
  const [ photo, setPhoto ] = useState<string>('');
  const [ isLoad, setIsLoad ] = useState<boolean>(false);

  // function handleLoad(state: boolean){
  //   return setIsLoad(!state)
  // }

  useEffect(() => {
    setIsLoad(false)
    api.get('').then(
      response => {
        setPhoto(response.data.message);
        setIsLoad(true);
      }
    )
  }, [])

  const handleSorteImage: any = useCallback(() => {
    setIsLoad(true)
    console.log(photo)
      api.get('').then(
        response => {
          setPhoto(response.data.message);
          setIsLoad(false)
        }
      )
  }, [photo])

  return (
    <Container>
      <div className="content">
        <h1>Hello Gama Academy</h1>
        <h4>Vejas estas imagem desta forma</h4>
        <button onClick={handleSorteImage} >Clique aqui</button>
      </div>

      { isLoad ? (<LoaderContent/>) : (<img src={photo} alt="dog" />)}
    </Container>
  )
}

export default App