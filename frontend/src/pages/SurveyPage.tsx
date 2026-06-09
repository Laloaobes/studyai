import { useState } from 'react';
import { Brain, Send, CheckCircle, BookOpen } from 'lucide-react';

export function SurveyPage() {
  const [submitted, setSubmitted] = useState(false);
  
  // Agregamos todos los campos posibles al estado inicial
  const [formData, setFormData] = useState({
    level: '',
    // Campos de Prepa
    prepaGrade: '',
    prepaArea: '',
    // Campos de Universidad
    uniPeriodType: '',
    uniPeriodNumber: '',
    uniCareer: '',
    // Hábitos y Resultados
    hours: '',
    daysBefore: '',
    grade: '',
    sleep: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos listos para enviar a la Base de Datos:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 text-gray-900">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center border border-gray-100">
          <CheckCircle className="h-16 w-16 text-emerald-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold mb-2">¡Gracias por tu aporte!</h2>
          <p className="text-gray-500 mb-6">Tus datos ayudarán a entrenar a nuestra Inteligencia Artificial para ayudar a más estudiantes.</p>
          <button 
            onClick={() => {
              setSubmitted(false);
              setFormData({ level: '', prepaGrade: '', prepaArea: '', uniPeriodType: '', uniPeriodNumber: '', uniCareer: '', hours: '', daysBefore: '', grade: '', sleep: '' });
            }}
            className="w-full bg-indigo-600 text-white rounded-xl py-3 font-semibold hover:bg-indigo-700 transition"
          >
            Enviar otra respuesta
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 text-gray-900">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        
        <div className="bg-indigo-600 px-8 py-10 text-white text-center">
          <Brain className="h-12 w-12 mx-auto mb-4 text-indigo-200" />
          <h1 className="text-3xl font-bold mb-2">Estudio de Rendimiento Académico</h1>
          <p className="text-indigo-100 text-sm">
            Ayúdanos a entrenar el algoritmo de StudyAI. Esta encuesta es 100% anónima.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="px-8 py-10 space-y-8">
          
          {/* =========================================
              SECCIÓN A: PERFIL CONDICIONAL
              ========================================= */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold border-b pb-2 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-indigo-600" /> Sección A: Tu Perfil
            </h3>
            
            {/* Pregunta inicial (Gatillo) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nivel de estudios actual</label>
              <select 
                required 
                className="w-full rounded-xl border-gray-300 bg-gray-50 p-3 text-sm focus:ring-indigo-600 focus:border-indigo-600 border" 
                value={formData.level}
                onChange={e => setFormData({...formData, level: e.target.value})}
              >
                <option value="">Selecciona tu nivel...</option>
                <option value="prepa">Preparatoria / Bachillerato</option>
                <option value="uni">Universidad</option>
              </select>
            </div>

            {/* CONDICIONAL: SI ELIGE PREPARATORIA */}
            {formData.level === 'prepa' && (
              <div className="grid sm:grid-cols-2 gap-6 animate-in fade-in slide-in-from-top-4 duration-300">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Semestre cursando</label>
                  <select required className="w-full rounded-xl border-gray-300 bg-gray-50 p-3 text-sm focus:ring-indigo-600 focus:border-indigo-600 border" onChange={e => setFormData({...formData, prepaGrade: e.target.value})}>
                    <option value="">Selecciona...</option>
                    <option value="1">1er Semestre</option>
                    <option value="2">2do Semestre</option>
                    <option value="3">3er Semestre</option>
                    <option value="4">4to Semestre</option>
                    <option value="5">5to Semestre</option>
                    <option value="6">6to Semestre</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Área o Especialidad</label>
                  <select required className="w-full rounded-xl border-gray-300 bg-gray-50 p-3 text-sm focus:ring-indigo-600 focus:border-indigo-600 border" onChange={e => setFormData({...formData, prepaArea: e.target.value})}>
                    <option value="">Selecciona...</option>
                    <option value="tronco_comun">Sin área</option>
                    <option value="fisico_matematico">Físico-Matemático</option>
                    <option value="quimico_biologo">Químico-Biológico</option>
                    <option value="humanidades">Humanidades y Ciencias Sociales</option>
                    <option value="economico_administrativo">Económico-Administrativo</option>
                  </select>
                </div>
              </div>
            )}

            {/* CONDICIONAL: SI ELIGE UNIVERSIDAD */}
            {formData.level === 'uni' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-300">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre de la Carrera</label>
                  <input type="text" required placeholder="Ej. Ingeniería en Sistemas Computacionales" className="w-full rounded-xl border-gray-300 bg-gray-50 p-3 text-sm focus:ring-indigo-600 focus:border-indigo-600 border" onChange={e => setFormData({...formData, uniCareer: e.target.value})} />
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Periodo</label>
                    <select required className="w-full rounded-xl border-gray-300 bg-gray-50 p-3 text-sm focus:ring-indigo-600 focus:border-indigo-600 border" onChange={e => setFormData({...formData, uniPeriodType: e.target.value})}>
                      <option value="">Selecciona...</option>
                      <option value="semestre">Semestre</option>
                      <option value="cuatrimestre">Cuatrimestre</option>
                      <option value="trimestre">Trimestre</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">¿Qué número cursas?</label>
                    <input type="number" min="1" max="15" required placeholder="Ej. 8" className="w-full rounded-xl border-gray-300 bg-gray-50 p-3 text-sm focus:ring-indigo-600 focus:border-indigo-600 border" onChange={e => setFormData({...formData, uniPeriodNumber: e.target.value})} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* =========================================
              SECCIÓN B y C: INTACTAS (Solo aparecen si ya eligió nivel)
              ========================================= */}
          {formData.level && (
            <div className="space-y-8 animate-in fade-in duration-500 delay-150">
              {/* SECCIÓN B */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold border-b pb-2 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-indigo-600" /> En tu último examen
                </h3>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">¿Cuántas horas totales estudiaste?</label>
                    <input type="number" step="0.5" min="0" required placeholder="Ej. 4.5" className="w-full rounded-xl border-gray-300 bg-gray-50 p-3 text-sm focus:ring-indigo-600 focus:border-indigo-600 border" onChange={e => setFormData({...formData, hours: e.target.value})} />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">¿Días de anticipación?</label>
                    <select required className="w-full rounded-xl border-gray-300 bg-gray-50 p-3 text-sm focus:ring-indigo-600 focus:border-indigo-600 border" onChange={e => setFormData({...formData, daysBefore: e.target.value})}>
                      <option value="">Selecciona...</option>
                      <option value="0">El mismo día (0 días)</option>
                      <option value="1">1 a 2 días antes</option>
                      <option value="3">3 a 5 días antes</option>
                      <option value="7">Más de una semana</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* SECCIÓN C */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold border-b pb-2 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-indigo-600" /> Resultados de tu último examen
                </h3>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Calificación obtenida (0-100)</label>
                    <input type="number" min="0" max="100" required placeholder="Ej. 85" className="w-full rounded-xl border-gray-300 bg-gray-50 p-3 text-sm focus:ring-indigo-600 focus:border-indigo-600 border" onChange={e => setFormData({...formData, grade: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Horas de sueño esa noche</label>
                    <input type="number" step="0.5" min="0" max="24" required placeholder="Ej. 6" className="w-full rounded-xl border-gray-300 bg-gray-50 p-3 text-sm focus:ring-indigo-600 focus:border-indigo-600 border" onChange={e => setFormData({...formData, sleep: e.target.value})} />
                  </div>
                </div>
              </div>

              <button type="submit" className="w-full flex justify-center items-center gap-2 bg-indigo-600 text-white rounded-xl py-4 font-bold text-lg hover:bg-indigo-700 transition shadow-lg shadow-indigo-200">
                Enviar datos a la IA <Send className="h-5 w-5" />
              </button>
            </div>
          )}

        </form>
      </div>
    </div>
  );
}