#  TransitOps – Smart Transport Operations Platform

A smart logistics and fleet management platform developed for the **Odoo Hackathon 2026**. TransitOps helps organizations efficiently manage vehicles, drivers, trips, maintenance, fuel consumption, and operational expenses through a modern dashboard.

##  Features

- JWT Authentication & Role-Based Access Control (RBAC)
- Vehicle Management
- Driver Management
- Trip Management
- Maintenance Tracking
- Fuel Log Management
- Expense Management
- Interactive Dashboard & Reports
- Search, Filters & Pagination
- Responsive UI

---

##  Tech Stack

### Frontend
- React
- TypeScript
- Tailwind CSS
- Ant Design

### Backend
- Django
- Django REST Framework

### Database
- MySQL

### Authentication
- JWT Authentication

### Version Control
- Git & GitHub

---

##  Project Structure

```text
TransitOps/
├── frontend/
├── backend/
├── database/
├── docs/
└── README.md
```

---

##  Installation

### Clone the Repository

```bash
git clone <repository-url>
cd TransitOps
```

### Backend

```bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Database

- Install MySQL
- Create the database
- Import the provided SQL schema
- Update the `.env` file with your database credentials

---

##  Team Members

| Name | Responsibility |
|------|----------------|
| Member 1 | Frontend Development |
| Member 2 | Backend Development |
| Member 3 | Database Design |
| Member 4 | Authentication & Integration |

---

##  Future Enhancements

- Live GPS Tracking
- Route Optimization
- Email & SMS Notifications
- Predictive Maintenance
- AI-based Analytics

---

##  License

Developed exclusively for **Odoo Hackathon 2026**.
