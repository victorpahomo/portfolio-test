import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2023 victorpahomo. Todos los derechos reservados.
      </small>
      <p className="text-xs">
        <span className="font-semibold">Esta página fue creada con: </span>
        React y Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        React Email y Resend, Vercel hosting.
      </p>
    </footer>
  );
}
