function isDirector(employee: { role: string }): boolean {
    return employee.role === 'Director';
}
function executeWork(employee: { firstName: string; lastName: string }): string {
    if(employee.role === 'Director') {
        workDirectorTasks();
    } else {
        workTeacherTasks();
    }
}