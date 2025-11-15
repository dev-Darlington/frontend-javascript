namespace Subjects {
    export interface Teacher {
        firstName: any;
        experienceTeachingJava?: number;
    }
    
    class Java {
        teacher: Teacher;
        constructor(teacher: Teacher){
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