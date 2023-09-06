var person={
	firstName:"Iron",
	lastName: "Man",
	fullName:function(){
		return this.firstName+" "+this.lastName;
	}
}

console.log(person.fullName());