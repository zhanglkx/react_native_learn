import {useCameraDevices, Camera} from 'react-native-vision-camera';
import * as React from 'react';
import {useRef} from 'react';

function FaceRecognitionPunch() {
  const camera = useRef(null);
  // 获取可用镜头
  const devices = useCameraDevices();
  // 使用前置摄像头
  const device = devices.front;
  console.log('useCameraDevices', devices);
  return (
    device != null && (
      <Camera
        ref={camera} //绑定ref
        device={device} //绑定设备
        isActive={true}
        photo={true} //打开相机功能
        frameProcessorFps={'auto'}
      />
    )
  );
}

export default FaceRecognitionPunch;
