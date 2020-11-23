
const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();

export function encode(value: string, urlSafe: boolean = false): string {
  const u8a = textEncoder.encode(value);
  const maxargs = 0x1000;
  const strs = [];
  for(let i = 0, l = u8a.length; i < l; i += maxargs) {
    strs.push(String.fromCharCode(...u8a.subarray(i, i + maxargs)));
  }
  const base64 = window.btoa(strs.join(''));
  return urlSafe ? base64.replace(/[+\/]/g, (m0) => m0 == '+' ? '-' : '_').replace(/=+$/m, '') : base64;
}

export function decode(base64: string): string {
  base64 = base64.replace(/[^A-Za-z0-9\+\/]/g, "").replace(/[-_]/g, m => (m == "-" ? "+" : "/"));
  const u8a = Uint8Array.from(window.atob(base64), char => char.charCodeAt(0));
  return textDecoder.decode(u8a);
}
