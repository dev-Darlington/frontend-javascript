namespace Subjects {
    export interface Teacher {
        readonly firstName: string;
        experienceTeachingJava?: number;
    }
    
    class Java extends Subject {
        teacher: Teacher;
        constructor(teacher: Teacher){
            super();
            this.teacher = teacher;
        }
        getRequirements(): string {
            return "Here is the list of requirements for Java"
        }
        getAvailableTeacher(): string {
            return `Available Teacher: ${this.teacher && this.teacher.experienceTeachingJava}`
        }
    }
}