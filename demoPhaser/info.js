export const DEFAULT_LANGUAGE = 'es';

export class Info {
  static language = 'es';
  static Infos = {};

  constructor(key, translations) {
    this.key = key;
    this.translations = translations;
  }

  get info() {
    return this.translations[Info.language];
  }

  /**
   * Carga una lista de objetos simples obtenidos con JSON.parse() en objetos de esta clase.
   * 
   * @param {Object[]} plainObjects 
   */
  static cargaInfo(plainObjects) {
    this.infos = {};
    plainObjects.forEach(m => {
      let info = Info.fromPlainObject(m);
      Info.infos[m.key] = info;
    })
  }

  /**
   * Convierte un objeto simple en una instancia de esta clase.
   * 
   * @param {Object} o
   */
  static fromPlainObject(o) {
    return new Info(o.key, o.translations)
  }
}

const t = (key) => {
  return Info.infos[key].info;
}
export default t;