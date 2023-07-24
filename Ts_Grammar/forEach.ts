// interface Array<T> { //interface , class , type 도 제네릭이 가능하다.
//     forEach(callbackfn : (value: T , index : number, array : T[])=> void, thisArg? :any):void; //forEach 의 인터페이스
// }
//
// //forEach 로 실행시 타입추론은 typeScript 자체에서 interface 해줘서 타입별로 추론된다.
// [1,2,3].forEach((item )=> {console.log(item)});
// ['1','2','3'].forEach((item1)=> {console.log(item1)});
//     [true, false,true].forEach((item2)=> {console.log(item2)});
//
//     const a : Array<number> = [1,2,3];
//     console.log(a);


//forEach 타입 직접만들어 보기
interface Arr<T>{
    forEach(callback : (item : T)=> void):void;
}

const a: Arr<number> = [1,2,3];
a.forEach((item)=>{
    console.log(item);
})

const b : Arr<string>  = ['1','2','3'];
b.forEach((item)=>{
    console.log(item);
})