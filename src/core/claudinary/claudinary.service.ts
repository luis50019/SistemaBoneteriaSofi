import { URL_CLOUDINARY, UPLOAD_PRESET } from "./claudinary";

export async function uploadToCloudinary(uri: string) {
  const formData = new FormData();
  formData.append("file", {
    uri: uri,
    type: "image/jpg",
    name: "photo.jpg",
  } as any);

  formData.append("upload_preset", UPLOAD_PRESET);

  const response = await fetch(URL_CLOUDINARY, {
    method: "POST",
    body: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  if (!response.ok) throw new Error("Error al cargar la imagen");
  return response.json();
}
