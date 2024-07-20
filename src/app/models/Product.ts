export class Product {
  id: number;
  categoryId: number;
  name: string;
  description: string;
  price: number;
  promoPrice: number;
  stock: number;

  constructor(id: number, categoryId: number, name: string, description: string, price: number, promoPrice: number, stock: number) {
    this.id = id;
    this.categoryId = categoryId;
    this.name = name;
    this.description = description;
    this.price = price;
    this.promoPrice = promoPrice;
    this.stock = stock;
  }
}
