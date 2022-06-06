export const getDate = (value) => {
  const date = new Date(value);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");

  return `${yyyy}-${mm}-${dd}`;
};

export const checkImageFileValidation = (file) => {
  if (!file.size) {
    return false;
  }
  if (file.size > 5 * 1024 * 1024) {
    return false;
  }
  if (!file.type.includes("jpeg") && !file.type.includes("png")) {
    return false;
  }
  return true;
};
