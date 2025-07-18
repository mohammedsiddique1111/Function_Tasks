let person = {
    id: 101,
    name: "Siddique",
    designation: "Programmer Analyst Trainee",
    single: true,
    address : {
        city: "Vaniyambadi",
        Pin: 635751,
        state: "TamilNadu"
    },
    details: function(){
        return `ID:${this.id},Name:${this.name},Designation: ${this.designation},Single:${this.single} City:${this.address.city} Pin:${this.address.pin}State:${this.address.state}`
    }
}
console.log(`ID:${person.id} Name:${person.name}Designation:${person.designation} Single:${person.single}City:${person.address.city} Pin:${person.address.Pin} state:${person.address.state}`);

console.log(person.details());