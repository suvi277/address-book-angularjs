export class PersonAddress {
	id: number;
	address: object = {};
    name: string = "";
    zipCode: string = "";
    country: string = "";

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

    save(): PersonAddress {
        this.address = {
        	zipCode: `${this.zipCode}`,
        	country: `${this.country}`
        };

        return this;
    }
}
