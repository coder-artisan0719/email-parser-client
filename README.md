# Partner Portal

## 📄 Project Overview

The **Partner Portal** is a single-page application (SPA) built using Angular that allows internal teams to view and manage partner data in a structured, interactive, and visually consistent table layout. The application replicates a provided Figma design with pixel-perfect accuracy, includes pagination, responsive UI, placeholder actions, and a loading state, ensuring a user-friendly experience aligned with modern web development best practices.

This project was completed as a home task and simulates interaction with a mock partner data API.

---

## 🚀 Key Features

- ✅ **Dynamic Data Fetching** from a mock API using Angular services
- ✅ **Pixel-perfect UI** based on the provided Figma design
- ✅ **Responsive Layout** using Tailwind CSS and Bootstrap
- ✅ **Table with Pagination** (15 items per page)
- ✅ **Placeholder Actions** (Modals for Message Partners and Export List)
- ✅ **Loading Spinner** during API calls
- ✅ **User-friendly Error Handling**
- ✅ **Component-based Architecture**
- ✅ **Animations using Angular Animations** (transitions & hover effects)

---

## 🧱 Project Structure

```
src/app/
│
├── components/                   # Reusable UI components
│   ├── button-actions/           # Action buttons (e.g., Export, Message Partners)
│   ├── data-picker/              # Date range picker component
│   ├── modal/                    # Reusable modal component
│   ├── partner-table/            # Table displaying partner data
│   └── sidebar/                  # Sidebar navigation component
│
├── data/
│   └── const.ts                  # Static UI data (columns, buttons, sidebar items)
│
├── models/
│   └── partner.model.ts          # Partner interface for data typing
│
├── services/
│   └── partner.service.ts        # Angular service to fetch API data
│
└── app.component.ts             # Root component rendering the full page
```

## 🧑‍💻 Technologies Used

- **Angular:** v19.2
- **Tailwind CSS:** v4
- **Bootstrap:** v5.3
- **RxJS:** For observables and async data handling
- **HttpClient:** For API integration
- **Angular Animations:** For transitions and hover effects
- **FontAwesome:** For icons
- **Mock API:** [MockanAPI](https://mockanapi.com/s/67ae1b3403f9ffca6f47eb79/partners?mock_delay=5000)


## 📊 Table Implementation

- Displays columns such as: ID, Name, Type, Contract, Gross Sales, Commissions, and Conversions
- Pagination: Shows 15 records per page using Angular logic
- Responsive: Adapts to smaller screens and enables horizontal scrolling

## ⚠️ Error Handling

- API Failures: Gracefully displays a user-friendly error message if the API call fails
- Empty/Missing Data: Checks for undefined fields before rendering
- Fallback States: Displays loader (spinner) while awaiting response

## 📱 Responsive Layout
- Built using Tailwind and Bootstrap utilities
- Mobile-friendly: Table layout adapts to screen width
- Scrollable table on smaller viewports

## 📦 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/coder-artisan0719/partner-portal-client.git
cd partner-portal-client
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Update Environment File

Update your environment.ts file with the correct Mock API URL:
```bash
MOCK_API_URL = https://mockanapi.com/s/67ae1b3403f9ffca6f47eb79/partners?mock_delay=5000
```

### 4. Run the Project

```bash
npm start
```

### 5. Build the Project
```bash
npm run build
```