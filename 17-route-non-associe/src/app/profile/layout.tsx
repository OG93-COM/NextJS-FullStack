import React from "react";

export default function ProfileLayout({
  children,
  setting,
  account,
}: {
  children: React.ReactNode;
  setting: React.ReactNode;
  account: React.ReactNode;
}) {
  return (
    <div>
      <div>{setting}</div>
      <div>{account}</div>
      <div>
        {children}
      </div>
      <div>{account}</div>
    </div>
  );
}
