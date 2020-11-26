import { EyeAmetropy } from './eyeAmetropy';
import { Ophthalmologist } from './ophthalmologist';
import { Optician } from './optician';
import { Product } from './product';

export class Prescription {

  constructor() { }

  referenceMimosa!: string;
  place!: string;
  date!: string;
  eyeAmetropy!: EyeAmetropy;
  ophthalmologist!: Ophthalmologist;
  optician!: Optician;
  product!: Product;
}
