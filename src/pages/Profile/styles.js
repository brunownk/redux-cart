import styled from 'styled-components';
// import devices from '~/styles/configs/devices';
import camera from '~/assets/icons/camera.png';

export const Container = styled.div`
  min-height: 100%;

  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 1.5rem;

  margin-bottom: 20px;
`;

export const AvatarBox = styled.div`
  position: relative;
  margin-bottom: 30px
`;

export const ImageInput = styled.input.attrs({
  type: 'file',
  accept: 'image/*'
})`
  display: none;
`;

export const UploadButton = styled.button`
  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;

  top: 0;
  right: 0;

  border-radius: 100%;

  border: none;

  background-color: blue;

  z-index: 99999;
`;

export const UploadButtonIcon = styled.img.attrs({
  src: camera,
})`
  width: 15px;
  height: 15px;
`;
