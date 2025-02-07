To include an image of your website in the README, you can add a screenshot and reference it like this:  

1. Place the screenshot in the project root or inside a dedicated folder (e.g., `assets/` or `public/`).  
2. Use Markdown to display the image in the README.  

Here’s the updated section with the image reference:

---

# **Crowdcube - A Crowdfunding Application 🌟**  

Welcome to **Crowdcube**, a modern crowdfunding platform designed to help individuals and organizations raise funds for various projects, causes, and creative ideas.  

## 🌐 Live Website  
[Live Site URL](https://your-live-site-url.com)  

### 📸 Website Screenshot  
![Crowdcube Homepage](https://raw.githubusercontent.com/adnanmahmud0/Crowdcube---A-Crowdfunding-Application/refs/heads/main/Screenshot%202025-02-08%20032933.png)  

 

---

Would you like me to generate a placeholder image or suggest a specific size for your screenshot? 🚀

---

## ✨ Features  

- **Responsive Design** – Works seamlessly on mobile, tablet, and desktop devices.  
- **Secure Authentication** – Login and registration with Firebase authentication and social login options.  
- **Campaign Management** – Create, update, and delete campaigns with protected routes.  
- **Donation Tracking** – View all donated campaigns with detailed user records.  
- **Interactive UI** – Engaging elements like sliders, animations, and theme toggles for an enhanced user experience.  

---

## 🚀 Technologies Used  

### **Client-Side Technologies**  
- **React.js** – Component-based UI development.  
- **Tailwind CSS** – Modern utility-first styling.  
- **React Router** – For seamless navigation.  
- **Axios** – For API requests and data fetching.  
- **Firebase Authentication** – Secure user authentication.  
- **React Toastify & SweetAlert2** – Alert and notification popups.  
- **Lottie React & React Tooltip** – Animated elements and tooltips for better UX.  

---

## 📋 Pages and Features  

### **Public Pages**  
1. **Home Page**  
   - Interactive banner/slider.  
   - Active campaigns section (limit of 6).  
   - Additional informative sections.  
2. **All Campaigns Page**  
   - Displays all campaigns in a sortable table.  
3. **404 Page**  
   - Custom-designed page for invalid routes.  

### **Protected Pages**  
4. **Add Campaign** – Create a new campaign with a comprehensive form.  
5. **My Campaigns** – View, update, and delete user-created campaigns.  
6. **Campaign Details** – Detailed campaign view with a donation option.  
7. **My Donations** – View past donations and track supported campaigns.  

### **Authentication Features**  
- **Login** – Email-password-based login with Google/GitHub OAuth.  
- **Register** – Secure signup with password validation (uppercase, lowercase, and length check).  

---

## 🛠️ Setup Instructions  

### **Prerequisites**  
1. **Node.js** – Install [Node.js](https://nodejs.org/).  
2. **Firebase Project** – Create a Firebase project and enable authentication.  

### **Installation Steps**  
1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/crowdcube-client.git
   ```
2. Navigate to the project folder:  
   ```bash
   cd crowdcube
   ```
3. Install dependencies:  
   ```bash
   npm install
   ```
4. Set up Firebase authentication:  
   - Create a `.env` file in the root directory.  
   - Add your Firebase configuration:  
     ```env
     VITE_FIREBASE_API_KEY=your-api-key
     VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
     VITE_FIREBASE_PROJECT_ID=your-project-id
     VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
     VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
     VITE_FIREBASE_APP_ID=your-app-id
     ```
5. Start the development server:  
   ```bash
   npm run dev
   ```

---

## 📦 Dependencies  

```json
{
  "name": "crowdcube",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "firebase": "^11.0.2",
    "localforage": "^1.10.0",
    "match-sorter": "^8.0.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-icons": "^5.4.0",
    "react-router-dom": "^7.0.2",
    "react-simple-typewriter": "^5.0.1",
    "react-toastify": "^10.0.6",
    "sort-by": "^1.2.0",
    "sweetalert2": "^11.14.5"
  },
  "devDependencies": {
    "@eslint/js": "^9.15.0",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "daisyui": "^4.12.14",
    "eslint": "^9.15.0",
    "eslint-plugin-react": "^7.37.2",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.14",
    "globals": "^15.12.0",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.16",
    "vite": "^6.0.1"
  }
}
```

---

## 🛠️ Development & Build Commands  

| Command           | Description                            |
|------------------|--------------------------------|
| `npm run dev`    | Starts the development server. |
| `npm run build`  | Builds the project for production. |
| `npm run preview` | Previews the built project. |
| `npm run lint`   | Runs ESLint to check for code issues. |

---

## 🤝 Contributors  

- **[Your Name]** - [GitHub Profile](https://github.com/your-username)  
- Contributions are welcome! Feel free to open an issue or submit a pull request.  

---

## 📜 License  

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.  

---

This README is now **structured**, **informative**, and **user-friendly**. Let me know if you need any further refinements! 🚀
