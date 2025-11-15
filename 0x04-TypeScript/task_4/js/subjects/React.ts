namespace Subjects {
    export interface Teacher {
        readonly firstName: string;
        readonly lastName: string;
        experienceTeachingReact?: number;
        }
    export class React extends Subject {
        teacher: Teacher;
        // constructor(teacher: Teacher){
        //     this.teacher = teacher;
        // }
        getRequirements(): string{
            return "Here is the list of requirements"
        }
        getAvailableTeacher(): string {
            return `Available Teacher: ${this.teacher.firstName && this.teacher.experienceTeachingReact}`
        }
    }
}