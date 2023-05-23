import bandeiras from '../assets/footerGallery/bandeiras.png';
import styled from 'styled-components';

const CopyHeading = styled.div`
  text-align: right;
`;

const BandeirasHeading = styled.div`
  text-align: left;
  width: 230px;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: right;
  padding: 5px;
`;

export const Copy = () => {
  return (
    <>
      <Wrapper>
        <CopyHeading>Todos os direitos reservados</CopyHeading>
        <BandeirasHeading>
          <Image src={bandeiras} alt="Bandeiras" />
        </BandeirasHeading>
      </Wrapper>
    </>
  );
};
