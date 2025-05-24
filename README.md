# UpTask

Proyecto full stack para la gestión de tareas, organizado en backend y frontend independientes.

## Tabla de Contenidos

- [Descripción](#descripción)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Scripts Disponibles](#scripts-disponibles)
- [Convenciones y Reglas](#convenciones-y-reglas)
- [Contribuir](#contribuir)
- [Licencia](#licencia)

---

## Descripción

UpTask es una aplicación para la gestión de tareas, diseñada con una arquitectura desacoplada para facilitar el mantenimiento y la escalabilidad.

---

## Estructura del Proyecto

```
/
├── backend/         # API RESTful en Node.js + TypeScript
│   ├── src/
│   ├── package.json
│   └── tsconfig.json
├── frontend/        # (Próximamente) Aplicación cliente
├── .cursor/         # Reglas y configuración de Cursor (no versionar)
├── .gitignore
└── README.md
```

---

## Tecnologías

- **Backend:** Node.js, TypeScript, Express.js
- **Frontend:** (Próximamente)
- **Control de versiones:** Git
- **Editor recomendado:** VSCode + configuración `.editorconfig`

---

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/uptask.git
cd uptask
```

### 2. Backend

```bash
cd backend
npm install
```

### 3. Frontend

> Próximamente

---

## Scripts Disponibles

En la carpeta `backend/`:

- `npm run dev` – Inicia el servidor en modo desarrollo
- `npm run build` – Compila el proyecto TypeScript
- `npm run start` – Inicia el servidor en modo producción
- `npm test` – Ejecuta las pruebas unitarias

---

## Convenciones y Reglas

- El código debe seguir las reglas definidas en `.cursor/rules/`
- Ver [backend-guide.mdc](.cursor/rules/backend-guide.mdc) y [development-conventions.mdc](.cursor/rules/development-conventions.mdc)
- Usar ramas `feature/` para nuevas funcionalidades y `bugfix/` para correcciones
- Los commits deben ser descriptivos y en español

---

## Contribuir

1. Haz un fork del repositorio
2. Crea una rama para tu feature: `git checkout -b feature/nueva-funcionalidad`
3. Realiza tus cambios y haz commit
4. Haz push a tu rama: `git push origin feature/nueva-funcionalidad`
5. Abre un Pull Request

---

## Licencia

[MIT](LICENSE) 