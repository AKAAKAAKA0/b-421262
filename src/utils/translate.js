
import { translations } from '../translations/fr';

export function t(key) {
  // Si la clé existe dans nos traductions, la retourner, sinon retourner la clé elle-même
  return translations[key] || key;
}
