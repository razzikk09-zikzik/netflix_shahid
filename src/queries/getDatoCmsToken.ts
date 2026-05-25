// getDatoCmsToken.ts — optional; used only for pages still on DatoCMS

export const getDatoCmsToken = (): string => {
  const hostname = window.location.hostname;

  if (
    hostname === 'localhost' ||
    hostname.endsWith('.localhost') ||
    hostname.endsWith('.vercel.app')
  ) {
    return process.env.REACT_APP_DATOCMS_ROR_TOKEN ?? '';
  }

  return process.env.REACT_APP_DATOCMS_ROR_TOKEN ?? '';
};
