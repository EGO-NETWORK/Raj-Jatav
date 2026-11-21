// Turns "Trust Log" into "𝐓ʀᴜꜱᴛ 𝐋ᴏɢ": bold first letter, small caps for the rest.
const SMALL = {
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ",
  j: "ᴊ", k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ",
  s: "ꜱ", t: "ᴛ", u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ",
};

function bold(ch) {
  const c = ch.charCodeAt(0);
  if (c >= 65 && c <= 90) return String.fromCodePoint(0x1d400 + c - 65);
  if (c >= 97 && c <= 122) return String.fromCodePoint(0x1d41a + c - 97);
  return ch;
}

export function styled(text) {
  return String(text)
    .split(/(\s+)/)
    .map((word) => {
      let first = true;
      return Array.from(word)
        .map((ch) => {
          if (!/[A-Za-z]/.test(ch)) return ch;
          if (first) {
            first = false;
            return bold(ch.toUpperCase());
          }
          return SMALL[ch.toLowerCase()] ?? ch;
        })
        .join("");
    })
    .join("");
}
