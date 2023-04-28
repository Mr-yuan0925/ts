// 泛型 generic 泛指的类型

function join<T>(first: T , second: T ) {
    return `${first}${second}`
}

join<string>('1','2')

function map<T>(params: T[]) {
    return params
}

map<string>(['123'])

function add<T, P>(first: T , second: P ) {
    return `${first}${second}`
}

add<number,string>(1,'b')


class DateManager {
    constructor(private data: string[]) {
    }
    getItem(index) {
        return this.data[index]
    }
}

const dateManager = new DateManager(['1'])

dateManager.getItem(0)

class DateManager2<T> {
    constructor(private data: T[]) {
    }
    getItem(index): T {
        return this.data[index]
    }
}

const dateManager2 = new DateManager2<string>(['2'])

dateManager2.getItem(0)

interface Item {
    name: string
}

class DateManager3<T extends Item> {
    constructor(private data: T[]) {
    }
    getItem(index): string {
        return this.data[index].name
    }
}

const dateManager3 = new DateManager3([{name: 'Tom'}])

dateManager3.getItem(0)


class DateManager4<T extends Item> {
    constructor(private data: T[]) {
    }
    getItem(index): T {
        return this.data[index]
    }
}

const dateManager4 = new DateManager4<Item>([{name: 'Tom'}])

dateManager4.getItem(0).name

function hello<T>(params: T) {
    return params
}


const func: <T>(params: T) => T = hello

const func1: <T>(params: T) => T = <T>(params: T) => {
    return params
}
