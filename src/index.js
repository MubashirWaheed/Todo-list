import './style.css';
import { textArea } from './textarea';
import { addProject, objectsArray } from './addproject';
import { li } from './sidebarDom';
import {updateSubtask} from './tasksection'

class Project{
    constructor(projectName, description){
        this.projectName = projectName;
        this.description = description;
        this.subtasks  = [];
    }
}

export {Project}