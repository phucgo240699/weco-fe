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
  display: flex:
  flex: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  align-items: center;
  justify-content: center;
  background-color: #00000080;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  margin: auto;
`

export default Loader;