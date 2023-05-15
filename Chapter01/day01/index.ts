type Point = { x: number, y: number}

function getDistance(point1: Point,point2: Point) {
    return [point2.x - point1.x, point2.y - point1.y]
}

getDistance({x:3,y:4},{x:2,y:1})
console.log(getDistance({x:3,y:4},{x:2,y:1}))



export type LogoType = {
    src: string ;
}
export interface RenderQrCodeParams {
    logo?: LogoType | string;
}

const obj:RenderQrCodeParams = {
    logo: {
        src: '123'
    },
}

if (typeof obj.logo === 'object') {
    obj.logo!.src = '456'; 
}