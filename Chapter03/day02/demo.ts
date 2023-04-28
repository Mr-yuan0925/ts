interface Bird {
    fly: boolean;
    sing: () => {}
}

interface Dog {
    fly: boolean;
    bark: () => {}
}

function trainAnial(animal: Bird | Dog){
    // 断言
    if(animal.fly){
        (animal as Bird).sing();
    } else {
        (animal as Dog).bark()
    }
    // in 语法做类型保护
    if('sing' in animal){
        animal.sing()
    } else {
        animal.bark()
    }
}

function add(first: string | number, second: string | number) {
    if(typeof first === "string" || typeof second === "string"){
        return `${first}${second}`
    } else {
        return first + second
    }
}

// instanceof 做类型保护
class NumberObj {
    count: number
}

function addSecond(first: Object | NumberObj, second: Object | NumberObj) {
    if(first instanceof NumberObj && second instanceof NumberObj){
        return first.count + second.count
    } else {
        return 0
    }
}


