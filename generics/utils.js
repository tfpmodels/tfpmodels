export const getImageFromFileUpload = (file, onLoadEnd) => {
  const reader = new FileReader();
  reader.onloadend = onLoadEnd;

  if (file) {
    reader.readAsDataURL(file);
  } else throw `expected file argument to be instance of file but got ${file}`;
};
