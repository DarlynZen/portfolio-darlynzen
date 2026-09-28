# Visual Identity

Este documento define únicamente la identidad visual base del portafolio.

Su objetivo es mantener una dirección visual consistente durante toda la implementación y evitar que nuevas secciones o componentes introduzcan estilos o colores que se alejen de la idea original.

---

# 1. Tema visual

## Midnight Celestial Developer

La identidad visual del portafolio combina una estética tecnológica profesional con una atmósfera nocturna y celestial sutil.

El concepto principal es:

**Software Engineering + Midnight Atmosphere + Celestial Identity**

El portafolio debe transmitir principalmente:

- tecnología;
- desarrollo de software;
- precisión;
- profesionalismo;
- profundidad;
- curiosidad;
- elegancia;
- creatividad controlada.

La identidad de **Software Developer** siempre debe ser la protagonista.

La inspiración celestial funciona únicamente como una capa estética que aporta personalidad y reconocimiento visual.

El sitio no debe sentirse como una página temática sobre el espacio.

La percepción buscada es:

> Un portafolio profesional de desarrollador de software con una identidad visual nocturna, elegante y reconocible.

## Sensación general

La interfaz debe sentirse:

- oscura;
- limpia;
- tecnológica;
- sofisticada;
- ligeramente futurista;
- fría;
- profesional;
- atmosférica;
- coherente.

Debe existir una sensación de profundidad construida principalmente mediante diferentes tonalidades de azul.

La identidad debe permanecer predominantemente monocromática.

No introducir colores adicionales simplemente para hacer la interfaz más llamativa.

## Evitar

La identidad visual no debe evolucionar hacia estilos como:

- gaming;
- cyberpunk;
- streamer;
- VTuber;
- videojuego;
- space-themed website;
- neon UI;
- generic AI landing page;
- gradients morados o rosados excesivos;
- interfaces excesivamente coloridas.

La estética celestial debe permanecer elegante y contenida.

---

# 2. Paleta principal

La identidad utiliza una paleta basada completamente en tonos azules fríos.

## Midnight Black

```css
#05091C
```

Es el color más oscuro de la identidad.

Debe representar la profundidad nocturna del portafolio.

Uso principal:

- fondo principal;
- zonas de máximo contraste;
- base visual general de la aplicación.

No reemplazarlo sistemáticamente por negro puro.

---

## Deep Navy

```css
#091540
```

Es uno de los colores fundamentales de la identidad.

Representa el azul nocturno principal.

Uso:

- fondos secundarios;
- variaciones del background;
- zonas visualmente diferenciadas del fondo principal;
- superficies oscuras;
- profundidad ambiental.

Debe utilizarse junto con `#05091C` para evitar que toda la página tenga un fondo completamente uniforme.

---

## Dusk Blue

```css
#3D518C
```

Azul intermedio y moderado.

Uso:

- elementos secundarios;
- detalles visuales discretos;
- estados de baja intensidad;
- elementos que necesitan distinguirse del fondo sin convertirse en protagonistas;
- elementos desactivados o menos importantes cuando sea apropiado.

No debe competir visualmente con los colores de acento.

---

## Persian Blue

```css
#1B2CC1
```

Azul intenso de la identidad.

Uso:

- aportar profundidad;
- zonas donde se necesite mayor presencia del azul;
- estados visuales destacados;
- variaciones del color principal;
- iluminación ambiental sutil.

Debe actuar como transición entre los fondos oscuros y los azules más luminosos.

No utilizarlo como color dominante de grandes cantidades de texto.

---

## Cornflower Blue

```css
#7692FF
```

Es el **accent principal del portafolio**.

Es uno de los colores más importantes de la identidad.

Debe utilizarse para comunicar:

- elementos activos;
- interacción;
- enlaces importantes;
- estados seleccionados;
- detalles de marca;
- pequeños elementos destacados;
- énfasis visual;
- elementos interactivos relevantes.

Cuando se necesite introducir color sobre la interfaz oscura, este debería ser normalmente el primer color considerado.

Debe utilizarse de forma controlada para conservar su importancia visual.

---

## Icy Blue

```css
#ABD2FA
```

Es el color más luminoso de la familia azul.

Representa la luz fría de la identidad.

Uso:

- highlights;
- detalles especiales;
- elementos celestiales;
- iconografía destacada;
- estados luminosos;
- pequeños detalles de interacción;
- elementos que requieran mayor contraste dentro de la identidad azul.

Debe utilizarse con mayor moderación que `#7692FF`.

Su función es representar los puntos de mayor luminosidad de la interfaz.

---

## Cold White

```css
#F4F7FF
```

Es el color principal para textos importantes.

Debe utilizarse en lugar de blanco puro siempre que sea posible.

Uso:

- títulos;
- headings;
- textos principales;
- información con máxima prioridad visual.

El pequeño matiz frío mantiene la coherencia con toda la paleta.

---

## Blue Gray

```css
#AAB5D6
```

Color principal para contenido secundario.

Uso:

- párrafos;
- descripciones;
- textos explicativos;
- información secundaria;
- contenido que debe ser legible pero no competir con los títulos.

---

## Muted Blue Gray

```css
#7180A5
```

Color destinado a información de menor prioridad.

Uso:

- metadata;
- fechas;
- labels secundarios;
- información auxiliar;
- tecnologías;
- pequeñas anotaciones;
- contenido visualmente subordinado.

No utilizarlo para textos importantes.

---

# 3. Relación entre los colores

La identidad visual debe entenderse como una progresión de oscuridad hacia luminosidad.

```text
#05091C
   ↓
#091540
   ↓
#3D518C
   ↓
#1B2CC1
   ↓
#7692FF
   ↓
#ABD2FA
   ↓
#F4F7FF
```

Cada color tiene un nivel diferente de importancia y luminosidad.

## Fondo

```text
#05091C
#091540
```

Construyen el entorno principal.

Son responsables de la sensación nocturna y profunda del sitio.

---

## Profundidad

```text
#3D518C
#1B2CC1
```

Funcionan como colores intermedios.

Permiten separar visualmente elementos y crear profundidad sin recurrir a colores externos a la identidad.

---

## Acentos

```text
#7692FF
#ABD2FA
```

Representan la parte luminosa de la identidad.

`#7692FF` es el accent principal.

`#ABD2FA` representa highlights y puntos de luz.

No deben dominar grandes superficies de la interfaz.

Su efectividad depende de encontrarse rodeados por los tonos oscuros.

---

## Texto

```text
#F4F7FF
#AAB5D6
#7180A5
```

La información debe organizarse visualmente mediante esta jerarquía.

### Alta prioridad

```text
#F4F7FF
```

### Prioridad media

```text
#AAB5D6
```

### Baja prioridad

```text
#7180A5
```

Esto permite establecer jerarquías sin introducir nuevos colores.

---

# 4. Acentos celestiales

La identidad celestial debe utilizarse únicamente como un elemento complementario de la identidad tecnológica.

El principal símbolo visual es:

```text
✦
```

La estrella de cuatro puntas puede funcionar como un elemento reconocible de la marca personal.

También pueden utilizarse de manera ocasional:

```text
✧
⟡
·
○
◇
```

Estos elementos deben utilizar exclusivamente colores pertenecientes a la paleta principal.

Preferencias:

```css
#7692FF
#ABD2FA
#3D518C
```

Los elementos celestiales no deben introducir colores externos.

## Uso recomendado

Los acentos celestiales pueden utilizarse para:

- acompañar pequeños labels;
- indicar estados activos;
- aportar énfasis a elementos concretos;
- complementar títulos;
- separar información;
- reforzar elementos de identidad;
- acompañar pequeños detalles interactivos;
- aportar personalidad en áreas visualmente neutras.

No deben sustituir iconografía funcional.

No deben convertirse en contenido principal.

No deben utilizarse en cantidades que hagan que el portfolio parezca una web temática del espacio.

La estrella `✦` debe ser el elemento celestial más reconocible.

Los demás símbolos funcionan únicamente como elementos secundarios.

## Color de los acentos

Acento principal:

```css
#7692FF
```

Acento luminoso:

```css
#ABD2FA
```

Acento secundario:

```css
#3D518C
```

Los elementos celestiales deben conservar siempre una apariencia fría y coherente con el resto de la interfaz.

---

# 5. Uso del blanco

Evitar utilizar blanco puro:

```css
#FFFFFF
```

como color predominante de texto.

La identidad utiliza un blanco ligeramente frío:

```css
#F4F7FF
```

Este debe funcionar como el equivalente al blanco dentro del sistema visual.

## Texto principal

```css
#F4F7FF
```

Para:

- títulos;
- headings;
- información principal;
- textos de máxima prioridad.

---

## Texto secundario

```css
#AAB5D6
```

Para:

- párrafos;
- descripciones;
- explicaciones;
- contenido secundario.

---

## Texto auxiliar

```css
#7180A5
```

Para:

- metadata;
- fechas;
- labels;
- información secundaria;
- textos auxiliares.

---

## Principio general

No todo el contenido debe mostrarse con la misma intensidad.

Debe existir una progresión visual:

```text
#F4F7FF   → contenido principal
#AAB5D6   → contenido secundario
#7180A5   → contenido auxiliar
```

Esta jerarquía es parte esencial de la identidad.

El blanco frío debe funcionar como el punto de máxima legibilidad, mientras que los azules claros y grises azulados permiten reducir progresivamente la importancia visual.

---

# Regla principal de identidad

La paleta debe mantenerse predominantemente dentro del espectro:

**Midnight Navy → Blue → Icy Blue → Cold White**

Antes de introducir cualquier nuevo color, evaluar si la misma necesidad puede resolverse utilizando alguno de los colores existentes.

La coherencia de la identidad tiene prioridad sobre aumentar la cantidad de colores.

El resultado debe seguir comunicando:

**Software Developer + Technology + Midnight + Celestial Elegance.**
