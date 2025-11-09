export function isDirector(employee: { role: string }): boolean {
    return employee.role === 'Director';
}
function executeWork(employee: { role: string }): void {
    if(employee.role === 'Director') {
        workDirectorTasks();
    } else {
        workTeacherTasks();
    }
}