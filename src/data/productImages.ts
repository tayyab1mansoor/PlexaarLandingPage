import buzzcomBg from '../assets/images/buzzcom_bg_1786104278303.jpg';
import calendexBg from '../assets/images/calendex_bg_1786104264129.jpg';
import ireachBg from '../assets/images/ireach_bg_1786104297978.jpg';
import ondelBg from '../assets/images/ondel_bg_1786104309883.jpg';
import salexplexBg from '../assets/images/salexplex_bg_1786104324961.jpg';
import calendexScheduleMockup from '../assets/images/calendex_schedule_mockup_1786105284737.jpg';
import calendexExactLaptopMobile from '../assets/images/calendex_exact_laptop_mobile_1786105606052.jpg';
import heroEnterpriseBg from '../assets/images/hero_bg_enterprise_1786105297370.jpg';
import heroSectionBg from '../assets/images/herosection.png';

import sectionOfficeTeam from '../assets/images/sections/office-team.png';
import sectionManagementTeam from '../assets/images/sections/management-team.png';
import sectionCalendexWorking from '../assets/images/sections/calendex-working.png';
import sectionHrPeople from '../assets/images/sections/hr-people.png';
import sectionMarketingPc from '../assets/images/sections/marketing-pc.png';
import sectionLaptopPhone from '../assets/images/sections/laptop-phone.png';
import sectionLaptop from '../assets/images/sections/laptop.png';
import sectionStats from '../assets/images/sections/stats-mobile.png';
import sectionLadder from '../assets/images/sections/ladder.png';
import sectionSupport from '../assets/images/sections/contact-support.png';
import sectionHeroImage from '../assets/images/sections/heroimage.png';

import { ProductId } from '../types';

/** Fixed low opacity for readable light-theme sections */
export const SECTION_BG_OPACITY = 0.2;
export const PRODUCT_BG_OPACITY = 0.22;

export const HERO_ENTERPRISE_BG = heroEnterpriseBg;
export const HERO_SECTION_BG = heroSectionBg;
export const CALENDEX_SCHEDULE_MOCKUP_IMAGE = calendexScheduleMockup;
export const CALENDEX_EXACT_LAPTOP_MOBILE_IMAGE = calendexExactLaptopMobile;

/** Product section backgrounds — product-relevant imagery */
export const PRODUCT_BG_IMAGES: Record<ProductId, string> = {
  buzzcom: buzzcomBg,
  calendex: sectionCalendexWorking,
  ireach: sectionHrPeople,
  ondel: ondelBg,
  salexplex: sectionMarketingPc,
};

/**
 * Marketing section backgrounds mapped to section purpose
 * (sourced from global-plexaar-com homepage assets)
 */
export const SECTION_BG_IMAGES = {
  ecosystem: sectionLaptopPhone,
  customerJourney: sectionCalendexWorking,
  executiveRole: sectionOfficeTeam,
  benefits: sectionStats,
  scalability: sectionLaptop,
  security: sectionHeroImage,
  roadmap: sectionLadder,
  faq: sectionSupport,
  management: sectionManagementTeam,
  hr: sectionHrPeople,
  marketing: sectionMarketingPc,
};

export const PRODUCT_GIF_ANIMATIONS: Record<ProductId, { gifUrl: string; posterUrl: string; caption: string; description: string }> = {
  calendex: {
    gifUrl: sectionCalendexWorking,
    posterUrl: calendexBg,
    caption: 'Live Multi-Staff Appointment Calendar & Auto-Scheduling Engine',
    description: 'Real-time booking matrix syncing client availability, staff rosters, and automated SMS reminders in milliseconds.'
  },
  buzzcom: {
    gifUrl: sectionLaptopPhone,
    posterUrl: buzzcomBg,
    caption: 'Unified Enterprise Messaging, VoIP Calls & Live Chat Channels',
    description: 'Encrypted cross-department communication hub with integrated voice channels and instant file sharing.'
  },
  ireach: {
    gifUrl: sectionHrPeople,
    posterUrl: ireachBg,
    caption: 'HR Workforce Attendance Radar, Shift Rosters & Payroll Stream',
    description: 'Automated employee check-in monitoring, biometric leave approvals, and multi-location staffing analytics.'
  },
  ondel: {
    gifUrl: sectionStats,
    posterUrl: ondelBg,
    caption: 'Real-Time Financial Ledger, Double-Entry Cashflow & Invoice Engine',
    description: 'Automated accounts receivable, multi-currency ledger reconciliation, and executive financial health dashboards.'
  },
  salexplex: {
    gifUrl: sectionMarketingPc,
    posterUrl: salexplexBg,
    caption: 'Omnichannel Marketing Automation, Lead Pipelines & Conversion Funnels',
    description: 'AI-driven campaign tracking, lead scoring, and automated customer journey workflows connected to revenue.'
  }
};

export const CALENDEX_MOCKUP_DATA = {
  accountNumber: '689002',
  date: 'Wednesday 10, August 2026',
  experts: ['Joanna Expert', 'Maria Expert', 'Sameer Expert'],
  appointments: [
    {
      id: 1,
      expert: 'Joanna Expert',
      timeSlot: '10:00 - 11:00',
      client: 'ANNE HATHAWAY',
      service: 'AC Service',
      colorBg: 'bg-amber-200/90 text-amber-950 border-amber-300',
      colorDark: 'bg-amber-500/30 text-amber-200 border-amber-500/40'
    },
    {
      id: 2,
      expert: 'Joanna Expert',
      timeSlot: '12:00 - 01:30',
      client: 'KRISTEN COHAN',
      service: 'Boiler Fitting',
      colorBg: 'bg-pink-300/90 text-pink-950 border-pink-400',
      colorDark: 'bg-pink-500/30 text-pink-200 border-pink-500/40'
    },
    {
      id: 3,
      expert: 'Joanna Expert',
      timeSlot: '03:00 - 04:30',
      client: 'LINDA RUSSEL',
      service: 'Ac Fitting',
      colorBg: 'bg-blue-200/90 text-blue-950 border-blue-300',
      colorDark: 'bg-blue-500/30 text-blue-200 border-blue-500/40'
    },
    {
      id: 4,
      expert: 'Maria Expert',
      timeSlot: '12:00 - 01:30',
      client: 'TOM BENTLEY',
      service: 'Laser Skin Removal',
      colorBg: 'bg-emerald-200/90 text-emerald-950 border-emerald-300',
      colorDark: 'bg-emerald-500/30 text-emerald-200 border-emerald-500/40'
    },
    {
      id: 5,
      expert: 'Maria Expert',
      timeSlot: '03:45 - 05:30',
      client: 'TAISSA WILG',
      service: 'Laser Skin Tightening',
      colorBg: 'bg-amber-200/90 text-amber-950 border-amber-300',
      colorDark: 'bg-amber-500/30 text-amber-200 border-amber-500/40'
    },
    {
      id: 6,
      expert: 'Sameer Expert',
      timeSlot: '10:00 - 11:30',
      client: 'KEVIN BACON',
      service: 'AC Service',
      colorBg: 'bg-sky-200/90 text-sky-950 border-sky-300',
      colorDark: 'bg-sky-500/30 text-sky-200 border-sky-500/40'
    },
    {
      id: 7,
      expert: 'Sameer Expert',
      timeSlot: '01:30 - 03:00',
      client: 'JUSTIN TIMBER',
      service: 'Plumbing',
      colorBg: 'bg-teal-200/90 text-teal-950 border-teal-300',
      colorDark: 'bg-teal-500/30 text-teal-200 border-teal-500/40'
    },
    {
      id: 8,
      expert: 'Sameer Expert',
      timeSlot: '04:30 - 05:30',
      client: 'NATASHA YAS',
      service: 'General Electrician',
      colorBg: 'bg-rose-300/90 text-rose-950 border-rose-400',
      colorDark: 'bg-rose-500/30 text-rose-200 border-rose-500/40'
    }
  ]
};
