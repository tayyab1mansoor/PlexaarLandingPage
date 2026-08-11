import plexaarCore from '../assets/images/products/plexaar-core.png';
import buzzcom from '../assets/images/products/buzzcom.png';
import calendex from '../assets/images/products/calendex.png';
import ireach from '../assets/images/products/ireach.png';
import ondel from '../assets/images/products/ondel.png';
import salexplex from '../assets/images/products/salexplex.png';
import plexaarLogo from '../assets/images/plexaarLogo.png';
import { ProductId } from '../types';

export const PLEXAAR_CORE_LOGO = plexaarCore;
export const PLEXAAR_HEADER_LOGO = plexaarLogo;

export const PRODUCT_LOGOS: Record<ProductId, string> = {
  buzzcom,
  calendex,
  ireach,
  ondel,
  salexplex,
};

export function getProductLogo(id: ProductId | 'plexaar'): string {
  if (id === 'plexaar') return PLEXAAR_CORE_LOGO;
  return PRODUCT_LOGOS[id];
}
