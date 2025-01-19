# 🌍 Travel Vista - Travel Tips & Destination Guides

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue.svg)](https://travel-vista-new-version.vercel.app/explore)  
[![Node.js](https://img.shields.io/badge/Node.js-Server-green.svg)](https://github.com/mahamudulhasan-me/travel-tales-server.git)  
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-green.svg)](https://www.mongodb.com/)  
[![JWT](https://img.shields.io/badge/Auth-JWT-orange.svg)](https://jwt.io/)  
[![Stripe](https://img.shields.io/badge/Payment-Stripe-blue.svg)](https://stripe.com/)

---

## **Project Overview**

Welcome to **Travel Vista**, the ultimate platform where travel enthusiasts share stories, exchange tips, and connect with a global community! 🌍✈️ 

With features like **user authentication**, **social engagement**, and **premium content access**, this platform offers a vibrant space for discovering and contributing travel guides, tips, and experiences. Whether you're planning your next adventure or sharing your latest one, **Travel Vista** has you covered.

---

## **Key Features**

- **User Registration & Authentication**:
  - Secure user login and registration via JWT.
  - Profile management with uploadable profile pictures.

- **Rich Text Editor**:
  - Create detailed travel guides with formatting and media attachments.

- **Social Engagement**:
  - Upvote, comment, and follow/unfollow other users.

- **Premium Content Access**:
  - Verified users can access exclusive travel content with Stripe or Aamarpay payment integration.

- **Admin Dashboard**:
  - Manage users, posts, and premium content access.
  - View detailed graphs on platform activity.

- **Dynamic News Feed**:
  - Infinite scrolling, category filtering, and sorting by upvotes to highlight top travel posts.

---

## **Tech Stack**

- **Frontend**: Next.js, ShadCN, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (NoSQL)
- **Authentication**: JSON Web Tokens (JWT)
- **Payment Integration**: Stripe, Aamarpay
- **Hosting**: Vercel (Frontend), Render (Backend)

---

## **Project Setup**

### 1. **Clone the Repositories**

Frontend:
```bash
# Clone the frontend repository
git clone https://github.com/Kamrulthedev/Travel-vista-new-version
cd travel-vista-frontend
```

Backend:
```bash
# Clone the backend repository
git clone https://github.com/Kamrulthedev/Travel-vista-new-version-server
cd travel-tales-server
```

---

### 2. **Install Dependencies**

For both repositories, run:
```bash
npm install
```

---

### 3. **Set Up Environment Variables**

Create a `.env` file in both repositories and add the following environment variables:

#### Frontend `.env`:
```env
NEXT_PUBLIC_BASE_API=<Backend Base API URL>
NEXT_PUBLIC_IMAGEBB_API_KEY=<ImageBB API Key>
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=<Your Stripe Public Key>
```

#### Backend `.env`:
```env
PORT=5000
MONGO_URI=<Your MongoDB Connection String>
JWT_SECRET=<Your JWT Secret>
STRIPE_SECRET_KEY=<Your Stripe Secret Key>
AAMARPAY_STORE_ID=<Your Aamarpay Store ID>
AAMARPAY_STORE_PASSWORD=<Your Aamarpay Store Password>
```

---

### 4. **Run the Applications**

#### Frontend:
```bash
npm run dev
```

#### Backend:
```bash
npm start
```

The application will be accessible at:
- **Frontend**: `http://localhost:3000`
- **Backend**: `http://localhost:5000`

---

## **Features in Detail**

### 1. **User Authentication**
- JWT-based secure login and registration.
- Profile management with uploadable profile pictures.

### 2. **Rich Text Editor**
- Users can create and share detailed travel stories with text formatting and image attachments.

### 3. **Social Engagement**
- Upvote, comment, and follow/unfollow other users.

### 4. **Premium Content Access**
- Verified users can access exclusive travel content with Stripe or Aamarpay payment integration.

### 5. **Admin Dashboard**
- Manage users, posts, and premium content access, with detailed graphs on platform activity.

### 6. **News Feed**
- Infinite scrolling, category filtering, and sorting by upvotes to highlight top travel posts.

---

## **Contributing**

Contributions are welcome! Feel free to fork this project and submit a pull request. Please ensure your contributions align with the goals of the project and follow good coding practices.

---

## **License**

This project is licensed under the MIT License.

---

## **Links**

- **[Live Site](https://travel-vista-new-version.vercel.app/explore/)**
- **[Backend Repository](https://github.com/Kamrulthedev/Travel-vista-new-version-server)**

---

**Let's Explore the World, One Story at a Time!** 🌍✈️
