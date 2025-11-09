function workDirectorTasks () {
    return "Getting to director tasks";
}
function workTeacherTasks () {
    return "Getting to work";
}
export function isDirector(employee: { role: string }): boolean {
    return employee.role === 'Director';
}
function executeWork(employee: { role: string }): void {
    isDirector(employee);
    if(employee.role === 'Director') {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }

}