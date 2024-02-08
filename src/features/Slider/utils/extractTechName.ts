export const extractTechName = (imagePath: string) => {
  const startPattern = '/assets/logos/';
  const endPattern = '-seeklogo';

  const startIndex = imagePath.indexOf(startPattern) + startPattern.length;
  const endIndex = imagePath.indexOf(endPattern);

  if (startIndex !== -1 && endIndex !== -1) {
    const techName = imagePath.substring(startIndex, endIndex);
    return techName;
  }
};
