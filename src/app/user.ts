export class User {
  constructor(
    public id: string,
    public email: string,
	public password: string,
	public firstname: string,
	public lastname: string,
	public phone: number,
	public isActive : boolean) { }
}