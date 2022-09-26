import styled from 'styled-components';
import assetsPicker from 'assets/assetsPicker';

const Loader = () => {
  return (
    <DimmedOverlay>
      <Image src={assetsPicker.images.loading} />
    </DimmedOverlay>
  )
}

const DimmedOverlay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #00000050;
`

const Image = styled.img`
  width: 15%;
`

export default Loader;