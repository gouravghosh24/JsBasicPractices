class Stack {
    constructor(){
        this.people = [];
        this.counter = 0;  
    }
    push(contains){
        this.people[this.counter]=contains;
        console.log(`Available for VChat ${contains} with unique code ${this.counter} \n`);
        this.counter +=1;
        return this.counter -1;
    }
    pop(){
        if(this.counter == 0) return undefined
        let deleting = this.people[this.counter -1]
        this.counter -= 1
        console.log(`Just Exited Chat : ${deleting}`)
        return deleting
    }
    peek(){
        if(this.deleting <0)
        {
            console.log("No One Available for chat");
        }
        else{
            console.log(`\n Available for chat :${this.counter} people \n ${this.people} \n`);
        }
    }
}

const stack = new Stack();

stack.push(`***| Name: Jhon | Group: Customer Support |***`);
stack.push(`***| Name: Robert | Group: Technical Assist |***`);
stack.push(`***| Name: David | Group: Senior Supervisor |***`);
stack.push(`***| Name: Anthony | Group: Circuit Board Specialist |***`);

stack.pop(`***| Name: Anthony | Group: Circuit Board Specialist |***`);

stack.peek();