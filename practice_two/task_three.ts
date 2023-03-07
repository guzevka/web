class Student {
    surname: string
    name: string
    patronymic?: string
    constructor(surname:string,name:string,patronymic?:string){
        this.surname = surname;
        this.name = name;
        this.patronymic = patronymic;
    }
}
class Group {
    title: string
    numOfCourse: number
    listOfStudents: Student[]
    constructor(title: string, numOfCourse: number, listOfStudents: Student[]) {
        this.title = title;
        this.numOfCourse = numOfCourse;
        this.listOfStudents = listOfStudents;
    }

}
class Teacher {
    surname: string
    name: string
    patronymic?: string
    listOfGroup?: Group[]
    degree?: string
    constructor(surname: string, name: string, patronymic?: string, listOfGroup?: Group[], degree?: string) {
        this.surname = surname;
        this.name = name;
        this.patronymic = patronymic;
        this.listOfGroup = listOfGroup;
        this.degree = degree;
    }
}

function isMyStudent(s:Student, t:Teacher) {
    if(t.listOfGroup) {
        for(let i=0; i<t.listOfGroup.length; i++) {
            for(let j=0; j<t.listOfGroup[i].listOfStudents.length; j++) {
                if(t.listOfGroup[i].listOfStudents[j] == s)
                    return true;
            }
            
        }
        return false;
    }
    return false;
}

function getName(element: Student | Teacher | Group) {

    if(element instanceof Student) {
        if(element.patronymic == null) return element.surname + " " + element.name;
        else
            return element.surname + " " + element.name + " " + element.patronymic;
    }
    if(element instanceof Group) {
        return element.title;
    }
    if(element instanceof Teacher) {
        return element.surname + " " + element.name + " " + element.patronymic;
    }
    
}

function studentCount(element: Teacher | Group) {
    let count=0;
    if(element instanceof Teacher) {
        if(element.listOfGroup) {
            for(let i=0; i<element.listOfGroup.length; i++) 
                count += element.listOfGroup[i].listOfStudents.length;
        }
        return count;
    }
    if(element instanceof Group) {
        return element.listOfStudents.length;
    }
}

function selectGroup(g1: Group, g2: Group, st: Student) {
    if(g1.listOfStudents.length < g2.listOfStudents.length)
        g1.listOfStudents.push(st);
    else
    g2.listOfStudents.push(st);
}

const st1 = new Student(
    "Kosheleva",
    "Alina"
);
const st2 = new Student (
    "Guzeeva",
    "Daria",
    "Vladimirovna"
);
const st3 = new Student (
    "Koshelev",
    "Slava"
);
const st4 = new Student (
    "Suvorov",
    "Vlad"
);
let group1 = new Group (
    "IT",
    2,
    [st1,st2]
);
let group2 = new Group (
    "AVTO",
    3,
    [st3]
);
let teacher = new Teacher(
    "Колитченко",
    "Софья",
    "Александровна",
    [group1],
    "Старший преподаватель"
);

selectGroup(group1,group2,st4);
console.log(isMyStudent(st1,teacher));
console.log(isMyStudent(st3,teacher));
console.log(getName(st1));
console.log(getName(group1));
console.log(studentCount(group2));
console.log(studentCount(teacher));
