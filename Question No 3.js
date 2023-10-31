class person {
    constructor(name,gender,age,mobileNo,email,languagesKnown = "Tamil,English"){
		this.name = name
		this.gender = gender
		this.age = age
		this.mobileNo = mobileNo
		this.email = email
		this.languagesKnown = languagesKnown
	}
	personName(){
		console.log(`My name is ${this.name}`)
	}
	personGender(){
		console.log(`I am a ${this.gender}`)
	}
	personAge(){
		console.log(`My age is ${this.age}`)
	}
	personMobileNo(){
		console.log(`My mobile number ${this.mobileNo}`)
	}
	personEmail(){
		console.log(`My EMail ID is ${this.email}`)
	}
	personLanguagesKnown(){
		console.log(`languages known is ${this.languagesKnown}`)
	}
}

let person1 = new person("Asraf", "Male", "23", 6446654525, "asrafmhd25545@gmail.com")
person1.personName()
person1.personGender()
person1.personAge()
person1.personMobileNo()
person1.personEmail()
person1.personLanguagesKnown()


// Output:
// My name is Asraf
// new.js:14 I am a Male
// new.js:17 My age is 23
// new.js:20 My mobile number 6446654525
// new.js:23 My EMail ID is asrafmhd25545@gmail.com
// new.js:26 languages known is Tamil,English