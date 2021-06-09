class Stacks{
    constructor(){
        this.items =[];
        this.count = 0;
    }
    push(elements){
        
        this.items[this.count]= elements;
        console.log(`${elements} to ${this.count}`);
        this.count += 1;
        return this.count -1;
    }
    pushobj(element2){
        let arr = Object.entries(element2);
        this.items[this.count]= element2;
        console.log(`${arr} to ${this.count}`);
        this.count += 1;
        return this.count -1;
        
    }
    pop(){
        if(this.count < 0) return undefined;
        let deleteitems = this.items[this.count -1];
        console.log(`${deleteitems} from ${this.count}`);
        this.count -= 1;
        return deleteitems;
    }
    peek(){
        if(this.deleteitems >= 0)
            return this.count
            console.log(`${this.count}`);
    }
}

const stack =  new Stacks();
stack.push(20);
stack.push(40);
stack.push(60);
stack.pushobj({name:"Gourav"});
stack.pushobj({name:"Sourav"});

stack.pop({name:"Gourav"});

stack.peek();
