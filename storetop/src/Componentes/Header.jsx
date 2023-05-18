
import styled from 'styled-components';
import FONE from '../assets/navicons/fon.png';
import INSTA from '../assets//navicons/instagram.png';
import TWITER from '../assets//navicons/twiter.png';
import FACE from '../assets//navicons/facebook.png';

const Nav = styled.div`
  background-color: #000;
  padding: 5px;
  right: 15px; 
  left: 0px;
  position: relative;
`;

const ImgFone = styled.img` 
  width: 25px; 
  height: auto;
  padding: 5px;
  position: absolute;
  top: 0%;
  left: 80px;
  transform: translateY(-10%);
`;

const TextRight = styled.text`
  width: 25px; 
  height: auto;
  padding: 0px;
  position: relative;
  left: 100px;
  font-family: Jost;
  font-size: 13px;
  font-weight: 200px;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: right 25px;
  color: #ffffff;

`;

const ImgInstaDiv = styled.img` 
  width: 25px; 
  height: auto;
  padding: 5px;
  position: absolute;
  top: 10%;
  right: 40px;
  transform: translateY(-10%);
`;

const ImgFace = styled.img` 
  width: 18px; 
  height: auto;
  padding: 5px;
  position: absolute;
  top: 10%;
 right: 120px;
 transform: translateY(-10%);

`;

const ImgTwiter = styled.img` 
  width: 25px; 
  height: auto;
  padding: 5px;
  position: absolute;
  top: 10%;
 right: 150px;
  transform: translateY(-10%);
`;


export const Header = () => {
  return (
    <>
    {/* <ImagemDiv src={logo} alt='logo'/>*/}
        <Nav>
        <ImgFone src={FONE} alt='fone'/> 
        <TextRight>        
          <h4>GANHE 20% DE DESCONTO COM O CÓDIGO DE CUPOM CGBNJKI25</h4>
        </TextRight>
        <ImgInstaDiv src={INSTA} alt='instagram'/>
        <ImgFace src={FACE} alt='facebook'/> 
        <ImgTwiter src={TWITER} alt='twiter'/> 
      

      </Nav> 
      
      </>
     );
};
