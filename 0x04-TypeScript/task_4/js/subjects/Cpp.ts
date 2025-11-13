interface Teacher {
    experienceTeachingC?: number;
}

namespace Subjects {
    class Cpp extends Subject {
        getRequirements(){
            return "Here is the list of requirements for Cpp"
        }
        getAvailableTeacher(){
            return `Available Teacher: ${this.teacher.firstName && experienceTeachingC}`
        }
    }
}