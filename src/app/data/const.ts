export const columns = [
  { key: 'id', label: 'ID' },
  { key: 'partnerName', label: 'Name' },
  { key: 'partnerType', label: 'Type' },
  { key: 'contract', label: 'Contract' },
  { key: 'grosssales', label: 'Gross Sales' },
  { key: 'commissions', label: 'Commissions' },
  { key: 'conversions', label: 'Conversions' },
  { key: 'action', label: '' }
];

export const buttonList = [
  {
    label: 'Choose Columns',
    image: 'assets/list.png',
    alt: 'columns',
    action: 'Choose Columns'
  },
  {
    label: 'Message Partners',
    image: 'assets/letter.png',
    alt: 'message',
    action: 'Message Partners'
  },
  {
    label: 'Export List',
    image: 'assets/download.png',
    alt: 'download',
    action: 'Export List'
  }
];

export const sidebarItems = [
  {
    icon: 'assets/house.png',
    label: 'Dashboard',
    active: true,
  },
  {
    icon: 'assets/user.png',
    label: 'Partner',
    active: false,
  },
  {
    icon: 'assets/check.png',
    label: 'Approvals',
    active: false,
  }
]