// Destinations on the live Future Snoops site, taken from futuresnoops.com.
// Its demo and Runway trial forms open in a pop-up on the homepage, which has no
// direct URL, so those buttons go to the homepage.
const site = 'https://www.futuresnoops.com/en';

export const links = {
  home: site,
  requestDemo: site,
  runwayTrial: site,
  colorTrial: 'https://fs.futuresnoops.com/try-out-color-w',
  events: `${site}/events`,
  cofounderMessage: 'https://soundcloud.com/user-52943283',
  partnershipsEmail: 'mailto:partnerships@futuresnoops.com',
} as const;
