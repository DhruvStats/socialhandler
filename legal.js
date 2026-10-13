/* ---- Business details used on all legal pages. Edit once here. ---- */
const BIZ = {
  brand: "SocialHandler",
  owner: "[Your full legal name]",            // proprietor name as on PAN
  entity: "a sole proprietorship",            // change to "a private limited company" later
  address: "[Street address], Pune, Maharashtra [PIN], India",
  email: "[your-email@example.com]",
  phone: "+91 79900 46790",
  city: "Pune",
  updated: "13 October 2026",
};

document.querySelectorAll("[data-biz]").forEach(el => {
  const k = el.dataset.biz;
  if (k === "email") { el.textContent = BIZ.email; if (el.tagName === "A") el.href = "mailto:" + BIZ.email; }
  else if (k === "phone") { el.textContent = BIZ.phone; if (el.tagName === "A") el.href = "tel:" + BIZ.phone.replace(/\s/g, ""); }
  else el.textContent = BIZ[k];
});
document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
