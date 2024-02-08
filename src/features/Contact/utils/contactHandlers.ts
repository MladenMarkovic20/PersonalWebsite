export const handleEmailClick = (): Window | null =>
  window.open('mailto:mmladenmarkovic@gmail.com');

export const handleAddressClick = (): void => {
  const mapsUrl =
    'https://www.google.com/maps/place/Novi+Sad/@45.2715044,19.8082416,13z/data=!3m1!4b1!4m6!3m5!1s0x475b10613de93455:0xb6f7d683724fe28!8m2!3d45.2396085!4d19.8227056!16zL20vMHN3d24?entry=ttu';
  window.open(mapsUrl);
};

export const handleClickBasedOnName = (name: string): (() => void) | null => {
  const clickHandlers: { [key: string]: () => void } = {
    Email: handleEmailClick,
    Address: handleAddressClick,
  };
  return clickHandlers[name] || null;
};
