export default interface ICard {
  id: string;
  title: string;
  cardType: string;
  pronunciation?: string;
  translation?: string;
  audio?: string;
  image?: string; // Ensure this property is correctly defined
  alternate_images?: string[];
}
