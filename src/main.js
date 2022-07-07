import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './index.css'

import './index.css'


// =================== Initialize firebase ==========================

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGufgwHgIZStd_QffOk6GEMMcBgNtOqWk",
  authDomain: "leaf-mediagroup.firebaseapp.com",
  projectId: "leaf-mediagroup",
  storageBucket: "leaf-mediagroup.appspot.com",
  messagingSenderId: "547575279711",
  appId: "1:547575279711:web:e809d70e0a6520e8a4ebea"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// ===================   Initialize Vue    ==========================

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')