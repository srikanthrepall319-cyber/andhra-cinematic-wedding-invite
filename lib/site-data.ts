export const siteData = {
  siteUrl:     process.env.NEXT_PUBLIC_SITE_URL ?? "https://devi-pavan-wedding-invitation.vercel.app",
  coupleShort: "Devi & Pavan",
  coupleFull: {
    bride: "Devi",
    groom: "Pavan",
  },
  initials:       "Devi ❤️ Pavan",
  seoTitle:       "Devi & Pavan — Wedding Invitation",
  seoDescription: "A premium cinematic Hindu Telugu Andhra wedding invitation with traditions, events, countdown, and sharing tools.",

  weddingDate: "2026-06-27T20:43:00+05:30",

  story: [
    {
      year:  "First Meet",
      title: "A soft beginning",
      text:  "A simple hello slowly turned into a bond full of trust, laughter, and late-night dreams.",
    },
    {
      year:  "Engagement",
      title: "Promises made with joy",
      text:  "Family, blessings, and a beautiful engagement brought the two hearts even closer.",
    },
    {
      year:  "Forever",
      title: "The next chapter",
      text:  "Now the journey opens into a wedding filled with love, rituals, and lifelong memories.",
    },
  ],

  events: [
    {
      key:         "wedding",
      title:       "Wedding Ceremony",
      date:        "2026-06-27",
      time:        "08:43 PM",
      venue:       "Kothapeta, Avanigadda, Andhra Pradesh",
      mapsQuery:   "https://maps.app.goo.gl/mkT5Mgm8UU44KKYm9",
      description: "The sacred wedding ritual where the couple begins a blessed new life together.",
    },
    {
      key:         "reception",
      title:       "Reception",
      date:        "2026-06-29",
      time:        "10:00 AM",
      venue:       "Pedakonduru, Guntur, Andhra Pradesh",
      mapsQuery:   "https://maps.app.goo.gl/kvcsWYL9ojoe39e2A",
      description: "A morning of celebration, warm wishes, photographs, and happy hearts.",
    },
  ],

  traditions: [
    {
      key:     "jeelakarra",
      title:   "Jeelakarra Bellam",
      english: "The bride and groom place cumin and jaggery on each other's heads, showing that life should have both balance and sweetness.",
      telugu:  "జీలకర్ర బెల్లం అనేది జీవితంలో సమతుల్యం మరియు మాధుర్యం ఉండాలని సూచించే పవిత్ర సంప్రదాయం.",
    },
    {
      key:     "talambralu",
      title:   "Talambralu",
      english: "The couple shower rice mixed with pearls and love, wishing a life full of prosperity and joy.",
      telugu:  "తలంబ్రాలు అనేది ఆనందం, శుభం, మరియు సంపదతో నిండిన జీవితానికి ఆశీర్వాదం.",
    },
    {
      key:     "mangalasutra",
      title:   "Mangalasutra Dharana",
      english: "The sacred thread is tied with blessings, marking the bond of marriage and mutual respect.",
      telugu:  "మంగళసూత్ర ధారణ అనేది వివాహ బంధాన్ని పవిత్రంగా బలపరచే ముఖ్యమైన ఘట్టం.",
    },
    {
      key:     "saptapadi",
      title:   "Saptapadi",
      english: "The seven steps together mean seven promises for a lifelong journey of love, duty, and trust.",
      telugu:  "సప్తపది అంటే ఏడడుగుల ప్రయాణం. ఇది జీవితాంతం ప్రేమ, నమ్మకం, బాధ్యత అనే ప్రతిజ్ఞ.",
    },
  ],

  contact: {
    phone:     "+91 98483 87918",
    venueNote: "Please check the maps link on the Events page for the exact venue location.",
  },
} as const;