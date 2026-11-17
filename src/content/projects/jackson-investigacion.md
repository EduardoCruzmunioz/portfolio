---
title: "Investigación Jackson JSON"
description: "Estudio comparativo y desarrollo práctico de procesamiento JSON de alto rendimiento en Java con Jackson (Data Binding, Tree Model y Streaming API) y 35 tests JUnit 5."
technologies: ["Java", "Jackson", "Maven", "JUnit 5", "JSON", "Acceso a Datos"]
category: "console"
githubUrl: "https://github.com/EduardoCruzmunioz/JacksonInvestigacion"
featured: true
order: 4
---

## Sobre el Proyecto

**Investigación Jackson JSON** es un proyecto de ingeniería de software desarrollado en el marco del módulo de Acceso a Datos (DAM). Su propósito es analizar, implementar y contrastar empíricamente los tres paradigmas de procesamiento JSON que ofrece la librería Jackson en Java: Data Binding (POJOs), Tree Model (`JsonNode`) y Streaming API (`JsonParser` / `JsonGenerator`).

---

## Funcionalidades Principales

- **Data Binding Bidireccional:** Mapeo tipado y acumulativo entre colecciones de objetos Java y almacenamiento en disco formateado con `SerializationFeature.INDENT_OUTPUT`.
- **Tree Model Dinámico:** Inspección y consulta jerárquica en memoria con `JsonNode` sin necesidad de clases intermedias, evaluando límites sintácticos de entrada.
- **Streaming API de Alto Rendimiento:** Lectura y escritura basada en eventos y tokens para procesamiento eficiente con consumo de memoria mínimo y constante, implementando duplicación estructural sin instanciación (`copyCurrentStructure`).
- **Suite de 35 Pruebas Unitarias:** Cobertura exhaustiva con JUnit 5 Jupiter combinando técnicas de Caja Negra (particiones de equivalencia, valores límite) y Caja Blanca (análisis de ramas, excepciones y resiliencia).

## Lo que demuestra

Evidencia un conocimiento avanzado en la gestión de ficheros y formatos de intercambio de datos en Java, comprensión de compensaciones técnicas entre consumo de memoria y facilidad de desarrollo, y aplicación rigurosa de metodologías de testing unitario y calidad de código.
