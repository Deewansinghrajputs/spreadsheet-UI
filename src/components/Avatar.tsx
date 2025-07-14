import React from "react";

interface AvatarProps {
  name: string;
}

const getInitials = (name: string) => {
  const words = name.split(" ");
  if (words.length >= 2) {
    return words[0][0] + words[1][0];
  }
  return name.slice(0, 2);
};

const Avatar: React.FC<AvatarProps> = ({ name }) => {
  const initials = getInitials(name).toUpperCase();

  return (
    <div
      className="w-8 h-8 rounded-full bg-blue-500 text-white text-sm font-semibold flex items-center justify-center"
      title={name}
    >
      {initials}
    </div>
  );
};

export default Avatar;
