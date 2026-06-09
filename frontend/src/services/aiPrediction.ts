import * as tf from '@tensorflow/tfjs';

// Definimos cómo se verá la información real que vendrá de tu base de datos
export interface RealStudyData {
  hours: number;
  daysBefore: number;
  sleep: number;
  grade: number;
}

export class StudyPredictionModel {
  private model: tf.Sequential;
  public isTrained: boolean = false;

  constructor() {
    // 1. CONSTRUCCIÓN DE LA RED NEURONAL PROFUNDA
    this.model = tf.sequential();
    
    // Capa de entrada: Recibe 3 variables (Horas de estudio, Días de anticipación, Horas de sueño)
    // Tiene 8 "neuronas" ocultas para procesar la información
    this.model.add(tf.layers.dense({ units: 8, activation: 'relu', inputShape: [3] }));
    
    // Segunda capa oculta con 4 neuronas para encontrar patrones más complejos
    this.model.add(tf.layers.dense({ units: 4, activation: 'relu' }));
    
    // Capa de salida: Solo arroja 1 número final (La calificación predicha)
    this.model.add(tf.layers.dense({ units: 1 }));
    
    // Compilador: Le decimos cómo aprender (Adam es el mejor algoritmo actual)
    this.model.compile({ loss: 'meanSquaredError', optimizer: 'adam' });
  }

  /**
   * 2. ENTRENAMIENTO CON DATOS REALES
   * Esta función recibirá toda la lista de respuestas de tu formulario web.
   */
  async trainWithRealData(data: RealStudyData[]) {
    // Si no hay suficientes datos para aprender, no hacemos nada
    if (data.length < 5) {
      console.warn("Se necesitan al menos 5 respuestas en la encuesta para entrenar la IA.");
      return;
    }

    console.log(`🧠 Entrenando IA con ${data.length} respuestas reales...`);

    // Separamos las variables (X) de los resultados (Y)
    const inputs = data.map(d => [d.hours, d.daysBefore, d.sleep]);
    const labels = data.map(d => d.grade);

    // Convertimos los arreglos normales a "Tensores" (Matrices matemáticas de TensorFlow)
    const inputTensor = tf.tensor2d(inputs, [inputs.length, 3]);
    const labelTensor = tf.tensor2d(labels, [labels.length, 1]);

    // Entrenamos el modelo iterando 200 veces (épocas) para que sea preciso
    await this.model.fit(inputTensor, labelTensor, {
      epochs: 200,
      shuffle: true,
      callbacks: {
        onEpochEnd: (epoch, logs) => {
          if (epoch % 50 === 0) {
            console.log(`Progreso IA (Época ${epoch}): Margen de error = ${logs?.loss.toFixed(2)}`);
          }
        }
      }
    });

    // Limpiamos la memoria para no trabar el navegador del usuario
    inputTensor.dispose();
    labelTensor.dispose();
    this.isTrained = true;
    
    console.log("✅ Entrenamiento completado. La IA está lista para predecir.");
  }

  /**
   * 3. PREDICCIÓN
   * Se usa en el Dashboard cuando el usuario pregunta: "¿Qué saco si estudio X horas?"
   */
  predict(hours: number, daysBefore: number, sleepHours: number): number {
    if (!this.isTrained) {
      console.warn("La IA aún no ha sido entrenada con datos reales.");
      return 0;
    }

    // Convertimos la pregunta del usuario a Tensor
    const inputTensor = tf.tensor2d([[hours, daysBefore, sleepHours]], [1, 3]);
    
    // Ejecutamos la predicción
    const outputTensor = this.model.predict(inputTensor) as tf.Tensor;
    const prediction = outputTensor.dataSync()[0];
    
    // Limpiamos memoria
    inputTensor.dispose();
    outputTensor.dispose();

    // Devolvemos el resultado redondeado y limitado entre 0 y 100
    return Math.min(100, Math.max(0, Math.round(prediction)));
  }
}

// Exportamos una única instancia (Singleton) para que toda la app use la misma IA
export const aiPredictor = new StudyPredictionModel();