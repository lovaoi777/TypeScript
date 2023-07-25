//TypeScript는 일반적인 타입 변환을 쉽게 하기 위해서 몇 가지 유틸리티 타입을 제공합니다. 이러한 유틸리티는 전역으로 사용 가능합니다.

interface Profile  {
    name : string
    age : number
    major : string
}


//보통 위의 interface 타입을 참조한다.그리고 위의 타입을 명시대로 작성하게된다.
const byeong : Profile= {
    name : "전병규",
    age : 25,
    major : "컴퓨터공학"
}
// 하지만 예외적으로 다른 케이스로 명시를 할 수 있다.
// 아래와 같이 타입을 명시를 하지 않을 시 에러가 나온다.
// 이와 같이 이러한 에러를 방지하기 위한 유틸리티 타입를 알아보고자 한다.


// const Kim : Profile = {
//     name : "킴",
//     age : 23
// }


//Partial는 위의 타입을 옵셔널로 변경을 해준다.
//즉 아래와 같이 설명 할 수 있다.

const Kim1 : Partial<Profile> = {
    name : "킴",
    age : 23
}

//그래서 직접 구현해보고자 한다.
type P<T> = {
    [Key in keyof T]? : T[Key];
}

