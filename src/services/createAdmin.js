// Temporary one-off: createAdmin.js (run from a small script or admin UI)

import { ref, set } from "firebase/database";
import { db } from "./firebase";

const uid = "THE_USER_UID";
await set(ref(db, `admins/${uid}`), {
    role: "admin",
    restaurantId: "demoRestaurant",
});
console.log("Admin user created/updated.");