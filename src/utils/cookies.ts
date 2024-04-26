const SECONDS_IN_A_MONTH = 2592000;

export function setCookie(name: string, value: string): void {
  const encodedValue = encodeURIComponent(value);
  document.cookie = `${name}=${encodedValue}; Path=/; SameSite=Strict; Max-Age=${SECONDS_IN_A_MONTH}`;
}

export function getCookie(name: string): string | null {
  const nameLengthPlus = name.length + 1;
  const cookieList = document.cookie.split(';').map(c => c.trim());
  const targetCookie = cookieList.find(
    cookie => cookie.substring(0, nameLengthPlus) === `${name}=`,
  );
  return targetCookie
    ? decodeURIComponent(targetCookie.substring(nameLengthPlus))
    : null;
}

export function deleteCookie(name: string): void {
  document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}
