export const columns = [
  { key: 'id', label: 'ID', width: 5 },
  { key: 'partnerName', label: 'Name', width: 15 },
  { key: 'partnerType', label: 'Type', width: 15 },
  { key: 'contract', label: 'Contract', width: 20 },
  { key: 'grosssales', label: 'Gross Sales', width: 15 },
  { key: 'commissions', label: 'Commissions', width: 15 },
  { key: 'conversions', label: 'Conversions', width: 15 },
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