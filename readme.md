# 🧦 Bonetería Sofi – Control de Inventario Móvil

Aplicación móvil para el **control de inventario y ventas** de una bonetería ambulante que comercializa calcetines, boxers y ropa interior para dama.

Este proyecto nace de un **problema real**: la falta de control de productos, precios, promociones y stock en un negocio sin punto de venta fijo.

---

## 📌 Problema a resolver

La bonetería:

- No cuenta con códigos de producto del proveedor
- Vende en distintos puntos cada día
- Maneja promociones como **3x$25**
- No tiene tiempo para inventarios diarios detallados
- Lleva el control de forma manual (cuando lo lleva)

Esto genera:

- Pérdida de stock
- Desconocimiento de ganancias reales
- Dificultad para identificar productos rápidamente

---

## 💡 Solución propuesta

Una **app móvil sencilla y rápida**, pensada para uso diario, que permite:

- Registrar productos con **SKU propio**
- Controlar stock global
- Manejar precios unitarios y promociones
- Registrar costo del producto para calcular ganancia
- Buscar productos rápidamente (sin depender del nombre largo)
- Autenticación básica (una sola usuaria)

---

## 🛠️ Tecnologías utilizadas

### Frontend (Mobile)

- React Native
- Expo
- React Navigation
- TypeScript

### Backend / Base de datos

- Supabase
  - PostgreSQL
  - Auth
  - RPC (funciones SQL)
  - Storage (imágenes de productos)

### Otros

- Variables de entorno (`.env`)
- Arquitectura modular
- Git / GitHub

---

## 🗂️ Arquitectura del proyecto

src/
 ├── auth/              # Login y autenticación
 ├── core/              # Configuración global (Supabase, constantes)
 ├── inventory/         # Productos y stock
 ├── sales/             # Registro de ventas (futuro)
 ├── navigation/        # React Navigation
 ├── shared/            # Componentes reutilizables
 └── assets/            # Imágenes, íconos


Arquitectura pensada para **escalar sin romper la app**.

---

## 📦 Modelo de producto (inventario)

Campos principales:

- `sku` – Identificador propio del sistema
- `nombre`
- `categoria`
- `costo_unitario`
- `precio_unitario`
- `precio_promocion` (opcional)
- `unidad_promocion` (opcional)
- `stock`
- `imagen_url` (opcional)

Este modelo permite:

- Control real de ganancias
- Manejo flexible de promociones
- Búsquedas rápidas en punto de venta

---

## 🔐 Autenticación

- Login con Supabase Auth
- Pensado para **una sola usuaria** (por el momento)
- Sesión persistente
- Sin registro público (app privada de negocio)

---

## 🚀 Estado del proyecto

- ✅ UX definido
- ✅ Login funcional
- ✅ Base de datos normalizada
- 🚧 Flujo de ventas en desarrollo
- 🚧 Reportes básicos planeados

---

## 🧠 Decisiones técnicas destacables

- Se evita inventario por día para **no sobrecargar a la usuaria**
- Se usa **SKU propio** para evitar dependencia del proveedor
- El backend se maneja directamente desde Supabase para reducir complejidad
- Pensado primero en **operatividad**, luego en métricas

---

## 📈 Posibles mejoras futuras

- Escaneo de códigos de barras generados internamente
- Alertas de stock bajo
- Reportes de ganancia
- Múltiples puntos de venta
- Roles de usuario

---

## 👨‍💻 Autor

**Luis Ángel Díaz Díaz**  
Frontend / Mobile Developer

- GitHub: https://github.com/luis50019
- Proyecto desarrollado como solución a un caso real de negocio
