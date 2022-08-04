import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(request: Request, response: Response) {
    
    CreateCourseService.execute({
        name: "NodeJS",
        educator: "Guilherme",
        duration: 10
    });

    CreateCourseService.execute({
        name: "ReactJS",
        educator: "Lucas",
    });
    
    return response.send();
}