import { CameraView, useCameraPermissions } from "expo-camera";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "./useNavigate";
import * as ImageManipulator from "expo-image-manipulator";
import { uploadToCloudinary } from "../../core/claudinary/claudinary.service";

export const useCamera = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const { navigateWithParams } = useNavigate();
  const [photo, setPhoto] = useState<string>("");
  const camera = useRef<CameraView>(null);

  useEffect(() => {
    if (!permission) return;
    if (!permission.granted) {
      requestPermission();
    }
  }, [permission]);

  const takePhoto = async () => {
    if (!camera.current) return;
    //!: TOMAMOS UNA FOTO
    const picture = await camera.current.takePictureAsync({
      quality: 0.8,
      skipProcessing: true,
    });
    //optimizamos la imagen
    const optimized = await ImageManipulator.manipulateAsync(
      picture.uri,
      [{ resize: { width: 1600 } }],
      {
        compress: 0.75,
        format: ImageManipulator.SaveFormat.JPEG,
      },
    );
    setPhoto(optimized.uri);
    navigateWithParams("AddProduct", { imageUri: optimized.uri });
  };

  const discardPhoto = () => setPhoto("");

  //TODO: PENDIENTE LA LOGICA LA PODRIAMOS MOVER A OTRO LADO
  const confirmPhoto = async () => {
    try {
      const claudinary = await uploadToCloudinary(photo);
    } catch (error) {
      console.log(error);
    }
  };

  return { camera, photo, takePhoto, discardPhoto, confirmPhoto };
};
