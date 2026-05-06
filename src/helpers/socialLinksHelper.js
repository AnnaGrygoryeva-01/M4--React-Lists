const socialIconsMap = {
  "facebook.com": "fa-brands fa-facebook",
  "instagram.com": "fa-brands fa-instagram",
  "twitter.com": "fa-brands fa-twitter",
  "linkedin.com": "fa-brands fa-linkedin",
};

export const getSocialIcon = (url) => {
  for (const domain in socialIconsMap) {
    if (url.includes(domain)) return socialIconsMap[domain];
  }
  return "fa-solid fa-link";
};
