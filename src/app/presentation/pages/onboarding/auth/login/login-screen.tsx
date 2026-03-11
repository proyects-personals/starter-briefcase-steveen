import type { JSX } from "react";

/**
 * Pantalla de Inicio de Sesión (Login).
 * * @description
 * Punto de entrada para la autenticación de usuarios. Gestiona la captura de
 * credenciales, la comunicación con el servicio de Auth y la redirección
 * posterior al éxito del login.
 * * @component
 * @version 1.0.0
 * @returns {JSX.Element} El formulario de acceso centrado y estilizado.
 */
const LoginScreen = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-gray-100 dark:border-zinc-800 transition-all">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            ¡Hola Mundo!
          </h1>
          <p className="text-gray-500 dark:text-zinc-400 text-sm">
            Ingresa tus credenciales para acceder al panel.
          </p>
        </div>

        <div className="py-10 border-2 border-dashed border-gray-200 dark:border-zinc-700 rounded-xl text-center text-gray-400">
          Formulario de Autenticación
        </div>
      </div>
    </section>
  );
};

export default LoginScreen;
