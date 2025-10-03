interface collegeStc {
    name: string,
    stablishIn: number,
    city: string,
    contacts?: { phone: number, email: string }
}

//partial give use freedom to apply stc's key partially i.e. not each madetory
let one: Partial<collegeStc> = {
    name: 'xyz',
    stablishIn: 1978,
    city: 'gkp'
};

//required makes all fields mendatory
let two: Required<collegeStc> = {
    name: 'xyz',
    stablishIn: 1989,
    city: 'lko',
    contacts: {
        phone: 9026903770,
        email: 'as'
    }
};

//readonly make it readonly
let three: Readonly<collegeStc> = {
    name: 'xyz',
    stablishIn: 1990,
    city: 'alwar'
};

//select one to use
let four: Pick<collegeStc, 'name' & 'city'> = {
    name: 'xyz', city: 'xyz'
};

//select one to leave
let five: Omit<collegeStc, 'name'> = {
    city: 'xyz',
    stablishIn: 1900
};

//create an type
type six = 'loading' | "pending" | "error" | "success";
let seven: Exclude<six, 'error'> = "pending";        //error can't be assign in this variable
let eight: Extract<six, 'error' | 'loading'> = "loading";      //anly error or loading can be assingable

//create an type
type Random = string | undefined | null | [];
var nine: NonNullable<Random> = 'hello';     //null can be assignable

//it makes each option an onject's key
let ten: Record<six, boolean> = {
    loading: true,
    pending: false,
    error: false,
    success: true
}