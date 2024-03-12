# Instrucciones

Asegúrese de tener una versión actualizada de Node. Si utiliza nvm, puede ejecutar:

```
nvm use
```

Se instalará la versión `21.6.2`.

Instale las dependencias:

```
npm i
```

Ejecute la aplicación:

```
npm run dev
```

Para ejecutar los tests:

```
npm test
```

Estos son todos los posibles comandos:

```
"scripts": {
  "dev": "vite",
  "build": "tsc && vite build",
  "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
  "preview": "vite preview",
  "test": "vitest --environment jsdom"
}
```

# Dependecias

He utilizado `vite` con una plantilla de React+TS para poder empezar a desarrollar rápidamente. Viene con todo configurado incluido `ESLint`. He añadido `.prettierrc` para no tener que preocuparme por el formateo, aunque no lo he puesto como dependencia.

Junto a React, he utilizado `@tanstack/react-query` y `react-router-dom`, ya que son dos librerías que he utilizado bastante y que me ayudan a crear aplicaciones rápidamente. En cuanto al estilo, he utilizado `tailwindcs`s, porque lo he estado utilizando bastante recientemente.

Para los tests, he utilizado `vitest`, porque quería utilizar algo nuevo que funcionara con `vite`.

# Estructura

Todos los componentes están dentro de `/src` y las rutas de `react-router` en `/routes`. He creado una carpeta `/components` para componentes más genéricos y `/queries` para queries genéricas también. Me hubiera gustado haber puesto las queries según la ruta, pero como diferentes queries se utilizan en diferentes rutas, he optado por ponerlas en un directorio separado.

Como solo he escrito un archivo de tests, lo he puesto junto a su ruta, pero podría haber tests para los componentes o las queries. Depende un poco de lo que quieran hacer los desarrolladores del proyecto.

# Posibles expansiones

La aplicación se podría mejorar de diferentes formas en el futuro:

- Implementar paginación para las diferentes llamadas que hacemos.
- No me gust utilizar `dangerouslySetInnerHTML` debido a las posibles vulnerabilidades de Cross Site Scripting (XSS), habría que encontrar una alternativa.
- Escribir más tests, de integración o unitarios.
- Generar algunas funciones de ayuda para escribir tests más rápido.
