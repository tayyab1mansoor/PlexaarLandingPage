import { ProductInfo, FAQItem, RoleView, JourneyStep } from '../types';

export const PLEXAAR_PRODUCTS: ProductInfo[] = [
  {
    id: 'buzzcom',
    name: 'BUZZCOM',
    tagline: 'Business Communication, Connected to Everything.',
    category: 'COMMUNICATION HUB',
    description: 'Enterprise team messaging, customer chat, video conferencing, and call operations seamlessly synced with your central business context.',
    color: '#548DFF', // Brand blue
    gradient: 'from-[#548DFF] to-[#5B7CFD]',
    borderGlow: 'border-[#548DFF]/30 hover:border-[#548DFF]',
    bgGlow: 'bg-[#548DFF]/10',
    iconName: 'MessageSquare',
    keyFeatures: [
      'Real-time Team Chat & Channels',
      'HD Voice & Video Call Engine',
      'Unified Customer Communication Inbox',
      'Contextual Threading linked to Orders & Clients',
      'Instant Call Recording & Transcript Summaries'
    ],
    metrics: [
      { label: 'Msg Response Time', value: '-64%' },
      { label: 'Active Channels', value: '1,200+' },
      { label: 'Call Quality Score', value: '99.9%' }
    ]
  },
  {
    id: 'calendex',
    name: 'CALENDEX',
    tagline: 'Scheduling Without Operational Friction.',
    category: 'APPOINTMENT & BOOKING MANAGEMENT',
    description: 'Enterprise appointment scheduling and booking system that coordinates multi-staff availability, resource allocation, and automated reminders.',
    color: '#5B7CFD', // Marketing blue
    gradient: 'from-[#5B7CFD] to-[#548DFF]',
    borderGlow: 'border-[#5B7CFD]/30 hover:border-[#5B7CFD]',
    bgGlow: 'bg-[#5B7CFD]/10',
    iconName: 'Calendar',
    keyFeatures: [
      'Multi-Calendar Resource Synchronization',
      'Automated Client Booking Portal',
      'Buffer Times & Custom Capacity Controls',
      'SMS & WhatsApp Automated Appointment Alerts',
      'Integrated Payment & Deposit Collection'
    ],
    metrics: [
      { label: 'No-Show Reduction', value: '78%' },
      { label: 'Bookings Managed/mo', value: '250K+' },
      { label: 'Booking Time Saved', value: '12 hrs/wk' }
    ]
  },
  {
    id: 'ireach',
    name: 'iREACH',
    tagline: 'Your People. Your Organization. One HR Experience.',
    category: 'HUMAN RESOURCES & WORKFORCE MANAGEMENT',
    description: 'Comprehensive HR management platform for employee records, attendance, leave requests, performance evaluations, and org hierarchy.',
    color: '#0575E6', // Primary blue
    gradient: 'from-[#0575E6] to-[#548DFF]',
    borderGlow: 'border-[#0575E6]/30 hover:border-[#548DFF]',
    bgGlow: 'bg-[#0575E6]/10',
    iconName: 'Users',
    keyFeatures: [
      'Centralized Employee Directory & Profiles',
      'Attendance Tracking & Geofenced Time Clock',
      'Automated Leave Request Workflows',
      'Performance Review & Goal Alignment',
      'Digital Document Vault & Compliance Audit'
    ],
    metrics: [
      { label: 'HR Admin Time Saved', value: '45%' },
      { label: 'Leave Processing Speed', value: '< 2 mins' },
      { label: 'Employee Engagement', value: '94%' }
    ]
  },
  {
    id: 'ondal',
    name: 'ONDAL',
    tagline: 'Financial Visibility Built Into Your Business.',
    category: 'FINANCE & FINANCIAL MANAGEMENT',
    description: 'Command center for real-time revenue tracking, automated invoicing, expense classification, ledger streams, and cash flow forecasting.',
    color: '#FFD705', // Brand yellow
    gradient: 'from-[#FFD705] to-[#548DFF]',
    borderGlow: 'border-[#FFD705]/40 hover:border-[#FFD705]',
    bgGlow: 'bg-[#FFD705]/10',
    iconName: 'TrendingUp',
    keyFeatures: [
      'Real-time Cash Flow & Revenue Analytics',
      'Automated Multi-currency Invoicing',
      'Expense Categorization & Approval Queues',
      'Financial Reporting & Tax Reconciliation',
      'Accounts Receivable Aging Tracking'
    ],
    metrics: [
      { label: 'Days Sales Outstanding', value: '-14 Days' },
      { label: 'Invoice Processing', value: 'Instant' },
      { label: 'Audit Compliance', value: '100%' }
    ]
  },
  {
    id: 'salexplex',
    name: 'SALEXPLEX',
    tagline: 'Turn Marketing Activity Into Business Growth.',
    category: 'MARKETING PORTAL & OPERATIONS',
    description: 'Marketing campaign management portal that aligns promotion channels, customer engagement journeys, lead attribution, and ROI analytics.',
    color: '#4294FF', // Soft brand blue
    gradient: 'from-[#4294FF] to-[#548DFF]',
    borderGlow: 'border-[#4294FF]/30 hover:border-[#548DFF]',
    bgGlow: 'bg-[#4294FF]/10',
    iconName: 'Megaphone',
    keyFeatures: [
      'Omnichannel Campaign Orchestration',
      'Customer Lead Attribution & Scoring',
      'Conversion Funnel & Analytics Tracking',
      'Audience Segmentation & Journey Builder',
      'Marketing Asset & Portal Repository'
    ],
    metrics: [
      { label: 'Lead Conversion Rate', value: '+38%' },
      { label: 'Campaign ROI Tracked', value: '4.2x' },
      { label: 'Customer Reach', value: '1.5M+' }
    ]
  }
];

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    stepNumber: '01',
    title: 'Customer Discovery & Lead Capture',
    productId: 'salexplex',
    productName: 'SALEXPLEX',
    action: 'Marketing Activity',
    description: 'A prospective enterprise client interacts with a SalexPlex campaign portal, generating a high-intent lead scored in real-time.',
    iconName: 'Megaphone'
  },
  {
    stepNumber: '02',
    title: 'Automated Consultation Booking',
    productId: 'calendex',
    productName: 'CALENDEX',
    action: 'Appointment Scheduled',
    description: 'The client books an executive consultation directly through Calendex, auto-allocating technical staff based on availability.',
    iconName: 'Calendar'
  },
  {
    stepNumber: '03',
    title: 'Instant Team & Client Communication',
    productId: 'buzzcom',
    productName: 'BUZZCOM',
    action: 'Communication Active',
    description: 'Buzzcom creates a dedicated client portal channel. Voice calls, meeting notes, and updates stay linked to the meeting profile.',
    iconName: 'MessageSquare'
  },
  {
    stepNumber: '04',
    title: 'Workforce Assignment & Execution',
    productId: 'ireach',
    productName: 'iREACH',
    action: 'HR & Personnel Alignment',
    description: 'iReach verifies specialist team allocation, attendance, project role clearance, and shift schedules for seamless delivery.',
    iconName: 'Users'
  },
  {
    stepNumber: '05',
    title: 'Automated Financial Settlement',
    productId: 'ondal',
    productName: 'ONDAL',
    action: 'Financial Management',
    description: 'Ondal generates the invoice automatically upon appointment completion, processing payment and logging revenue to the central ledger.',
    iconName: 'TrendingUp'
  },
  {
    stepNumber: '06',
    title: 'Full Executive Operating Visibility',
    productId: 'buzzcom',
    productName: 'PLEXAAR CORE',
    action: 'Ecosystem Intelligence',
    description: 'C-Suite leaders monitor real-time KPIs across all five connected channels in one single, high-trust executive dashboard.',
    iconName: 'Layers'
  }
];

export const ROLE_VIEWS: RoleView[] = [
  {
    id: 'ceo',
    title: 'CEO & Executive Board',
    roleName: 'Chief Executive Officer',
    subtitle: 'High-level bird’s-eye operational health, cross-department efficiency, and growth metrics.',
    metrics: [
      { title: 'Total Enterprise Revenue', value: '$4.82M', change: '+24.5%', isPositive: true },
      { title: 'Active Operations Index', value: '98.4%', change: '+3.2%', isPositive: true },
      { title: 'Cross-Dept Efficiency', value: '94.1%', change: '+12.8%', isPositive: true },
      { title: 'Client Satisfaction (CSAT)', value: '4.9/5', change: '+0.4', isPositive: true }
    ],
    primaryProduct: 'buzzcom',
    secondaryProducts: ['ondal', 'salexplex', 'ireach', 'calendex'],
    keyFocus: ['Global Organizational Health', 'Strategic Resource Allocation', 'Real-time Profitability Tracking']
  },
  {
    id: 'operations',
    title: 'COO & Operations Team',
    roleName: 'Chief Operating Officer',
    subtitle: 'Smooth service delivery, schedule utilization, and cross-team communication flows.',
    metrics: [
      { title: 'Appointment Fulfillment', value: '99.1%', change: '+4.5%', isPositive: true },
      { title: 'Staff Capacity Utilization', value: '88.6%', change: '+8.1%', isPositive: true },
      { title: 'Incident Resolution Time', value: '14 mins', change: '-35%', isPositive: true },
      { title: 'Active Projects Handled', value: '142', change: '+18', isPositive: true }
    ],
    primaryProduct: 'calendex',
    secondaryProducts: ['buzzcom', 'ireach'],
    keyFocus: ['Workflow Bottleneck Elimination', 'Resource Calendar Balance', 'Communication Speed']
  },
  {
    id: 'hr',
    title: 'HR Director & People Ops',
    roleName: 'Human Resources Director',
    subtitle: 'Workforce attendance, employee retention, organizational hierarchy, and team performance.',
    metrics: [
      { title: 'Total Active Workforce', value: '1,420', change: '+85 hires', isPositive: true },
      { title: 'Monthly Retention Rate', value: '97.2%', change: '+1.8%', isPositive: true },
      { title: 'Leave Processing Speed', value: '1.2 mins', change: '-82%', isPositive: true },
      { title: 'Staff Compliance Index', value: '100%', change: '0%', isPositive: true }
    ],
    primaryProduct: 'ireach',
    secondaryProducts: ['buzzcom', 'calendex'],
    keyFocus: ['Talent Retention & Satisfaction', 'Automated Attendance & Leave', 'Policy Compliance']
  },
  {
    id: 'finance',
    title: 'CFO & Financial Control',
    roleName: 'Chief Financial Officer',
    subtitle: 'Cash flow forecasting, accounts receivable, invoice velocity, and operational expense control.',
    metrics: [
      { title: 'Net Cash Flow (Q3)', value: '$1.24M', change: '+19.2%', isPositive: true },
      { title: 'Outstanding Receivables', value: '$84.2K', change: '-42%', isPositive: true },
      { title: 'Operating Margin', value: '38.5%', change: '+4.1%', isPositive: true },
      { title: 'Invoice Paid-on-Time Rate', value: '96.4%', change: '+14.2%', isPositive: true }
    ],
    primaryProduct: 'ondal',
    secondaryProducts: ['calendex', 'salexplex'],
    keyFocus: ['Ledger Stream Accuracy', 'Automated AR & Billing', 'Expense Optimization']
  },
  {
    id: 'marketing',
    title: 'CMO & Marketing Leadership',
    roleName: 'Chief Marketing Officer',
    subtitle: 'Campaign ROI, lead acquisition cost, customer conversion funnels, and marketing portal reach.',
    metrics: [
      { title: 'Campaign ROI Average', value: '4.8x', change: '+0.9x', isPositive: true },
      { title: 'Customer Acquisition Cost', value: '$142', change: '-28%', isPositive: true },
      { title: 'Qualified Inbound Leads', value: '3,840', change: '+41%', isPositive: true },
      { title: 'Conversion Funnel Speed', value: '3.4 days', change: '-1.8 days', isPositive: true }
    ],
    primaryProduct: 'salexplex',
    secondaryProducts: ['calendex', 'buzzcom'],
    keyFocus: ['Lead Attribution Precision', 'Campaign Performance Optimization', 'Omnichannel Reach']
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    category: 'General',
    question: 'What is Plexaar?',
    answer: 'Plexaar is a connected business operating ecosystem that brings communication, appointments, people management, finance, and marketing together under one unified enterprise platform. Rather than stitching together disconnected SaaS tools, Plexaar unifies operations into a single cohesive core.'
  },
  {
    category: 'Products',
    question: 'What specialized products are included inside the Plexaar ecosystem?',
    answer: 'Plexaar includes five specialized enterprise products: BUZZCOM (Chat & Calling Communication Hub), CALENDEX (Appointment & Booking Management), iREACH (HR & Workforce Management), ONDAL (Financial Operations & Analytics), and SALEXPLEX (Marketing Portal & Campaign Management).'
  },
  {
    category: 'General',
    question: 'How is Plexaar different from traditional ERP systems?',
    answer: 'Traditional ERPs are rigid, clunky, and often require endless custom development. Plexaar provides a modern, modular ecosystem with specialized, intuitive products for every major department—allowing data to flow naturally between team communication, customer scheduling, HR, finance, and marketing without friction.'
  },
  {
    category: 'Products',
    question: 'What is BUZZCOM and what does it handle?',
    answer: 'BUZZCOM is Plexaar’s communication hub. It manages team chats, HD audio/video calls, customer messaging, and broadcast updates while maintaining direct contextual integration with client appointments, financial records, and employee profiles.'
  },
  {
    category: 'Products',
    question: 'What is CALENDEX and how does it manage appointments?',
    answer: 'CALENDEX is an enterprise appointment and booking management system. It synchronizes staff calendars, resource availability, customer booking portals, automated SMS/email reminders, and deposit collection to eliminate scheduling friction.'
  },
  {
    category: 'Products',
    question: 'What capabilities does iREACH provide for HR teams?',
    answer: 'iREACH is Plexaar’s workforce and HR management module. It handles centralized employee directories, automated attendance, leave request approvals, performance evaluation cycles, document compliance, and department organizational structures.'
  },
  {
    category: 'Products',
    question: 'What financial operations are managed by ONDAL?',
    answer: 'ONDAL acts as Plexaar’s financial command center. It tracks real-time revenue streams, automated multi-currency invoicing, expense classification, ledger streams, accounts receivable aging, and executive cash-flow forecasting.'
  },
  {
    category: 'Products',
    question: 'How does SALEXPLEX support enterprise marketing?',
    answer: 'SALEXPLEX is Plexaar’s marketing portal and campaign management hub. It provides campaign orchestration, lead scoring and attribution, audience journey mapping, and conversion funnel analytics.'
  },
  {
    category: 'Enterprise',
    question: 'Can Plexaar support multi-department, multi-location enterprise organizations?',
    answer: 'Yes. Plexaar is architected specifically for growing businesses and large enterprise organizations with complex multi-department, multi-tier, or multi-location operational requirements.'
  },
  {
    category: 'Security',
    question: 'How does Plexaar handle data security and access control?',
    answer: 'Plexaar incorporates enterprise-grade security including strict role-based access control (RBAC), end-to-end data encryption in transit and at rest, detailed audit trail logs, granular permission policies, and cloud infrastructure isolation.'
  },
  {
    category: 'Enterprise',
    question: 'How is Plexaar implemented for new enterprise clients?',
    answer: 'Plexaar follows a structured 7-step enterprise implementation model: 1. Discovery, 2. Solution Design, 3. Ecosystem Configuration, 4. Supported Systems Integration, 5. Team Onboarding, 6. Go-Live Launch, and 7. Continuous Optimization.'
  },
  {
    category: 'General',
    question: 'How can our organization request a live product demo?',
    answer: 'You can request a personalized enterprise demo by clicking any "Book a Demo" button on this page or submitting the demo form. Our solution architecture team will tailor a presentation based on your selected products and operational goals.'
  }
];

export const IMPLEMENTATION_STEPS = [
  {
    number: '01',
    title: 'DISCOVERY',
    subtitle: 'Organizational Audit',
    description: 'We analyze your current software landscape, department workflows, and operational pain points.'
  },
  {
    number: '02',
    title: 'SOLUTION DESIGN',
    subtitle: 'Ecosystem Architecture',
    description: 'We map the 5 Plexaar products to your exact business structure and departmental hierarchies.'
  },
  {
    number: '03',
    title: 'CONFIGURATION',
    subtitle: 'System Parameterizing',
    description: 'Setting up user roles, permission policies, branding rules, approval chains, and communication channels.'
  },
  {
    number: '04',
    title: 'INTEGRATION',
    subtitle: 'Supported Systems Sync',
    description: 'Connecting supported external data endpoints, legacy database migration pathways, and API links.'
  },
  {
    number: '05',
    title: 'TEAM ONBOARDING',
    subtitle: 'Role-based Training',
    description: 'Preparing C-suite leaders, department directors, and staff through interactive onboarding modules.'
  },
  {
    number: '06',
    title: 'GO LIVE',
    subtitle: 'Enterprise Launch',
    description: 'Switching over to the Plexaar ecosystem with dedicated 24/7 technical launch support.'
  },
  {
    number: '07',
    title: 'OPTIMIZATION',
    subtitle: 'Continuous Evolution',
    description: 'Ongoing performance reviews, system optimization, feature updates, and ecosystem scaling.'
  }
];

export const INTEGRATIONS_LIST = [
  { name: 'Google Workspace', category: 'Productivity', icon: 'Globe' },
  { name: 'Microsoft 365', category: 'Enterprise Office', icon: 'Layers' },
  { name: 'Salesforce CRM', category: 'Customer Care', icon: 'Database' },
  { name: 'Stripe Payments', category: 'Payment Gateway', icon: 'CreditCard' },
  { name: 'Zapier Webhooks', category: 'Automation', icon: 'Cpu' },
  { name: 'AWS Cloud', category: 'Infrastructure', icon: 'Cloud' },
  { name: 'Twilio SMS & Voice', category: 'Telephony', icon: 'Phone' },
  { name: 'Slack Connect', category: 'Team Chat', icon: 'MessageCircle' }
];
