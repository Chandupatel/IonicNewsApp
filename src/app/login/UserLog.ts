export class UserLog{
	email:string;
	Pswd:string;
	token:string;

	constructor(m:string, n:string,t:string)
	{
		this.email = m;
		this.Pswd = n;
		this.token = t;
	}
}