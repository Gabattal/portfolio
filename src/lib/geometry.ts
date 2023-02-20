export type TVector = {
    x: number;
    y: number;
}

export function addVector(a: TVector, b: TVector): TVector {
    return {
        x: a.x + b.x,
        y: a.y + b.y
    };
}

export function multiplyVector(a: TVector, b: number): TVector {
    return {
        x: a.x * b,
        y: a.y * b
    };
}
