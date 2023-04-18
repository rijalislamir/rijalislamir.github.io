export const generateProjectTitle = (title: string | string[]) => {
  if (typeof title !== "string") return;
  const splited = title.split("-");

  for (let i = 0; i < splited.length; i++) {
    splited[i] = splited[i].charAt(0).toUpperCase() + splited[i].substring(1);
  }
  return splited.join(" ");
};
