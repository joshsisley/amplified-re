export enum ContactType {
  PROF = "professional",
  PERSONAL = "personal",
  LEAD = "lead",
}

export enum ProfessionalType {
  REAL_ESTATE_AGENT = "real-estate-agent",
  PROPERTY_MANAGER = "property-manager",
  MORTGAGE_BROKER = "mortgage-broker",
  LENDER = "lender",
  LAWYER = "lawyer",
  INSURANCE_AGENT = "insurance-agent",
  INVESTOR = "investor",
  HOME_INSPECTOR = "home-inspector",
  HANDYMAN = "handyman",
  OTHER = "other",
}

export enum LeadType {
  COLD = "cold",
  HOT = "hot",
  WARM = "warm",
}

export const CONTACT_TYPES: any = {
  [ContactType.PROF]: "Professional",
  [ContactType.PERSONAL]: "Personal",
  [ContactType.LEAD]: "Lead",
};

export const SUBTYPES: any = {
  [ProfessionalType.REAL_ESTATE_AGENT]: "Real Estate Agent",
  [ProfessionalType.PROPERTY_MANAGER]: "Property Manager",
  [ProfessionalType.MORTGAGE_BROKER]: "Mortgage Broker",
  [ProfessionalType.LENDER]: "Lender",
  [ProfessionalType.LAWYER]: "Lawyer",
  [ProfessionalType.INSURANCE_AGENT]: "Insurance Agent",
  [ProfessionalType.INVESTOR]: "Investor",
  [ProfessionalType.HOME_INSPECTOR]: "Home Inspector",
  [ProfessionalType.HANDYMAN]: "Handyman",
  [ProfessionalType.OTHER]: "Other",
  [LeadType.COLD]: "Cold",
  [LeadType.HOT]: "Hot",
  [LeadType.WARM]: "Warm",
};

export const PROFESSIONAL_TYPES_LIST = [
  { value: 'real-estate-agent', label: 'Real Estate Agent' },
  { value: 'mortgage-broker', label: 'Mortgage Broker' },
  { value: 'lawyer', label: 'Lawyer' },
  { value: 'home-inspector', label: 'Home Inspector' },
  { value: 'handyman', label: 'Handyman' },
  { value: 'investor', label: 'Investor' },
  { value: 'other', label: 'Other' },
];

export const LEAD_TYPES = [
  { value: 'cold', label: 'Cold' },
  { value: 'warm', label: 'Warm' },
  { value: 'hot', label: 'Hot' },
]