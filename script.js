document.addEventListener('DOMContentLoaded', () => {

    // ============================================= //
    //                   Data.js                     //
    // ============================================= //
    const VECTORS = {
        A: { x: -10 * Math.sqrt(3), y: 10 }, // (-17.32, 10)
        B: { x: -36.95, y: -64 },
    };
    VECTORS.R = { x: VECTORS.A.x + VECTORS.B.x, y: VECTORS.A.y + VECTORS.B.y };

    const COLORS = {
        A: 'var(--color-vector-a)',
        B: 'var(--color-vector-b)',
        R: 'var(--color-vector-r)',
        PARALLEL: 'rgba(255, 255, 255, 0.4)',
    };

    // ============================================= //
    //                   Pasos.js                    //
    // ============================================= //
    const steps = [
        {
            title: "Paso 1: El Problema",
            explanation: `<p>¡Hola, pana Luis! Vamos a resolver este ejercicio de vectores paso a paso.</p>
                          <p>Tenemos que sumar dos vectores, \\(\\vec{A}\\) y \\(\\vec{B}\\), para encontrar el vector resultante \\(\\vec{R}\\).</p>
                          <p>Los vectores son:</p>
                          <p>\\(\\vec{A} = (-10\\sqrt{3}, 10) \\approx (-17.32, 10)\\)</p>
                          <p>\\(\\vec{B} = (-36.95, -64)\\)</p>`,
            action: (manager) => {
                manager.drawGrid();
            }
        },
        {
            title: "Paso 2: Dibujando el Vector A",
            explanation: `<p>Primero, vamos a visualizar el vector \\(\\vec{A}\\) en el plano cartesiano.</p>
                          <p>Nace en el origen (0,0) y termina en el punto <code>(-17.32, 10)</code>.</p>
                          <p>Esto significa que se mueve 17.32 unidades a la izquierda en el eje X y 10 unidades hacia arriba en el eje Y.</p>`,
            action: (manager) => {
                manager.drawGrid();
                manager.animateVector({x: 0, y: 0}, VECTORS.A, getComputedStyle(document.documentElement).getPropertyValue('--color-vector-a'), 'A');
            }
        },
        {
            title: "Paso 3: Dibujando el Vector B",
            explanation: `<p>Ahora, hacemos lo mismo con el vector \\(\\vec{B}\\).</p>
                          <p>Nace en el origen (0,0) y termina en el punto <code>(-36.95, -64)</code>.</p>
                          <p>Se mueve 36.95 unidades a la izquierda en el eje X y 64 unidades hacia abajo en el eje Y.</p>`,
            action: (manager) => {
                manager.drawGrid();
                manager.drawVector({x: 0, y: 0}, VECTORS.A, getComputedStyle(document.documentElement).getPropertyValue('--color-vector-a'), 'A');
                manager.animateVector({x: 0, y: 0}, VECTORS.B, getComputedStyle(document.documentElement).getPropertyValue('--color-vector-b'), 'B');
            }
        },
        {
            title: "Paso 4: La Suma Analítica",
            explanation: `<p>Para sumar los vectores, simplemente sumamos sus componentes correspondientes (x con x, y con y).</p>
                          <p>\\(\\vec{R} = \\vec{A} + \\vec{B} = (A_x + B_x, A_y + B_y)\\)</p>
                          <p>\\(R_x = -17.32 + (-36.95) = -54.27\\)</p>
                          <p>\\(R_y = 10 + (-64) = -54\\)</p>
                          <p>Entonces, el vector resultante es: \\(\\vec{R} \\approx (-54.27, -54)\\)</p>`,
            action: (manager) => {
                manager.drawGrid();
                manager.drawVector({x: 0, y: 0}, VECTORS.A, getComputedStyle(document.documentElement).getPropertyValue('--color-vector-a'), 'A');
                manager.drawVector({x: 0, y: 0}, VECTORS.B, getComputedStyle(document.documentElement).getPropertyValue('--color-vector-b'), 'B');
            }
        },
        {
            title: "Paso 5: Dibujando el Vector Resultante",
            explanation: `<p>Ahora dibujemos el vector resultante \\(\\vec{R}\\) que calculamos.</p>
                          <p>Nace en el origen (0,0) y termina en el punto <code>(-54.27, -54)</code>.</p>
                          <p>Este vector representa la suma directa de \\(\\vec{A}\\) y \\(\\vec{B}\\).</p>`,
            action: (manager) => {
                manager.drawGrid();
                manager.drawVector({x: 0, y: 0}, VECTORS.A, getComputedStyle(document.documentElement).getPropertyValue('--color-vector-a'), 'A');
                manager.drawVector({x: 0, y: 0}, VECTORS.B, getComputedStyle(document.documentElement).getPropertyValue('--color-vector-b'), 'B');
                manager.animateVector({x: 0, y: 0}, VECTORS.R, getComputedStyle(document.documentElement).getPropertyValue('--color-vector-r'), 'R');
            }
        },
        {
            title: "Paso 6: El Método del Paralelogramo",
            explanation: `<p>Para verificar visualmente, usamos el método del paralelogramo.</p>
                          <p>Movemos el inicio del vector \\(\\vec{B}\\) al final del vector \\(\\vec{A}\\). Observa cómo el final de este vector "copia" coincide exactamente con el final del vector resultante \\(\\vec{R}\\).</p>`,
            action: (manager) => {
                manager.drawGrid();
                manager.drawVector({x: 0, y: 0}, VECTORS.A, getComputedStyle(document.documentElement).getPropertyValue('--color-vector-a'), 'A');
                manager.drawVector({x: 0, y: 0}, VECTORS.B, getComputedStyle(document.documentElement).getPropertyValue('--color-vector-b'), 'B');
                manager.drawVector({x: 0, y: 0}, VECTORS.R, getComputedStyle(document.documentElement).getPropertyValue('--color-vector-r'), 'R');
                manager.animateVector(VECTORS.A, VECTORS.R, getComputedStyle(document.documentElement).getPropertyValue('--color-vector-b'), '', true);
            }
        },
        {
            title: "Paso 7: Completando la Figura",
            explanation: `<p>Hacemos lo mismo con el vector \\(\\vec{A}\\): movemos su inicio al final del vector \\(\\vec{B}\\).</p>
                          <p>¡Ahí lo tienes! Los cuatro vectores forman un paralelogramo perfecto, y el vector resultante \\(\\vec{R}\\) es la diagonal principal que parte del origen.</p>`,
            action: (manager) => {
                manager.drawGrid();
                manager.drawVector({x: 0, y: 0}, VECTORS.A, getComputedStyle(document.documentElement).getPropertyValue('--color-vector-a'), 'A');
                manager.drawVector({x: 0, y: 0}, VECTORS.B, getComputedStyle(document.documentElement).getPropertyValue('--color-vector-b'), 'B');
                manager.drawVector({x: 0, y: 0}, VECTORS.R, getComputedStyle(document.documentElement).getPropertyValue('--color-vector-r'), 'R');
                manager.drawVector(VECTORS.A, VECTORS.R, getComputedStyle(document.documentElement).getPropertyValue('--color-vector-b'), '', true);
                manager.animateVector(VECTORS.B, VECTORS.R, getComputedStyle(document.documentElement).getPropertyValue('--color-vector-a'), '', true);
            }
        },
        {
            title: "¡Misión Cumplida!",
            explanation: `<p>¡Excelente trabajo, pana!</p>
                          <p>Hemos sumado los vectores de forma analítica y hemos verificado el resultado visualmente con el método del paralelogramo.</p>
                          <p>¡Ya estás listo para el siguiente reto!</p>`,
            action: (manager) => {
                manager.drawGrid();
                manager.drawVector({x: 0, y: 0}, VECTORS.A, getComputedStyle(document.documentElement).getPropertyValue('--color-vector-a'), 'A');
                manager.drawVector({x: 0, y: 0}, VECTORS.B, getComputedStyle(document.documentElement).getPropertyValue('--color-vector-b'), 'B');
                manager.drawVector(VECTORS.A, VECTORS.R, getComputedStyle(document.documentElement).getPropertyValue('--color-vector-b'), '', true);
                manager.drawVector(VECTORS.B, VECTORS.R, getComputedStyle(document.documentElement).getPropertyValue('--color-vector-a'), '', true);
                manager.drawVector({x: 0, y: 0}, VECTORS.R, getComputedStyle(document.documentElement).getPropertyValue('--color-vector-r'), 'R');
            }
        }
    ];

    // ============================================= //
    //            Plano_cartesiano.js                //
    //              + Animaciones.js                 //
    //              + Efectos.js                     //
    //              + Vectores.js (lógica)           //
    // ============================================= //
    class CanvasManager {
        constructor(canvasId) {
            this.canvas = document.getElementById(canvasId);
            this.ctx = this.canvas.getContext('2d');
            this.setCanvasSize();
            
            this.range = 80; // Rango de -80 a 80 en los ejes
            this.scale = this.canvas.width / (this.range * 2);
            this.origin = { x: this.canvas.width / 2, y: this.canvas.height / 2 };
            
            window.addEventListener('resize', () => {
                this.setCanvasSize();
                this.scale = this.canvas.width / (this.range * 2);
                this.origin = { x: this.canvas.width / 2, y: this.canvas.height / 2 };
                updateUI(); // Redibuja el estado actual al cambiar tamaño
            });
        }

        setCanvasSize() {
            const size = this.canvas.parentElement.clientWidth;
            this.canvas.width = size;
            this.canvas.height = size;
        }

        // Mapea coordenadas del mundo a coordenadas del canvas
        map(point) {
            return {
                x: this.origin.x + point.x * this.scale,
                y: this.origin.y - point.y * this.scale
            };
        }

        clear() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }

        drawGrid() {
            this.clear();
            const gridColor = getComputedStyle(document.documentElement).getPropertyValue('--color-grid');
            const axisColor = getComputedStyle(document.documentElement).getPropertyValue('--color-axis');
            const textColor = getComputedStyle(document.documentElement).getPropertyValue('--color-text-muted');
            const tickSize = 5;
            const numTicks = 10; // 10 ticks por cada lado del eje
            const step = this.range / numTicks;

            this.ctx.strokeStyle = gridColor;
            this.ctx.lineWidth = 1;

            // Rejilla y ticks
            for (let i = 1; i <= numTicks; i++) {
                const pos = i * step;
                // Verticales
                this.ctx.beginPath();
                this.ctx.moveTo(this.map({x: pos, y: -this.range}).x, this.map({x: pos, y: -this.range}).y);
                this.ctx.lineTo(this.map({x: pos, y: this.range}).x, this.map({x: pos, y: this.range}).y);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(this.map({x: -pos, y: -this.range}).x, this.map({x: -pos, y: -this.range}).y);
                this.ctx.lineTo(this.map({x: -pos, y: this.range}).x, this.map({x: -pos, y: this.range}).y);
                this.ctx.stroke();
                // Horizontales
                this.ctx.beginPath();
                this.ctx.moveTo(this.map({x: -this.range, y: pos}).x, this.map({x: -this.range, y: pos}).y);
                this.ctx.lineTo(this.map({x: this.range, y: pos}).x, this.map({x: this.range, y: pos}).y);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(this.map({x: -this.range, y: -pos}).x, this.map({x: -this.range, y: -pos}).y);
                this.ctx.lineTo(this.map({x: this.range, y: -pos}).x, this.map({x: this.range, y: -pos}).y);
                this.ctx.stroke();
            }

            // Ejes
            this.ctx.strokeStyle = axisColor;
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.moveTo(0, this.origin.y);
            this.ctx.lineTo(this.canvas.width, this.origin.y);
            this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.moveTo(this.origin.x, 0);
            this.ctx.lineTo(this.origin.x, this.canvas.height);
            this.ctx.stroke();
            
            // Etiquetas de los ejes
            this.ctx.fillStyle = textColor;
            this.ctx.font = '12px Oswald';
            for (let i = 1; i <= numTicks; i++) {
                const label = i * step;
                if (label % 20 === 0) { // Solo etiquetar cada 20 unidades
                    this.ctx.fillText(label, this.map({x: label, y: 0}).x + 5, this.origin.y + 15);
                    this.ctx.fillText(-label, this.map({x: -label, y: 0}).x - 25, this.origin.y + 15);
                    this.ctx.fillText(label, this.origin.x + 5, this.map({x: 0, y: label}).y + 5);
                    this.ctx.fillText(-label, this.origin.x + 5, this.map({x: 0, y: -label}).y + 5);
                }
            }
        }

        drawVector(start, end, color, label, dashed = false) {
            const from = this.map(start);
            const to = this.map(end);
            
            this.ctx.beginPath();
            this.ctx.strokeStyle = color;
            this.ctx.lineWidth = 3;
            if (dashed) {
                this.ctx.setLineDash([5, 5]);
            }
            this.ctx.moveTo(from.x, from.y);
            this.ctx.lineTo(to.x, to.y);
            this.ctx.stroke();
            this.ctx.setLineDash([]); // Reset dash

            // Flecha
            const headlen = 10;
            const angle = Math.atan2(to.y - from.y, to.x - from.x);
            this.ctx.fillStyle = color;
            this.ctx.beginPath();
            this.ctx.moveTo(to.x, to.y);
            this.ctx.lineTo(to.x - headlen * Math.cos(angle - Math.PI / 6), to.y - headlen * Math.sin(angle - Math.PI / 6));
            this.ctx.lineTo(to.x - headlen * Math.cos(angle + Math.PI / 6), to.y - headlen * Math.sin(angle + Math.PI / 6));
            this.ctx.closePath();
            this.ctx.fill();

            // Etiqueta
            if (label) {
                this.ctx.font = 'bold 16px Anton';
                this.ctx.fillStyle = color;
                const labelPos = {
                    x: from.x + (to.x - from.x) * 0.5,
                    y: from.y + (to.y - from.y) * 0.5
                };
                this.ctx.fillText(label, labelPos.x + 10, labelPos.y - 10);
            }
        }

        animateVector(start, end, color, label, dashed = false) {
            let progress = 0;
            const duration = 500; // ms
            let startTime = null;

            const animationStep = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const elapsed = timestamp - startTime;
                progress = Math.min(elapsed / duration, 1);

                const currentEnd = {
                    x: start.x + (end.x - start.x) * progress,
                    y: start.y + (end.y - start.y) * progress
                };
                
                // Redibujar todo lo anterior para no borrarlo
                const stepIndex = steps.indexOf(steps.find(s => s.action === this.currentAction));
                if (stepIndex > 0) {
                    const prevAction = steps[stepIndex - 1].action;
                    prevAction(this);
                } else {
                    this.drawGrid();
                }

                this.drawVector(start, currentEnd, color, progress > 0.5 ? label : '', dashed);

                if (progress < 1) {
                    requestAnimationFrame(animationStep);
                }
            };
            
            this.currentAction = steps.find(s => s.action.toString().includes('animateVector')).action;
            requestAnimationFrame(animationStep);
        }
    }

    // ============================================= //
    //              Main.js + Control.js             //
    // ============================================= //
    const canvasManager = new CanvasManager('cartesian-plane');
    
    const stepTitleEl = document.getElementById('step-title');
    const stepExplanationEl = document.getElementById('step-explanation');
    const stepContentEl = document.getElementById('step-content');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    let currentStep = 0;

    function updateUI() {
        // Efecto de desvanecimiento
        stepContentEl.style.opacity = 0;

        setTimeout(() => {
            const step = steps[currentStep];
            stepTitleEl.textContent = step.title;
            stepExplanationEl.innerHTML = step.explanation;
            
            // Renderizar MathJax
            if (window.MathJax) {
                MathJax.typesetPromise([stepExplanationEl]);
            }

            // Ejecutar la acción de dibujo en el canvas
            step.action(canvasManager);

            // Actualizar botones
            prevBtn.disabled = currentStep === 0;
            nextBtn.disabled = currentStep === steps.length - 1;

            // Efecto de aparición
            stepContentEl.style.opacity = 1;
        }, 300); // Coincide con la transición en CSS
    }

    nextBtn.addEventListener('click', () => {
        if (currentStep < steps.length - 1) {
            currentStep++;
            updateUI();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentStep > 0) {
            currentStep--;
            updateUI();
        }
    });

    // Inicializar la primera vista
    updateUI();
});
