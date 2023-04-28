// 枚举
enum Status {
    OFFINLE,
    ONLINE,
    DELETE,
}

enum Status1 {
    OFFINLE =4,
    ONLINE,
    DELETE,
}

console.log(Status, 'Status')
console.log(Status1, 'Status1')

function getResult (status: number) {
    if(status === Status.OFFINLE){
        return "offLine"
    } else if (status === Status.ONLINE){
        return "onLine"
    } else if (status === Status.DELETE){
        return "deleted"
    }
    return "error"
}

const result = getResult(Status.OFFINLE)
console.log(result)
