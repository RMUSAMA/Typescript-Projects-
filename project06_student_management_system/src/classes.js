class classes {
}
class person extends classes {
    constructor(name, age) {
        super();
        this.name = name;
        this.age = age;
    }
    name;
    age;
    getName(name, age) {
        return `Your persons name is ${name} and its age is ${age}`;
    }
}
class studentClass extends person {
    constructor(name, age, rollNumber, courses) {
        super(name, age);
        this.rollNumber = rollNumber;
        this.courses = courses;
    }
    rollNumber;
    courses;
    registerForCources(rfc) {
        if (rfc >= 0) {
            return `You have registered ${rfc} students in this course`;
        }
        else {
            return `You have entered invalid number`;
        }
    }
}
class InstructorClass extends person {
    constructor(name, age, salary, courses) {
        super(name, age);
        this.salary = salary;
        this.courses = courses;
    }
    salary;
    courses;
    assignCourse(courses) {
        return `You have selected ${courses} subjects`;
    }
}
class CourseClass extends classes {
    constructor(id, name, students, instructor) {
        super();
        this.id = id;
        this.name = name;
        this.students = students;
        this.instructor = instructor;
    }
    id;
    name;
    students;
    instructor;
    addStudent(newName) {
        return `you have added ${newName} as a student in this course`;
    }
    ;
    setInstructor(newInstructor) {
        return `you have set ${newInstructor} as an instructor in this course`;
    }
}
class DepartmentClass extends classes {
    constructor(name, course) {
        super();
        this.name = name;
        this.course = course;
    }
    name;
    course;
    addCourse(newCourse) {
        return `you have added ${newCourse} in this course`;
    }
}
export { person };
export { studentClass };
export { InstructorClass };
export { CourseClass };
export { DepartmentClass };
