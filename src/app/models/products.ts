

export interface IProducts {
	image: string;
	id: any;
	name: string;
	opus: string;
	price: number;
	weight: number;
	category: string;
	quantity?: number;
 }
 
 export interface Basket {
	key:string;
	image: string;
	id: any;
	name: string;
	opus: string;
	price: number;
	weight: number;
	category: string;
	quantity?: number;
	product: IProducts
 }
 
