class classes{

}

class person extends classes {
    constructor(name:string,age:number){
        super();
        this.name = name;
        this.age = age;
    }
    name : string;
    age : number;
    getName(name:string,age:number){
        return `Your persons name is ${name} and its age is ${age}`;
    }
}

class studentClass extends person{
    constructor(name:string,age:number,rollNumber:number,courses:string[]){
        super(name,age);
        this.rollNumber = rollNumber;
        this.courses = courses;
    }
    rollNumber : number;
    courses:string[];
    registerForCources(rfc:number){
        if(rfc>=0){
        return `You have registered ${rfc} students in this course`;
    }else{
        return `You have entered invalid number`;
    }
}
}

class InstructorClass extends person{
    constructor(name:string,age:number,salary:number,courses:string){
        super(name,age);
        this.salary = salary;
        this.courses = courses;
    }
    salary: number;
    courses: string;
    assignCourse(courses:string){
        return `You have selected ${courses} subjects`;
    } 
}


class CourseClass extends classes{
    constructor(id:number,name:string,students:string[],instructor:string[]){
        super();
        this.id =id;
        this.name = name;
        this.students = students;
        this.instructor = instructor;
    }
    id : number;
    name: string;
    students :string[];
    instructor : string[];
    addStudent(newName:string){
        return `you have added ${newName} as a student in this course`};
    setInstructor(newInstructor:string){
        return `you have set ${newInstructor} as an instructor in this course`;
    }

}

class DepartmentClass extends classes {
    constructor(name:string,course:string[]){
        super();
        this.name = name;
        this.course = course;
    }
    name : string;
    course : string[];
    addCourse(newCourse:string){
        return `you have added ${newCourse} in this course`
    }
}


export{person};
export{studentClass};
export{InstructorClass};
export{CourseClass};
export{DepartmentClass};
