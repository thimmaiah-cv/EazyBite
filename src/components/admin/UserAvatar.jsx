import React from "react";

// A simple utility function to get the first letter of the email/name
const getFirstLetter = (email) => {
  if (email && typeof email === "string" && email.length > 0) {
    // Extracts the first character and converts it to uppercase
    return email.charAt(0).toUpperCase();
  }
  // Return a placeholder if the email is invalid or empty
  return "?";
};

const UserAvatar = ({ email }) => {
  const initial = getFirstLetter(email);

  return (
    // Outer container for the avatar: circle shape, background, and text centering
    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#FFEDD4] text-[#F74A00] font-semibold text-xl">
      {initial}
    </div>
  );
};

export default UserAvatar;
