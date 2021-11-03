import { AbstractControl, ValidationErrors } from '@angular/forms';

export function ValidateSiret(
  control: AbstractControl
): ValidationErrors | null {
  let siret: any = control.value;
  if (siret == null) return null;
  siret = siret.replace(/\s/g, '');
  if (isNaN(siret) || siret.length != 14 || siret == 0) return { siret: true };

  // SIRET de la poste
  if (siret.startsWith(356)) {
    // Cas unique du siège de la poste
    if (siret == 35600000000048) return null;
    // Tous les autres SIRET de la poste
    let total = 0;
    for (let i = 0; i < 14; i++) {
      let step = parseInt(siret[i]);
      total += step;
    }
    return total % 5 === 0 ? null : { siret: true };
  }

  // SIRET classique
  let bal = 0;
  let total = 0;
  for (let j = 14 - 1; j >= 0; j--) {
    let step = (siret.charCodeAt(j) - 48) * (bal + 1);
    total += step > 9 ? step - 9 : step;
    bal = 1 - bal;
  }
  return total % 10 === 0 ? null : { siret: true };
}
