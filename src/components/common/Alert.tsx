import React from 'react';

interface AlertProps {
  type: 'success' | 'error';
  message: string;
}

const Alert: React.FC<AlertProps> = ({ type, message }) => {
  const bgColor = type === 'success' ? 'bg-green-100' : 'bg-red-100';
  const textColor = type === 'success' ? 'text-green-700' : 'text-red-700';

  return (
    <div
      className={`${bgColor} ${textColor} px-4 py-3 rounded relative mb-4 shadow-md`}
      role="alert"
    >
      <span className="block sm:inline font-semibold">{message}</span>
    </div>
  );
};

export default Alert;
