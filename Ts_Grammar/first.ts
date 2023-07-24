
type UserType=  {
    id : number
    name : string
}
type UserType2 = UserType & {
    age : number;

};
const User1 : UserType2= {
    id : 1,
    name : 'gyu',
    age : 111
}
// console.log(User1)
interface A  {
    id : number;
    name: string;
}
interface B extends  A{
    age : number;
}
const num1 : B ={
    id : 0,
    name : 'jeon',
    age : 1,
};
console.log(num1);