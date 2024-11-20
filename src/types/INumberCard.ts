import ICard from './ICard';

export default interface INumberCard extends ICard {
  number: number;
  alternate_images?: string[];
  languages?: Array<{
    Code: string;
    numeral: string;
    name: string;
  }>;
}
